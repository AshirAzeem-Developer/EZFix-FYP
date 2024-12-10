import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import icons from '../../../assets/icons';
import useStyles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/AppHeader';
import TextInputCustom from '../../../components/TextInputCustom';
import Button from '../../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../store/reducer/user';
import {
  CheckInternet,
  showError,
  showSuccess,
} from '../../../utils/helperFunction';

import {validateEmail, validatePassword} from '../../../utils/validator';
import {postLogin} from '../../../utils/ApiCall';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigators/authStack';
import images from '../../../assets/images';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

const SignIn = ({navigation}: Props) => {
  const {styles, colors, sizes} = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  function loginUser() {
    setLoading(true);
    postLogin({
      identifier: username,
      password: password,
    })
      .then(res => {
        console.log('res', res?.data);
        dispatch(setUser(res.data));
        showSuccess('Login Success');
        setLoading(false);
      })
      .catch(err => {
        showError('Email or password incorrect');
        console.error('Error', err);
        setLoading(false);
      });
  }
  // ======================>>>>>> State Variables <<<<<======================

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isConnected, setisConnected] = useState(false);
  const [isShowNewPassword, setIsNewShowPassword] = useState(true);

  // ======================>>>>>> Hooks <<<<<======================
  // const user = useSelector(state => console.log(state));
  return (
    <>
      <>
        <SafeAreaView style={styles.container}>
          {/* =============== >>>> Header <<< =============== */}
          <View style={styles.headerRightViewStyles}>
            <Text style={styles.nowHereText}>New Here ? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpCheckPhone')}>
              <Text style={styles.heaaderSignupText}>Sign up</Text>
            </TouchableOpacity>
          </View>

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
              isShowRightIcon
              placeHolderTxt="Password"
              value={password}
              handleOnChange={newValue => {
                setPassword(newValue);
              }}
              isPassword={isShowNewPassword}
              errorHandler={[
                {
                  errorText: 'Invalid Password',
                  validator: validatePassword,
                },
              ]}
              rightIcon={isShowNewPassword ? images.crossEye : images.eyeOpen}
              rightIconAction={() => {
                setIsNewShowPassword(preVale => !preVale);
              }}
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
              onPress={() => loginUser()}
              loading={loading}
            />
          </View>
          {/* ==================== >>> Forgot Password <<< ==================== */}
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.forgotPass}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <CheckInternet
            isConnected={isConnected}
            setisConnected={setisConnected}
          />
        </SafeAreaView>
      </>
    </>
  );
};

export default SignIn;
