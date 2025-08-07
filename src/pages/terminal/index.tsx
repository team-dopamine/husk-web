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
  const terminalRef = useRef<Terminal | null>(null);
  const socketRef = useRef<WebSocketClient | null>(null);
  const location = useLocation();
  const connectionId = (location.state as LocationState)?.connectionId;

  useEffect(() => {
    const terminal = new Terminal();
    terminalRef.current = terminal;
    const socket = new WebSocketClient('wss://husk.kr/ws/ssh-terminal');
    socketRef.current = socket;

    let inputBuffer = '';

    const resizeObserver = new ResizeObserver(() => {
      terminal.fit();
    });

    if (containerRef.current) {
      terminal.open(containerRef.current);
      terminal.focus();
      terminal.fit();
      resizeObserver.observe(containerRef.current);
    }

    socket.onOpen(() => {
      socket.send(`connect:${connectionId}`);
    });

    socket.onMessage((data: string) => {
      terminal.write(data);
    });

    socket.onError((e) => {
      console.error('[WebSocket] 연결 실패:', e);
      alert('서버와 연결할 수 없습니다.');
    });

    terminal.onData((input: string) => {
      if (input === '\x03') {
        socket.send('\x03');
        return;
      }
      if (input === '\r') {
        socket.send(inputBuffer + '\r');
        inputBuffer = '';
      } else if (input === '\u007f') {
        if (inputBuffer.length > 0) {
          /* 연속 백스페이스 시 안 먹히는 오류 해결 */
          const codeArray = Array.from(inputBuffer);
          const deletedChar = codeArray.pop();
          inputBuffer = codeArray.join('');
          const charWidth = deletedChar ? Array.from(deletedChar).length : 1;
          terminal.write('\b \b'.repeat(charWidth));
        }
      } else if (input.startsWith('\u001b')) {
        socket.send(input);
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
      <TerminalContainer ref={containerRef} tabIndex={0} />
    </PageWrapper>
  );
};

export default TerminalPage;
