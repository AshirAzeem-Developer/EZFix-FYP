import {Dimensions, Image, KeyboardAvoidingView, Text, View,TouchableOpacity} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';

import CustomButton from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import Input from '../../../components/Input';

const SignUp = () => {
const {width, height} = Dimensions.get('window');

  return (
    <>
    <AppHeader
        title={'Signup'}
        onPressBackButton={() => navigation.navigate('Splash')}
      />
      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          
          <View style={style.fieldview}>
            <Input
              inputMode={'tel'}
              placeholder={'Enter Your CNIC Number'}
            />
            <Input inputMode={'tel'} placeholder={'Enter Your name'} />
            <Input
              inputMode={'tel'}
              placeholder={'Enter Your Mobile Number'}
            />
            <Input
              secureTextEntry={true}
              placeholder={'Enter Your Password'}
            />
            <Input secureTextEntry={true} placeholder={'confirm Password'} />
          </View>
          <View style={{paddingTop:height*0.03,alignSelf:"center"}}>    
          <CustomButton text={'Send OTP Code'} ButtonWidth={width * 0.5} />
                </View>

          <View style={{flexDirection:'row',paddingTop:height*0.02,justifyContent:"center"}}>
          <Text style={{fontSize:width * 0.04}}>Already Have account?</Text>
            <TouchableOpacity>
              <Text style={{fontSize:width * 0.04, color: '#164377',}}> Signup</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default SignUp;
