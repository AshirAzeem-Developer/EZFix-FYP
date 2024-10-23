import io from 'socket.io-client';
import {Platform} from 'react-native';

//  ? 'http://192.168.100.45:1339'
//     : 'http://192.168.100.45:1339';

export const backendBaseUrl =
  Platform.OS === 'android'
    ? 'https://dev-api.ezfix.bond'
    : 'https://dev-api.ezfix.bond';

export const WebSocketService = token => {
  const socket = io(backendBaseUrl, {
    auth: {
      token: token,
    },
  });
  return socket;
};
