// import React, {useEffect, useState} from 'react';
// import {
//   Text,
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// //local imports
// import icons from '../../../assets/icons';
// import images from '../../../assets/images';
// import {ParentView} from '../../../components/common/ParentView/ParentView';
// import useStyles from './style';
// import {FadeInDown} from 'react-native-reanimated';
// import Button from '../../../components/Button/Button';
// import {useNavigation} from '@react-navigation/native';

// import TextInputCustom from '../../../components/TextInputCustom';
// import {useSocket} from '../../../hooks/useSocket';
// import axios from 'axios';
// import {useSelector} from 'react-redux';

// const ChatOpen = ({route}: any) => {
//   const [messageContent, setMessageContent] = useState('');
//   const handleSendMessage = () => {
//     if (messageContent.trim()) {
//       setMessageContent('');
//     }
//   };

//   // ========== >> NAVIGATION AND ROUTE ,STYLES << ==========

//   const {styles, colors, sizes} = useStyles();
//   const navigation = useNavigation();
//   const {title} = route.params;

//   // ========== >> USE STATE HOOKS << ==========
//   // const [chat, setChat] = useState('');

//   // const conversation = [
//   //   {
//   //     id: 1,
//   //     sender: 'Minnie',
//   //     text: 'Hello Thomas',
//   //     time: 'Seen',
//   //     isReply: false,
//   //     img: images.Dp,
//   //   },
//   //   {
//   //     id: 2,
//   //     sender: 'Thomas',
//   //     text: 'Hello Minnie! It will probably take me 5 hours. Is it ok for you?',
//   //     time: '',
//   //     isReply: true,
//   //     img: images.Dp,
//   //   },
//   //   {
//   //     id: 3,
//   //     sender: 'Minnie',
//   //     text: 'Yes, it is all right. I wanted to know because after 5 o’clock I can’t be home',
//   //     time: '',
//   //     isReply: false,
//   //     img: images.Dp,
//   //   },
//   //   {
//   //     id: 4,
//   //     sender: 'Thomas',
//   //     text: 'In this case, you can reschedule the meeting a few hours earlier. I’m free that morning.',
//   //     time: '',
//   //     isReply: true,
//   //     img: images.Dp,
//   //   },
//   //   {
//   //     id: 5,
//   //     sender: 'Minnie',
//   //     text: 'Ok! Great! Thank you very much',
//   //     time: 'Seen',
//   //     isReply: false,
//   //     img: images.Dp,
//   //   },
//   //   {
//   //     id: 6,
//   //     sender: 'Thomas',
//   //     text: 'See you on Friday morning!',
//   //     time: '',
//   //     isReply: true,
//   //     img: images.Dp,
//   //   },
//   // ];

//   // const renderMessage = ({item}: any) => {
//   //   return (
//   //     <View
//   //       style={[
//   //         styles.messageRow,
//   //         item.isReply ? styles.replyRow : styles.senderRow,
//   //       ]}>
//   //       {!item.isReply && <Image source={item.img} style={styles.dpImage} />}
//   //       <View
//   //         style={[
//   //           styles.messageContainer,
//   //           item.isReply ? styles.replyContainer : styles.senderContainer,
//   //         ]}>
//   //         <View style={styles.messageCard}>
//   //           <Text style={styles.messageText}>{item.text}</Text>
//   //           <Text style={styles.messageTime}>{item.time}</Text>
//   //         </View>
//   //       </View>
//   //       {item.isReply && <Image source={item.img} style={styles.dpImage} />}
//   //     </View>
//   //   );
//   // };

//   // const senderId = useSelector((state: any) => state.user.user.user?.id);

//   // console.log('Sender Id  === >: ', senderId);

