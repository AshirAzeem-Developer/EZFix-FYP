import {View, Text} from 'react-native';
import React from 'react';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';

type Props = NativeStackScreenProps<AppStackParamsList>;

const EditProfile: React.FC<Props> = ({navigation}) => {
  return (
    <ParentView>
      <Header leftIconAction={() => navigation.goBack()} />
    </ParentView>
  );
};

export default EditProfile;
