import {
  View,
  useWindowDimensions,
  Image,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../../assets/icons';

import useStyles from './style';

import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../../../components/AppHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import Button from '../../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setRoleID} from '../../../store/reducer/settings';

const SignIn = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();

  // const roleID = useSelector(state => state.settings.roleID);

  // useEffect(() => {
  //   if (roleID === 0) {
  //     // Assuming 1 is the ID for serviceSeeker
  //     navigation.navigate('serviceSeeker'); // Adjust 'ServiceSeekerStack' as necessary
  //   } else if (roleID === 1) {
  //     // Assuming 2 is the ID for serviceProvider
  //     navigation.navigate('serviceProvider'); // Adjust 'ServiceProviderStack' as necessary
  //   }
  // }, [roleID, navigation]);

  // ======================>>>>>> State Variables <<<<<======================
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ==================== >>>> Use Effect <<<< ====================
  // const dispatch = useDispatch();
  // const user = useSelector(state => console.log(state));
  return (
    <SafeAreaView style={styles.container}>
      {/* =============== >>>> Header <<< =============== */}
      <Header
        leftIconAction={() => navigation.goBack()}
        rightView={
          <View style={styles.headerRightViewStyles}>
            <Text style={styles.nowHereText}>New Here ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.heaaderSignupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        }
      />
      {/* =============== >>>> Logo Container <<< =============== */}
      <View style={styles.logoImgCont}>
        <Image source={icons.Logo} style={styles.logoImg} />
      </View>

      {/* ============ >>> Login To COntinue Container <<< ============ */}
      <View style={styles.loginToContinueCont}>
        <Text style={styles.loginToContinueText}>Login to continue</Text>
      </View>

      {/* ================= >>> Input Fields <<<< ================= */}

      <View style={styles.inputFieldsCont}>
        <TextInputCustom
          // leftIcon={icons.User}
          placeHolderTxt="Username"
          value={username}
          handleOnChange={setUsername}
          // leftIconAction={() => console.log('left icon')}
        />
        <TextInputCustom
          // leftIcon={icons.Lock}
          placeHolderTxt="Password"
          value={password}
          handleOnChange={setPassword}
          // leftIconAction={() => console.log('left icon')}
          isPassword
        />
      </View>
      {/* =========== >>>> Button <<<<<========== */}
      <View>
        <Button
          disabled={username.length === 0 || password.length === 0}
          text="Log in"
          bgcolor={
            username.length === 0 || password.length === 0
              ? colors.GRAY
              : colors.MAIN_GREEN
          }
          btnStyles={{width: sizes.WIDTH * 0.9}}
          textColor="#ffffff"
          onPress={() => [
            // dispatch(setRoleID(Number(username))),
            console.log('Login Pressed'),
          ]}
        />
      </View>
      {/* ==================== >>> Forgot Password <<< ==================== */}
      <View>
        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
          <Text style={styles.forgotPass}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
