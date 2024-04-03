import React from 'react';
// import icons from '../../assets/icons';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {Dimensions, Text, TextInput, View} from 'react-native';

const {width, height} = Dimensions.get('window');

const IconInput = ({
  iconName,
  iconColor,
  inputPlaceholder,
  rightIconName,
  righIiconColor,
  myStyle,
  secureTextEntry,
  iputContainerStyle,
  inputLabel,
  inputMode,
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'flex-start',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: width * 0.04,
            marginVertical: height * 0.002,
            color: 'black',
          }}>
          {inputLabel}
        </Text>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.9,

              borderWidth: width * 0.004,
              padding: width * 0.008,
              padding: width * 0.001,
              borderRadius: width * 0.4,
              borderColor: '#C19E9E',
            },
            iputContainerStyle,
          ]}>
          <Icon name={iconName} size={24} color={iconColor} />
          <TextInput
            inputMode={inputMode}
            secureTextEntry={secureTextEntry}
            style={[{width: width * 0.7, fontSize: width * 0.05}, myStyle]}
            placeholder={inputPlaceholder}
          />
          <Icon name={rightIconName} size={24} color={righIiconColor} />
        </View>
      </View>
    </>
  );
};

export default IconInput;
