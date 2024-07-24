import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
// third party
import {useStyles} from 'react-native-unistyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// styles
import stylesheet from './style';

// local component
import {ParentView} from '../../components/common/ParentView';
import Header from '../../components/Header';
import Button from '../../components/common/Button';

import images from '../../utils/images';

// local navigation
import {AuthStackParamList} from '../../navigation/authStack';
// enums
import SvgImage from '../../components/common/SvgImage';
import {Role} from '../../constant/enums/applicationRoleEnums';
import BottomButton from '../../components/common/BottomButton';
import {useLocaleStoreProvider} from '../../store/locale';

type SignUpCheckPhotoScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpCheckPhoto'
>;

const SignUpCheckPhoto: FC<SignUpCheckPhotoScreenProps> = ({
  route,
  navigation,
}) => {
  const {strings} = useLocaleStoreProvider();
  const {styles, theme} = useStyles(stylesheet);

  // navigation
  const {navigate} = navigation;
  const {roleID} = route.params;
  return (
    <ParentView style={styles.container}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.screenTitleTxtCont}>
        <Text style={styles.screenTitleTxt}>{strings.lblCHECK_PHOTO}</Text>
      </View>
      {/* text component  end  */}
      {/* takenImagePlaceHolder */}
      <View style={styles.takenImgCon}></View>
      {/* takenImagePlaceHolder */}

      {/* instructionTxt */}
      <View style={styles.instructionTxt}>
        <Text style={styles.makeSureTxt}>{strings.lblMAKE_SURE}</Text>
        <View style={styles.singleInsCont}>
          <SvgImage Svg={images.checkBlack} />
          <Text style={styles.singInstTxt}>
            {strings.lblIS_WHOLE_DOCUMENT_IN_FRAME}
          </Text>
        </View>

        {/* inst 2 */}
        <View style={styles.singleInsCont}>
          <SvgImage Svg={images.checkBlack} />
          <Text style={styles.singInstTxt}>
            {strings.lblCHECK_IS_PHOTO_CLEAR}
          </Text>
        </View>
        {/* inst 2 end */}
      </View>
      {/* instructionTxt */}
      <BottomButton>
        <Text style={styles.reTakeTxt}>{strings.lblRETAKE_PHOTO}</Text>
        <Button
          bgcolor={theme.colors.green}
          text={strings.lblUSE_PHOTO}
          textColor={theme.colors.dark}
          onPress={() => {
            if (roleID === Role.Referee) {
              navigate('SignUpRefereeCoachingLicense', {roleID: roleID});
            } else if (roleID === Role.SportingDirector) {
              navigate('SignUpTakeASelfie', {roleID: roleID});
            } else {
              navigate('SignUpRefereeCoachingLicense', {roleID: roleID});
            }
          }}
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default SignUpCheckPhoto;
