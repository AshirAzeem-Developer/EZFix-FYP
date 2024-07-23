import React, {FC, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
// third party
import useStyles from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FadeInDown} from 'react-native-reanimated';
// styles
import stylesheet from './style';

// local component
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/AppHeader';

import Button from '../../../components/Button/Button';

// local navigation
import {AuthStackParamList} from '../../../navigators/authStack';
// enums
import {Role} from '../../../constants/enums/applicationRoleEnums';

import BottomButton from '../../../components/common/BottomButton/BottomButton';
import images from '../../../assets/images';

type SignUpRoleSelectScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'SignUpRoleSelect'
>;

const SignUpRoleSelect: FC<SignUpRoleSelectScreenProps> = ({navigation}) => {
  const {styles, sizes, colors} = useStyles();

  // navigation
  const {navigate} = navigation;

  // state
  const [rolesArr, setRolesArr] = useState([
    {
      roleID: Role.ServiceSeeker,
      Name: 'Service Seeker',
      activeImage: images.activeServiceSeeker,
      inActiveImage: images.activeServiceSeeker,
    },
    {
      roleID: Role.ServiceProvider,
      Name: 'Service Provider',
      activeImage: images.activeServiceProvider,
      inActiveImage: images.activeServiceProvider,
    },
  ]);
  const [selectedRoleID, setSelectedRoleID] = useState<Role>(1);

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <Header leftIconAction={() => navigation.goBack()} />

      {/* text component  */}
      <View style={styles.textCont}>
        <Text style={styles.creatNewTxt}>Select Role</Text>
      </View>
      {/* text component  end  */}

      {/* LIST VIEW */}

      <FlatList
        data={rolesArr}
        keyExtractor={(item, index) => item.roleID.toString()}
        style={styles.roleMainCont}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedRoleID(item.roleID)}
            activeOpacity={1}
            style={[
              styles.singleRoleCont,
              selectedRoleID === item.roleID && styles.activeBorderBottom,
            ]}>
            <View style={styles.roleNameTxtCont}>
              <Text style={styles.roleNameTxt}>{item.Name}</Text>
            </View>

            <View style={styles.roleImgCont}>
              <View style={styles.SkewedRectangleImgCont}>
                <Image
                  source={
                    selectedRoleID === item.roleID
                      ? images.activeSkewedRectangle
                      : images.inActiveSkewedRectangle
                  }
                  style={styles.SkewedRectangleImg}
                />
              </View>

              <Image
                source={
                  selectedRoleID === item.roleID
                    ? item.activeImage
                    : item.inActiveImage
                }
                style={styles.roleImg}
              />
            </View>

            {selectedRoleID === item.roleID && (
              <View style={styles.arrowIconIcon}>
                <Image source={images.doubleRightArrowGreen} />
              </View>
            )}
          </TouchableOpacity>
        )}
      />

      {/* LIST VIEW END */}
      <BottomButton>
        <Button
          bgcolor={colors.MAIN_GREEN}
          text="Continue"
          textColor={colors.BLACK}
          onPress={() =>
            navigate('SignUpHomeAddress', {roleID: selectedRoleID})
          }
          btnStyles={styles.saveButton}
        />
      </BottomButton>
    </ParentView>
  );
};

export default SignUpRoleSelect;
