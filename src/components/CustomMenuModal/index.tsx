import React, {ReactNode, useState} from 'react';
import Modal from 'react-native-modal';

import useStyles from './style';
import {ImageProps} from 'react-native';

interface CustomModalProps {
  modalState: boolean;
  iconImage?: ImageProps;
  leftBtnText: string;
  rightBtnText: string;
  leftBtnBgColor: string;
  rightBtnBgColor: string;
  leftBtnTextStyle: {};
  rightBtnTextStyle: {};
  modalDesc: string;
  modalTitle: string;
  children?: ReactNode;

  leftBtnOnPress: () => void;
  rightBtnOnPress: () => void;
  onBackdropPress: () => void;
}

const CustomMenuModal: React.FC<CustomModalProps> = ({
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
  children, // Add this line
  leftBtnOnPress,
  rightBtnOnPress,
  onBackdropPress,
}) => {
  const {styles, sizes, colors} = useStyles();
  return (
    // <ParentView style={{flexDirection: 'column'}}>
    <Modal
      animationIn={'slideInDown'}
      animationOut={'slideOutDown'}
      isVisible={modalState}
      backdropOpacity={0}
      onBackdropPress={onBackdropPress}>
      {children}
    </Modal>
    // </ParentView>
  );
};

export default CustomMenuModal;
