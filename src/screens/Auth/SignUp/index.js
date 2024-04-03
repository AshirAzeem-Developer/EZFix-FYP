import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';

const SignUp = () => {
  return (
    <>
      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.imgview}>
            <Image source={icons.EZLogo} style={style.img} />
            <Text style={style.txt1}>Sign Up</Text>
          </View>
          <View style={style.fieldview}>
            <IconInput
              inputMode={'tel'}
              inputLabel={'Enter Your CNIC Number'}
            />
            <IconInput inputMode={'tel'} inputLabel={'Enter Your name'} />
            <IconInput
              inputMode={'tel'}
              inputLabel={'Enter Your Mobile Number'}
            />
            <IconInput
              secureTextEntry={true}
              inputLabel={'Enter Your Password'}
            />
            <IconInput secureTextEntry={true} inputLabel={'confirm Password'} />
          </View>
          <CustomButton text={'Register'} />
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default SignUp;
