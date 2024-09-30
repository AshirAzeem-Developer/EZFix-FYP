import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import useStyles from './style';

type Message = {
  id: string;
  userName: string;
  time: string;
  text: string;
  userImage: {};
};

const NotificationCard: React.FC<{message: Message}> = ({message}) => {
  const {styles, colors, sizes} = useStyles();
  return (
    <View style={styles.messageContainer}>
      <Image source={message.userImage} style={styles.userImage} />
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.userName}>{message.userName}</Text>
          <Text style={styles.time}>{message.time}</Text>
        </View>
        <Text style={styles.text}>{message.text}</Text>
      </View>
    </View>
  );
};
export default NotificationCard;
