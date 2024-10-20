import {Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {ParentView} from '../common/ParentView/ParentView';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RadioButtons = () => {
  const {styles, colors} = useStyles();
  return (
    <ParentView>
      <View>
        <Text>RadioButtons</Text>
        <Icon name="exclamation-triangle" color={'#fff'} size={22} />
      </View>
    </ParentView>
  );
};
export default RadioButtons;
