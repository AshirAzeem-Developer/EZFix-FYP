import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {WebSocketService} from '../../../services/WebSocketService';
import {format} from 'date-fns';
import {backendBaseUrl} from '../../../services/WebSocketService';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import apiEndPoints from '../../../constants/apiEndPoints';
import {DefaultEventsMap} from '@socket.io/component-emitter';
import {Socket} from 'socket.io-client';
import {Image} from 'react-native';
import images from '../../../assets/images';
import useStyles from './style';
import icons from '../../../assets/icons';

interface Message {
  id: number;
  attributes: {
    content: string;
    sender: {
      data: {
        id: number;
      };
    };
    recipient: {
      data: {
        id: number;
      };
    };
    timestamp: string;
  };
}

interface RouteParams {
  data: number;
  name: string;
  friendData: any;
}

const Chatopen = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();

  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const userId = useSelector((state: any) => state.user?.user?.user?.id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const route = useRoute();
  const {data, name, friendData} = route.params as RouteParams;
  let friendId = data;
  console.log('Friend Id:', data);
  console.log('UserId', userId);
  console.log('Name is ', name);
  console.log('Friend Data is  ', JSON.stringify(friendData, null, 2));

  useEffect(() => {
    let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

    const connectWebSocket = async () => {
      if (userToken) {
        socket = WebSocketService(userToken);
        console.log('socket');
        socket.on('connect', () => {
          console.log('Connected to WebSocket');
        });

        socket.on('message:create', (message: {data: Message}) => {
          console.log('Received message:', message);
          setMessages(prevMessages => [...prevMessages, message.data]);
        });
      }
    };
    fetchMessages();
    connectWebSocket();

    return () => {
      if (socket) {
        socket.off('message:create');
        socket.disconnect();
      }
    };
  }, [userToken, friendId]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `${backendBaseUrl}/api/messages?populate=*&filters[$or][0][sender][id][$eq]=${friendId}&filters[$or][0][recipient][id][$eq]=${userId}&filters[$or][1][sender][id][$eq]=${userId}&filters[$or][1][recipient][id][$eq]=${friendId}&sort[0]=createdAt:asc`,

        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = await response?.json();
      console.log('Hello Testing this functions');
      // console.log('Response Data', responseData);

      if (responseData?.data) {
        setMessages(responseData?.data);
      } else {
        setMessages([]); // Ensure it's an empty array if there's no data
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  console.log(
    'Response ================= >> ',
    JSON.stringify(messages, null, 2),
  );

  const sendMessage = async () => {
    if (messageInput.trim() === '') return;
    console.log('userId', userId);
    const newMessage = {
      data: {
        content: messageInput,
        sender: userId,
        recipient: friendId,
        timeStamp: formattedDate(),
      },
    };

    try {
      const token = userToken;
      await fetch(`${apiEndPoints.BASE_URL}/api/messages?populate=*`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      setMessageInput('');
    } catch (error) {
      console.error('Error sending messages:', error);
    }
  };

  const formattedDate = () => {
    const currentDate = new Date();
    return format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.chatHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ARROW_LEFT} tintColor={colors.BACKGROUND} />
          </TouchableOpacity>
          <Image
            source={{
              uri: `${apiEndPoints.BASE_URL}${friendData?.profileImage?.url}`,
            }}
            style={styles.dpImageStyles}
          />
          <Text style={styles.headerText}>{name}</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
        }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: sizes.HEIGHT * 0.2,
          }}
          showsVerticalScrollIndicator={false}>
          {messages && messages.length > 0 ? (
            messages.map(item => (
              <View
                key={item.id.toString()}
                style={[
                  styles.message,
                  item?.attributes?.recipient?.data?.id === userId
                    ? styles.receivedMessage
                    : styles.sentMessage,
                ]}>
                <Text
                  style={[
                    styles.messageText,

                    item?.attributes?.recipient?.data?.id === userId
                      ? styles.receivedMessage
                      : styles.sentMessage,
                  ]}>
                  {item.attributes.content}
                </Text>
                <Text
                  style={[
                    styles.timestamp,
                    item?.attributes?.recipient?.data?.id === userId
                      ? styles.receivedMessage
                      : styles.sentMessage,
                  ]}>
                  {new Date(item?.attributes?.timeStamp).toLocaleTimeString()}
                </Text>
              </View>
            ))
          ) : (
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#333',
                marginTop: 16,
              }}>
              No messages yet
            </Text>
          )}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={messageInput}
            placeholderTextColor={'black'}
            onChangeText={text => {
              setMessageInput(text);
            }}
            placeholder="Type a message..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Image source={icons.SEND} tintColor={'#008000'} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chatopen;
