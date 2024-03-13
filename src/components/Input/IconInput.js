import React from 'react';
// import icons from '../../assets/icons';

// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {Input} from 'react-native-elements';

const IconInput = ({
  iconName,
  iconColor,
  inputPlaceholder,
  rightIconName,
  righIiconColor,
  myStyle,
  secureTextEntry,
}) => {
  return (
    <Input
      secureTextEntry={secureTextEntry}
      underlineColorAndroid="transparent"
      style={[{borderBottomColor: 'red'}, myStyle]}
      placeholder={inputPlaceholder}
      leftIcon={<Icon name={iconName} size={24} color={iconColor} />}
      rightIcon={<Icon name={rightIconName} size={24} color={righIiconColor} />}
    />
  );
};

export default IconInput;
