import {View, Text} from 'react-native';
import React from 'react';
import Style from './style';
import style from './style';
import {Image} from 'react-native-elements';
import IconInput from '../../../components/Input/IconInput';
const SelectService = () => {
  return (
    <View style={style.container}>
      <Text>index</Text>
      <IconInput inputLabel={'Enter Email'} />
    </View>
  );
};

export default SelectService;
