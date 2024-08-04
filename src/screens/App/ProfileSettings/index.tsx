import {Text} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProfileStackParamsList} from '../../../navigators/navigator.seeker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<ProfileStackParamsList>;

const ProfileSettings: React.FC<Props> = ({navigation}) => {
  const {styles, colors} = useStyles();

  return (
    <ParentView style={styles.container}>
      <Header leftIconAction={() => navigation.goBack()} />
    </ParentView>
  );
};
export default ProfileSettings;
