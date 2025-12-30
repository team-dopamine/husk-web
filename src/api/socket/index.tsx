class WebSocketClient {
  private socket: WebSocket;
  private messageHandler?: (data: string) => void;
  private openHandler?: () => void;
  private errorHandler?: (event: Event) => void;

  constructor(uri: string) {
    this.socket = new WebSocket(uri);

    this.socket.onopen = () => {
    
      this.openHandler?.();
    };

    this.socket.onmessage = (event) => {
      this.messageHandler?.(event.data);
    };

    this.socket.onerror = (error) => {
      console.error('[WebSocket] Error:', error);
    };

    this.socket.onclose = () => {
      console.log('[WebSocket] Disconnected');
    };
  }

  send(data: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data);
    } else {
      console.warn('[WebSocket] Cannot send. Socket not open.');
    }
  }

  onMessage(callback: (data: string) => void) {
    this.messageHandler = callback;
  }

  onOpen(callback: () => void) {
    this.openHandler = callback;
  }

  close() {
    this.socket.close();
  }

  isConnected(): boolean {
    return this.socket.readyState === WebSocket.OPEN;
  }

  onError(callback: (event: Event) => void) {
    this.errorHandler = callback;
  }
}

export default WebSocketClient;
