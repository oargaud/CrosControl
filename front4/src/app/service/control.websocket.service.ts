import { Injectable } from '@angular/core';

import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';

/**
 * Fix annoying TS2345 error when injecting InjectableRxStompConfig into
 * RxStomp.stompClient.configure method who don't need the rxStomp
 * configuration.
 */
export class FixedStompConfig extends InjectableRxStompConfig {
  constructor() {
    super();
  }

  beforeConnect?: () => void | Promise<any>;
}

import { WebSocketService } from './websocket.service';
import { WebSocketOptions } from '../model/websocket/';

export const controlWebsocketService: FixedStompConfig = {
  webSocketFactory: () => {
//     return new WebSocket('ws://localhost:8080/stomp');
    return new WebSocket('ws://93.9.238.159:8080/stomp');
  }
};

@Injectable()
export class ControlWebsocketService extends WebSocketService {
  constructor(stompService: RxStompService) {
    super(
      stompService,
      controlWebsocketService,
      new WebSocketOptions('/topic/control')
    );
  }
}
