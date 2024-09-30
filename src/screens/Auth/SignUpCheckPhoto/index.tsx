import React, {FC, useState} from 'react';
import {View, Text, Image} from 'react-native';
// third party

import {NativeStackScreenProps} from '@react-navigation/native-stack';

// styles
import useStyles from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';
import Button from '../../../components/Button/Button';

import images from '../../../assets/images';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
// enums
import {Role} from '../../../constants/enums/applicationRoleEnums';
import BottomButton from '../../../components/common/BottomButton/BottomButton';
import icons from '../../../assets/icons';

type SignUpCheckPhotoScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpCheckPhoto'
>;

const SignUpCheckPhoto: FC<SignUpCheckPhotoScreenProps> = ({
  route,
  navigation,
}) => {
  const {styles, sizes, colors} = useStyles();

  // navigation
  const {navigate} = navigation;
  const {roleID} = route.params;
  return (
    <ParentView style={styles.container}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.screenTitleTxtCont}>
        <Text style={styles.screenTitleTxt}>Check Photo</Text>
      </View>
      {/* text component  end  */}
      {/* takenImagePlaceHolder */}
      <View style={styles.takenImgCon}></View>
      {/* takenImagePlaceHolder */}

      {/* instructionTxt */}
      <View style={styles.instructionTxt}>
        <Text style={styles.makeSureTxt}>Make Sure</Text>
        <View style={styles.singleInsCont}>
          <Image source={icons.CHECK_BLACK} />
          <Text style={styles.singInstTxt}>
            Is the whole document in the frame?
          </Text>
        </View>

        {/* inst 2 */}
        <View style={styles.singleInsCont}>
          <Image source={icons.CHECK_BLACK} />
          <Text style={styles.singInstTxt}>
            Is the photo clear and not blurry?
          </Text>
        </View>
        {/* inst 2 end */}
      </View>
      {/* instructionTxt */}
      <BottomButton>
        <Text style={styles.reTakeTxt}>Retake Photo</Text>
        <Button
          bgcolor={colors.PRIMARY}
          text="Use Photo"
          textColor={colors.BLACK}
          onPress={() => {
            navigation.navigate('SignUpPrivacyPolicy', {roleID: roleID});
          }}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default SignUpCheckPhoto;
