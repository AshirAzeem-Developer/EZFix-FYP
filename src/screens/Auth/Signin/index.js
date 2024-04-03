import {Image, KeyboardAvoidingView, Text, View} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';

import CustomButton from '../../../components/Button';

const Signin = () => {
  return (
    <>
      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.imgview}>
            <Image source={icons.EZLogo} style={style.img} />
            <Text style={style.txt1}>Login</Text>
          </View>
          <View>
            <IconInput
              inputMode={'tel'}
              inputLabel={'Enter Your Mobile Number'}
            />
            <IconInput
              secureTextEntry={true}
              inputLabel={'Enter Your Password'}
            />
          </View>
          <View>
            <CustomButton text={'Login'} />
          </View>
          <View >
            <Text style={style.txt2}>Don't have an account</Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default Signin;
