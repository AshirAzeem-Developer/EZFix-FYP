import React, {useState} from 'react';
import {
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

//local imports
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';
import Button from '../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

import TextInputCustom from '../../../components/TextInputCustom';

const ChatOpen = ({route}: any) => {
  // ========== >> NAVIGATION AND ROUTE ,STYLES << ==========

  const {styles, colors, sizes} = useStyles();
  const navigation = useNavigation();
  const {title} = route.params;
  // ========== >> USE STATE HOOKS << ==========
  const [chat, setChat] = useState('');

  const conversation = [
    {
      id: 1,
      sender: 'Minnie',
      text: 'Hello Thomas',
      time: 'Seen',
      isReply: false,
      img: images.Dp,
    },
    {
      id: 2,
      sender: 'Thomas',
      text: 'Hello Minnie! It will probably take me 5 hours. Is it ok for you?',
      time: '',
      isReply: true,
      img: images.Dp,
    },
    {
      id: 3,
      sender: 'Minnie',
      text: 'Yes, it is all right. I wanted to know because after 5 o’clock I can’t be home',
      time: '',
      isReply: false,
      img: images.Dp,
    },
    {
      id: 4,
      sender: 'Thomas',
      text: 'In this case, you can reschedule the meeting a few hours earlier. I’m free that morning.',
      time: '',
      isReply: true,
      img: images.Dp,
    },
    {
      id: 5,
      sender: 'Minnie',
      text: 'Ok! Great! Thank you very much',
      time: 'Seen',
      isReply: false,
      img: images.Dp,
    },
    {
      id: 6,
      sender: 'Thomas',
      text: 'See you on Friday morning!',
      time: '',
      isReply: true,
      img: images.Dp,
    },
  ];

  const renderMessage = ({item}: any) => {
    return (
      <View
        style={[
          styles.messageRow,
          item.isReply ? styles.replyRow : styles.senderRow,
        ]}>
        {!item.isReply && <Image source={item.img} style={styles.dpImage} />}
        <View
          style={[
            styles.messageContainer,
            item.isReply ? styles.replyContainer : styles.senderContainer,
          ]}>
          <View style={styles.messageCard}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
          </View>
        </View>
        {item.isReply && <Image source={item.img} style={styles.dpImage} />}
      </View>
    );
  };

  return (
    <>
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        {/* <Header
          isLeftShow={true}
          heading="Hello"
          leftIconAction={() => navigation.goBack()}
        /> */}
        <View style={styles.chatHeaderContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ARROW_LEFT} tintColor={colors.BACKGROUND} />
          </TouchableOpacity>
          <Image source={images.Dp} style={styles.dpImageStyles} />
          <Text style={styles.headerText}>{title}</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: sizes.WIDTH * 0.01,
              paddingTop: sizes.WIDTH * 0.05,
            }}
            data={conversation}
            keyExtractor={item => item.id.toString()}
            renderItem={renderMessage}
          />
          <View style={styles.sendMessageContainer}>
            <TextInputCustom
              value={chat}
              placeHolderTxt="Enter Message "
              handleOnChange={e => setChat(e)}
              rightIcon={icons.SEND}
              isShowRightIcon={true}
              textInputStyle={{
                borderBottomWidth: 0,
                width: '90%',
                fontSize: sizes.FONT_SIZE_TITLE,
              }}
              rightIconAction={() => console.log('Chat Sent')}
              showBottomBorder={false}
            />
          </View>
        </KeyboardAvoidingView>
      </ParentView>
    </>
  );
};

export default ChatOpen;
