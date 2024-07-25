import React, {useState} from 'react';
import {TextStyle, ViewStyle, View, Text, Image} from 'react-native';

// third party
import Modal from 'react-native-modal';

import useStyles from './style';

// local others
import {isAndroid, screen} from '../../utils/constants';

// local component
import {ParentView} from '../../components/common/ParentView/ParentView';
import Header from '../../components/AppHeader';

import Button from '../../components/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {FadeInDown} from 'react-native-reanimated';

type ModalProps = {
  image: any;
  title: string;
  firstDes: string;
  secondDes?: string;
  titleStyle?: TextStyle;
  firstDesStyle?: TextStyle;
  secondDesStyle?: TextStyle;
  buttonTitle: string;
  handleClose: () => void;
  ExtraView?: any;
  errorBtn?: boolean;
  extraView?: any;
};

export const useGenericModal = ({modalProp}: {modalProp: ModalProps}) => {
  // state
  const [isVisible, setIsVisible] = useState(false);
  // style
  const {styles, sizes, colors} = useStyles();
  const {bottom} = useSafeAreaInsets();

  // function to hide and show modal
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  // JSX FUNCTION
  const GenericModal = () => {
    const {
      image,
      title,
      firstDes,
      secondDes,
      titleStyle,
      firstDesStyle,
      secondDesStyle,
      buttonTitle,
      handleClose,
      ExtraView,
      errorBtn = false,
      extraView = null,
    } = modalProp;
    return (
      <Modal isVisible={isVisible} style={{margin: 0}}>
        <ParentView style={styles.container}>
          <Header leftIconAction={() => setIsVisible(false)} />

          {/* text and image cont */}
          <Animated.View
            style={styles.textImgCont}
            entering={FadeInDown.duration(500).delay(500)}>
            <Image source={image} style={styles.optSendImg} />
            <Text style={[styles.titleTxt, titleStyle]}>{title}</Text>
            <Text style={[styles.firstDesTxt, firstDesStyle]}>{firstDes}</Text>
            {secondDes && (
              <Text style={[styles.secondDesTxt, secondDesStyle]}>
                {secondDes}
              </Text>
            )}
            <View style={{marginTop: screen.height * 0.025}}>
              {extraView && extraView()}
            </View>
          </Animated.View>
          {/* text and image cont end */}
          <View
            style={[
              styles.sendCodeButtonCont,
              isAndroid
                ? {
                    height: screen.height * 0.125,
                  }
                : {
                    height: screen.height * 0.125 + bottom,
                    marginBottom: -bottom,
                  },
            ]}>
            <Button
              bgcolor={!errorBtn ? colors.PRIMARY : '#FFE2E2'}
              text={buttonTitle}
              textColor={!errorBtn ? colors.BLACK : colors.RED}
              onPress={handleClose}
              btnStyles={styles.snedCodeButton}
              withAnimation
            />
          </View>
        </ParentView>
      </Modal>
    );
  };

  return {GenericModal, showModal, hideModal};
};
