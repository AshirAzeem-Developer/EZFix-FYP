import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/AppHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import Button from '../../../components/Button/Button';
import {useDispatch} from 'react-redux';
import {setUser} from '../../../store/reducer/user';
import api from '../../../utils/api';
import apiEndPoints from '../../../constants/apiEndPoints';
import {showError, showSuccess} from '../../../utils/helperFunction';
import images from '../../../assets/images';
import {validateEmail, validatePassword} from '../../../utils/validator';

const SignIn = ({navigation}) => {
  const {styles, colors, sizes} = useStyles();

  const loginUser = async () => {
    try {
      const res = await api.post(apiEndPoints.LOGIN, {
        identifier: username,
        password: password,
      });

      if (res.status === 200) {
        showSuccess('Login Successfull');
        const user = res?.data;
        console.log('User', user);
        const userObj = {jwt: user.jwt, ...user.user};
        console.log('User Object', userObj);
        dispatch(setUser(userObj));

        // const user = userRoleType === 'seeker' ? users.seeker : users.provider;
      }
    } catch (error: any) {
      showError('Email or Password Incorrect');
      // console.error('Error', error?.response?.data?.error?.message);
    }
  };
  // ======================>>>>>> State Variables <<<<<======================

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // ======================>>>>>> Hooks <<<<<======================
  const dispatch = useDispatch();
  // const user = useSelector(state => console.log(state));
  return (
    <SafeAreaView style={styles.container}>
      {/* =============== >>>> Header <<< =============== */}
      <Header
        leftIconAction={() => navigation.goBack()}
        rightView={
          <View style={styles.headerRightViewStyles}>
            <Text style={styles.nowHereText}>New Here ? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpCheckPhone')}>
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
          leftIcon={icons.MAIL}
          placeHolderTxt="Email or Phone"
          value={username}
          handleOnChange={setUsername}
          errorHandler={[
            {
              errorText: 'Invalid Email Address',
              validator: validateEmail,
            },
          ]}
          // leftIconAction={() => console.log('left icon')}
        />
        <TextInputCustom
          leftIcon={icons.SHIELD_SEC}
          placeHolderTxt="Password"
          value={password}
          handleOnChange={setPassword}
          // leftIconAction={() => console.log('left icon')}
          isPassword
          errorHandler={[
            {
              errorText: 'Invalid Password',
              validator: validatePassword,
            },
          ]}
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
              : colors.PRIMARY
          }
          btnStyles={{width: sizes.WIDTH * 0.9}}
          textColor="#ffffff"
          onPress={loginUser}
        />
      </View>
      {/* ==================== >>> Forgot Password <<< ==================== */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgotPass}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
