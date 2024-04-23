import {Dimensions, Image, KeyboardAvoidingView, Text, View,TouchableOpacity} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';
import CustomButton from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';

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
          <View style={{paddingTop:height*0.03}}>    
                <CustomButton  text={'Register'} />
                </View>

          <View style={{flexDirection:'row',paddingTop:height*0.02,justifyContent:"center"}}>
          <Text style={{fontSize:width * 0.04}}>Don't Have an account?</Text>
            <TouchableOpacity>
              <Text style={{fontSize:width * 0.04}}> Signup</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default SignUp;
