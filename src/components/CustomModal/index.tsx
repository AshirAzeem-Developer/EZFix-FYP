import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import ReactNativeModal from 'react-native-modal';

type CustomModalProps = {
  showModal?: boolean;

  bacButtonPress?: () => void;
  modalView?: React.ReactNode;
};

const CustomModal: React.FC<CustomModalProps> = ({showModal, modalView}) => {
  const {styles, colors, sizes} = useStyles();
  return (
    <>
      <ReactNativeModal
        animationIn={'slideInUp'}
        style={{
          backgroundColor: 'white',
          width: sizes.WIDTH * 1,
          height: sizes.HEIGHT * 1,
          padding: 0,
          margin: 0,
        }}
        isVisible={showModal}>
        {modalView ? modalView : null}
      </ReactNativeModal>
    </>
  );
};
export default CustomModal;
