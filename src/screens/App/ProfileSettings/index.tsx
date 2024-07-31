import {Text} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileStackParamsList} from '../../../navigators/navigator.seeker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type Props = NativeStackScreenProps<ProfileStackParamsList>;

const ProfileSettings = () => {
  const {styles, colors} = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello From Profile Settings</Text>
    </SafeAreaView>
  );
};
export default ProfileSettings;
