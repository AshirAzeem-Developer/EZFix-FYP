import io from 'socket.io-client';
import {Platform} from 'react-native';

export const backendBaseUrl =
  Platform.OS === 'android'
    ? 'http://192.168.0.101:1339'
    : 'http://192.168.0.101:1339';

export const WebSocketService = token => {
  const socket = io(backendBaseUrl, {
    auth: {
      token: token,
    },
  });
  return socket;
};
