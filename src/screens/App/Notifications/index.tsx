import {FlatList, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigators/authStack';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import NotificationCard from '../../../components/NotificationCard';
import images from '../../../assets/images';

type props = NativeStackScreenProps<AppStackParamsList>;

interface Message {
  id: string;
  userName: string;
  time: string;
  text: string;
  userImage: string;
}

const messages: Message[] = [
  {
    id: '1',
    userName: 'User 1',
    time: '1h',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    userImage: images.NOTIF1,
  },
  {
    id: '2',
    userName: 'User 2',
    time: '2h',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    userImage: images.NOTIF1,
  },
  {
    id: '3',
    userName: 'User 3',
    time: '8h',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    userImage: images.NOTIF1,
  },
  {
    id: '4',
    userName: 'User 3',
    time: '8h',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    userImage: images.NOTIF1,
  },
  {
    id: '5',
    userName: 'User 2',
    time: '2h',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    userImage: images.NOTIF1,
  },
];

const Notifications: React.FC<props> = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();
  return (
    <ParentView>
      <Header leftIconAction={() => navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({item}) => <NotificationCard message={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ParentView>
  );
};
export default Notifications;