//   return (
//     <>
//       <ParentView
//         style={styles.container}
//         enterAnimation={FadeInDown.duration(500)}>
//         {/* <Header
//           isLeftShow={true}
//           heading="Hello"
//           leftIconAction={() => navigation.goBack()}
//         /> */}
//         <View style={styles.chatHeaderContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image source={images.ARROW_LEFT} tintColor={colors.BACKGROUND} />
//           </TouchableOpacity>
//           <Image source={images.Dp} style={styles.dpImageStyles} />
//           <Text style={styles.headerText}>{title}</Text>
//         </View>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={{flex: 1}}>
//           <FlatList
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={{
//               padding: sizes.WIDTH * 0.01,
//               paddingTop: sizes.WIDTH * 0.05,
//             }}
//             data={messageContent}
//             keyExtractor={item => item.id.toString()}
//             renderItem={({item}) => (
//               <View>
//                 <Text>
//                   {item.sender === senderId ? 'Me' : 'Other'}: {item.content}
//                 </Text>
//               </View>
//             )}
//           />
//           <View style={styles.sendMessageContainer}>
//             <TextInputCustom
//               value={messageContent}
//               placeHolderTxt="Type a message..."
//               handleOnChange={setMessageContent}
//               rightIcon={icons.SEND}
//               isShowRightIcon={true}
//               textInputStyle={{
//                 borderBottomWidth: 0,
//                 width: '90%',
//                 fontSize: sizes.FONT_SIZE_TITLE,
//               }}
//               rightIconAction={handleSendMessage}
//               showBottomBorder={false}
//             />
//           </View>
//         </KeyboardAvoidingView>
//       </ParentView>
//     </>
//   );
// };

// export default ChatOpen;
// const userToken = useSelector((state: any) => state.user?.user?.jwt);
// const userId = useSelector((state: any) => state.user?.user?.user?.id);
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
} from 'react-native';
import {WebSocketService} from '../../../services/WebSocketService';
import {format} from 'date-fns';
import {backendBaseUrl} from '../../../services/WebSocketService';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import apiEndPoints from '../../../constants/apiEndPoints';
import {DefaultEventsMap} from '@socket.io/component-emitter';
import {Socket} from 'socket.io-client';

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
}

const Chatopen: React.FC = ({navigation}) => {
  const userToken = useSelector((state: any) => state.user?.user?.jwt);
  const userId = useSelector((state: any) => state.user?.user?.user?.id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const route = useRoute();
  const {data} = route.params as RouteParams;
  let friendId = data;
  console.log('Friend Id:', data);
  console.log('UserId', userId);

  useEffect(() => {
    let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

    const connectWebSocket = async () => {
      const token = userToken;
      if (token) {
        socket = WebSocketService(token);

        socket.on('connect', () => {
          console.log('Connected to WebSocket');
        });

        socket.on('message:create', (message: {data: Message}) => {
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
    const token = userToken;
    try {
      const response = await fetch(
        `${backendBaseUrl}/api/messages?populate=*&filters[$or][0][sender][id][$eq]=${friendId}&filters[$or][0][recipient][id][$eq]=${userId}&filters[$or][1][sender][id][$eq]=${userId}&filters[$or][1][recipient][id][$eq]=${friendId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const responseData = await response.json();
      // console.log('Response Data', responseData);

      if (responseData.data) {
        setMessages(responseData.data);
      } else {
        setMessages([]); // Ensure it's an empty array if there's no data
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    if (messageInput.trim() === '') return;

    const newMessage = {
      data: {
        content: messageInput,
        sender: userId,
        recipient: friendId,
        timestamp: formattedDate(),
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

  console.log('Messages:', messages);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.messageContainer}>
        {messages && messages.length > 0 ? (
          messages.map(item => (
            <View
              key={item.id.toString()}
              style={[
                styles.message,
                item?.attributes?.sender?.data?.id === userId
                  ? styles.sentMessage
                  : styles.receivedMessage,
              ]}>
              <Text style={styles.messageText}>{item.attributes.content}</Text>
              <Text style={styles.timestamp}>{item.attributes.timeStamp}</Text>
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
      <KeyboardAvoidingView behavior="padding">
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
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  message: {
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    maxWidth: '80%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084ff',
    color: '#fff',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
  },
  messageText: {
    color: '#333',
    fontSize: 16,
    lineHeight: 22,
  },
  timestamp: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: 'black',
  },
  sendButton: {
    backgroundColor: '#0084ff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Chatopen;
