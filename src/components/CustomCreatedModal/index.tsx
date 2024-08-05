import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

import Button from '../../components/Button/Button';

import stylesheet from './style';
import useStyles from './style';

interface CustomModalProps {
  modalState: boolean;
  iconImage: any;
  leftBtnText: string;
  rightBtnText: string;
  leftBtnBgColor: string;
  rightBtnBgColor: string;
  leftBtnTextStyle?: {};
  rightBtnTextStyle: {};
  modalDesc: string;
  modalTitle: string;

  leftBtnOnPress: () => void;
  rightBtnOnPress: () => void;
  onBackdropPress?: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  modalState,
  iconImage,
  leftBtnText,
  leftBtnBgColor,
  rightBtnBgColor,
  rightBtnText,
  leftBtnTextStyle,
  rightBtnTextStyle,
  modalDesc,
  modalTitle,
  leftBtnOnPress,
  rightBtnOnPress,
  onBackdropPress,
}) => {
  const {styles, sizes, colors} = useStyles();

  return (
    // <ParentView style={{flexDirection: 'column'}}>
    <Modal isVisible={modalState} onBackdropPress={onBackdropPress}>
      <View style={styles.modalContent}>
        <Image source={iconImage} />
        <Text style={styles.modalTitle}>{modalTitle}</Text>
        <Text style={styles.modalDescription}>{modalDesc}</Text>
        <View style={styles.buttonCont}>
          <Button
            text={leftBtnText}
            btnTextStyles={leftBtnTextStyle}
            bgcolor={leftBtnBgColor}
            onPress={leftBtnOnPress}
            btnStyles={styles.button}
          />
          <Button
            text={rightBtnText}
            btnTextStyles={rightBtnTextStyle}
            onPress={rightBtnOnPress}
            bgcolor={rightBtnBgColor}
            btnStyles={styles.button}
          />
        </View>
      </View>
    </Modal>
    // </ParentView>
  );
};

export default CustomModal;
