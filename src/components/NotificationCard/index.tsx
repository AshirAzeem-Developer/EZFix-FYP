import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import useStyles from './style';
import {NotificationsType} from '../../store/reducer/notifications';

const NotificationCard: React.FC<{message: NotificationsType}> = ({
  message,
}) => {
  const {styles, colors, sizes} = useStyles();
  return (
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={() =>
        console.log('Notification Clicked', message?.attributes?.additionalData)
      }>
      {/* <Image source={message.} style={styles.userImage} /> */}
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.userName}>{message?.attributes.title}</Text>
          <Text style={styles.time}>
            {new Date(message?.attributes?.date).toLocaleTimeString()}
          </Text>
        </View>
        <Text style={styles.text}>{message?.attributes?.content}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default NotificationCard;
