import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useStyles from './style';
import {ParentView} from '../../../components/common/ParentView/ParentView';

import {screen} from '../../../utils/constants';
import images from '../../../assets/images';
import stylesheet from './style';
import Header from '../../../components/Header';
import NotificationSettingOptions from '../../../components/NotificationSettings';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';

type props = NativeStackScreenProps<AppStackParamsList>;

const NotificationSetting: React.FC<props> = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();

  const settingOptions = [
    {
      name: 'Allow Notifications',
      active_inactive_Status: false,
    },

    {
      name: 'App Updates',
      active_inactive_Status: false,
    },
  ];
  return (
    <ParentView style={styles.container}>
      <Header
        isLeftShow={true}
        heading="Notification Settings"
        leftIconAction={() => navigation.goBack()}
      />
      {settingOptions.map((option, ind) => {
        return (
          <View key={ind}>
            <NotificationSettingOptions
              optionText={option.name}
              ActiveStatus={option.active_inactive_Status}
            />
          </View>
        );
      })}
    </ParentView>
  );
};

export default NotificationSetting;
