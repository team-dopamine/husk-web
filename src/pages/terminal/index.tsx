import { useEffect, useRef } from 'react';
import Terminal from '@components/terminal';
import { PageWrapper, TerminalContainer } from './index.style';
import '@xterm/xterm/css/xterm.css';
import WebSocketClient from 'api/socket';
import { useLocation } from 'react-router-dom';

interface LocationState {
  connectionId: number;
}

const TerminalPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<WebSocketClient | null>(null);
  const location = useLocation();
  const connectionId = (location.state as LocationState)?.connectionId;

  useEffect(() => {
    const terminal = new Terminal();
    const socket = new WebSocketClient('wss://husk.kr/ws/ssh-terminal');
    socketRef.current = socket;

    let inputBuffer = '';

    const resizeObserver = new ResizeObserver(() => {
      terminal.fit();
    });

    if (containerRef.current) {
      terminal.open(containerRef.current);
      terminal.fit();
      resizeObserver.observe(containerRef.current);
    }

    // ✅ WebSocket 연결되면 connect 메시지 전송
    socket.onOpen(() => {
      socket.send(`connect:${connectionId}`);
    });

    // ✅ 서버 → 터미널
    socket.onMessage((data: string) => {
      terminal.write(data);
    });

    socket.onError((e) => {
      console.error('[WebSocket] 연결 실패:', e);
      alert('서버와 연결할 수 없습니다.');
    });

    terminal.onData((input: string) => {
      if (input === '\r') {
        socket.send(inputBuffer + '\r');
        inputBuffer = '';
      } else if (input === '\u007f') {
        if (inputBuffer.length > 0) {
          inputBuffer = inputBuffer.slice(0, -1);
          terminal.write('\b \b');
        }
      } else {
        inputBuffer += input;
        terminal.write(input);
      }
    });

    return () => {
      terminal.dispose();
      socket.close();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <PageWrapper>
      {/* <TerminalContainer ref={containerRef} /> */}
      <TerminalContainer ref={containerRef} tabIndex={0} />
    </PageWrapper>
  );
};

export default TerminalPage;
