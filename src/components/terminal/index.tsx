import { FitAddon } from '@xterm/addon-fit';
import { Terminal as XTerminal } from '@xterm/xterm';

export default class Terminal {
  private readonly xterm: XTerminal;
  private readonly fitAddon = new FitAddon();

  constructor() {
    this.xterm = new XTerminal({
      cursorBlink: true,
      scrollSensitivity: 2,
      theme: {
        background: 'var(--main-color)',
        foreground: '#fff',
      },
    });
    this.xterm.loadAddon(this.fitAddon);
  }

  open(container: HTMLDivElement) {
    this.xterm.open(container);
    this.xterm.focus();
    this.xterm.write('Welcome to the HUSK Terminal!\r\n$ ');
  }

  dispose() {
    this.xterm.dispose();
  }

  write(data: string) {
    this.xterm.write(data);
  }

  fit() {
    this.fitAddon.fit();
  }
  onData(callback: (data: string) => void) {
    this.xterm.onData(callback);
  }
}
