import React, {FC, useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// third party

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {FadeInDown} from 'react-native-reanimated';
// styles
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import Button from '../../../components/Button/Button';

import images from '../../../assets/images';

// local navigation
import {AuthStackParamList} from '../../../navigators/AuthStack';
// enums

import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';
import BottomButton from '../../../components/common/BottomButton/BottomButton';

type SignUpRefereeLicOrVerifyMemberScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  ''
>;

var timer: any = null;
const SignUpRefereeLicOrVerifyMember: FC<
  SignUpRefereeLicOrVerifyMemberScreenProps
> = ({route, navigation}) => {
  // style
  const {styles, sizes, colors} = useStyles();

  // navigation
  const {navigate} = navigation;
  const {roleID} = route.params;

  // state

  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const [isShowPreviewDoc, setIsShowPreviewDoc] = useState<boolean>(false);

  // camera lib
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  // modal prop
  const modalProps = {
    image: images.DELETE_BADGE,
    title: 'Permission required',
    firstDes:
      'Need camera permission to proceed further. Go to Settings and grant access.',
    firstDesStyle: {
      textAlign: 'center' as 'center',
    },
    buttonTitle: 'Close Modal',
    handleClose: () => {
      hideModal();
    },
  };

  // Use the custom hook
  const {GenericModal, hideModal, showModal} = useGenericModal({
    modalProp: modalProps,
  });

  const handleTakePhoto = async () => {
    // const photo = await cameraRef.current?.takePhoto();
    // console.log('photo ==>', photo);

    // navigating
    setIsCameraOpen(false);
    navigate('SignUpCheckPhoto', {roleID: roleID});
  };

  if (device == null) return null;

  const handleCameraJSX = () => {
    if (isShowPreviewDoc) {
      return (
        <View style={styles.cameraMainCont}>
          <View style={styles.topCameraTxtCont}>
            <Text style={styles.topCameraTxt}>Front Photo of License</Text>
          </View>
          <View style={styles.camera}>
            <Image source={images.scanDocumentExample} />
          </View>
          <Text style={styles.noPhotoCopTxt}>No photocopies</Text>
        </View>
      );
    }

    return (
      <View style={styles.cameraMainCont}>
        <View style={styles.topCameraTxtCont}>
          <Text style={styles.topCameraTxt}>Front Photo of License</Text>
        </View>
        <Camera
          device={device}
          isActive={true}
          style={styles.camera}
          photo={true}
          ref={cameraRef}
        />
        <Text style={styles.noPhotoCopTxt}>No photocopies</Text>

        <TouchableOpacity
          style={styles.cameraButtonMainCont}
          onPress={handleTakePhoto}>
          <View style={styles.cameraButtonInnerCont} />
        </TouchableOpacity>
      </View>
    );
  };

  const openCameraFlow = () => {
    setIsCameraOpen(true);
    setIsShowPreviewDoc(true);
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setIsShowPreviewDoc(false);
    }, 2000);
  };

  const handleCameraPermision = async () => {
    if (!hasPermission) {
      // request permission
      requestPermission()
        .then(isPermission => {
          console.log('isPermission ===?', isPermission);
          if (isPermission) {
            openCameraFlow();
          } else {
            // if denyed show pop
            showModal();
          }
        })
        .catch(err => {
          console.log('err ===?', err);
        });
    } else {
      // open camera and its flow
      openCameraFlow();
    }
  };

  return (
    <>
      <GenericModal />
      {isCameraOpen ? (
        handleCameraJSX()
      ) : (
        <ParentView
          style={styles.container}
          enterAnimation={FadeInDown.duration(500)}>
          <Header leftIconAction={() => navigation.goBack()} />

          {/* text component  */}
          <View style={[styles.textCont, roleID === 1 && styles.marginStle]}>
            <Text style={styles.verifyMemTxt}>
              {roleID === 1
                ? 'Referee License'
                : roleID === 2 || roleID === 3
                ? 'Verify Membership'
                : ''}
            </Text>

            {(roleID === 2 || roleID === 3) && (
              <Text style={styles.detailTxt}>
                We need proof that you belong to your sports governing body.
                Please upload a document or photo showing your membership
                status.
              </Text>
            )}
          </View>
          {/* text component  end  */}

          <SvgImage Svg={images.handHoldingMobile} />

          <BottomButton>
            <Button
              bgcolor={theme.colors.green}
              text="Take a Picture"
              textColor={theme.colors.dark}
              onPress={() => {
                // // navigate('SignUpCheckPhoto', {roleID: roleID});
                // setIsCameraOpen(true);
                // setIsShowPreviewDoc(true);
                // if (hasCameraPermission) {
                //   setTimeout(() => {
                //     setIsShowPreviewDoc(false);
                //   }, 3000);
                // }
                handleCameraPermision();
              }}
              btnStyles={styles.saveButton}
            />
          </BottomButton>
        </ParentView>
      )}
    </>
  );
};

export default SignUpRefereeLicOrVerifyMember;
