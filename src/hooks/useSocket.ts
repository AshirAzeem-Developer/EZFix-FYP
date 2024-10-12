import {useEffect, useRef, useState} from 'react';
import io from 'socket.io-client';
import apiEndPoints from '../constants/apiEndPoints';

const SOCKET_SERVER_URL = apiEndPoints.BASE_URL; // Change to your backend URL

export const useSocket = (userId: string, roomId: string) => {
  const socketRef = useRef<any>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io(SOCKET_SERVER_URL);

    // Join a private room for the chat
    socketRef.current.emit('joinRoom', {roomId});
    console.log('Room joined: ', roomId);

    // Receive new messages
    socketRef.current.on('newMessage', (message: any) => {
      setMessages(prevMessages => [...prevMessages, message]);
      console.log('New message received: ', message);
    });

    // Cleanup on unmount
    return () => {
      socketRef.current.disconnect();
      console.log('User disconnected');
    };
  }, [roomId]);

  const sendMessage = (messageContent: string, receiverId: string) => {
    socketRef.current.emit('sendMessage', {
      content: messageContent,
      sender: userId,
      receiver: receiverId,
    });
  };

  return {messages, sendMessage};
};
