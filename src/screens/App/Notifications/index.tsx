import {FlatList, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigators/authStack';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/Header';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import NotificationCard from '../../../components/NotificationCard';
import {
  addNotification,
  clearNotifications,
  useNotifications,
} from '../../../store/reducer/notifications';
import {useDispatch, useSelector} from 'react-redux';
import {getNotificationsByUserId} from '../../../utils/ApiCall';

type props = NativeStackScreenProps<AppStackParamsList>;

interface Message {
  id: string;
  userName: string;
  time: string;
  text: string;
  userImage: string;
}

const Notifications: React.FC<props> = ({navigation}) => {
  const userId = useSelector((state: any) => state.user.user.user.id);
  // console.log('User id is: ', userId);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  useEffect(() => {
    dispatch(clearNotifications());
    getNotificationsByUserId(userToken, userId)
      .then(res => {
        const notifications = res.data?.data;
        dispatch(addNotification(notifications));
        // console.log('Notifications:', JSON.stringify(res.data.data, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const {styles, colors, sizes} = useStyles();
  const notifications = useNotifications();
  const dispatch = useDispatch();

  console.log(
    'Notifications============= >>',
    JSON.stringify(notifications, null, 2),
  );

  return (
    <ParentView>
      <Header
        leftIconAction={() => navigation.goBack()}
        isLeftShow={true}
        heading="Notifications"
      />
      <View style={styles.container}>
        <FlatList
          data={notifications}
          renderItem={({item}) => <NotificationCard message={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ParentView>
  );
};
export default Notifications;
