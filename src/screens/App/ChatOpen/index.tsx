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
} from 'react-native';

//local imports
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import SellerCard from '../../../components/TopRatedSellerCard';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';
import Button from '../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import SearchComponent from '../../../components/SearchComponent';

// dimenstion
const {width, height} = Dimensions.get('window');

const ChatOpen = () => {
  const {styles, colors, sizes} = useStyles();
  const navigation = useNavigation();
  
  const conversation = [
    { id: 1, sender: 'Minnie', text: 'Hello Thomas', time: 'Seen', isReply: false, img: images.Dp },
    { id: 2, sender: 'Thomas', text: 'Hello Minnie! It will probably take me 5 hours. Is it ok for you?', time: '', isReply: true, img: images.Dp },
    { id: 3, sender: 'Minnie', text: 'Yes, it is all right. I wanted to know because after 5 o’clock I can’t be home', time: '', isReply: false, img: images.Dp },
    { id: 4, sender: 'Thomas', text: 'In this case, you can reschedule the meeting a few hours earlier. I’m free that morning.', time: '', isReply: true, img: images.Dp },
    { id: 5, sender: 'Minnie', text: 'Ok! Great! Thank you very much', time: 'Seen', isReply: false, img: images.Dp },
    { id: 6, sender: 'Thomas', text: 'See you on Friday morning!', time: '', isReply: true, img: images.Dp }
  ];

  const renderMessage = ({ item }) => {
    return (
      <View style={[styles.messageRow, item.isReply ? styles.replyRow : styles.senderRow]}>
        {!item.isReply && (
          <Image source={item.img} style={styles.dpImage} />
        )}
        <View style={[styles.messageContainer, item.isReply ? styles.replyContainer : styles.senderContainer]}>
          <View style={styles.messageCard}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
          </View>
        </View>
        {item.isReply && (
          <Image source={item.img} style={styles.dpImage} />
        )}
      </View>
    );
  };

  return (
    <>
      <ParentView style={styles.container} enterAnimation={FadeInDown.duration(500)}>
        <FlatList
          data={conversation}
          keyExtractor={item => item.id.toString()}
          renderItem={renderMessage}
        />
      </ParentView>
    </>
  );
};

export default ChatOpen;
