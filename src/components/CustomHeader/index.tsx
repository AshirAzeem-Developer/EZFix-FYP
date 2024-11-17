import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import icons from '../../assets/icons'; 
import useStyles from './style';
interface CustomHeaderProps {
  title: string;
  onBackPress?: () => void; 
  rightIcon?: any;
  onRightPress?: () => void; 
}
const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  onBackPress,
  rightIcon,
  onRightPress,
}) => {
const {styles, colors, sizes} = useStyles();
  return (    
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity style={styles.iconContainer} onPress={onBackPress}>
          <Image source={icons.BackIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && (
        <TouchableOpacity style={styles.iconContainer} onPress={onRightPress}>
          <Image source={rightIcon}  />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomHeader;
