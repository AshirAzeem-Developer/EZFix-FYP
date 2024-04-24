import CustomButton from '../../../components/Button';
import IconInput from '../../../components/Input/IconInput';
import style from './style';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import icons from '../../../assets/icons';
import images from '../../../assets/images';
import AppHeader from '../../../components/AppHeader';

const {width, height} = Dimensions.get('window');
const Index = () => {
  return (
    <>
      <Text>Hello</Text>
      <AppHeader
        title={'Forgot'}
        onPressBackButton={() => navigation.navigate('Splash')}
      />

      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.imgview}>
            <Image source={images.ForgetImage} style={style.img} />
            <Text style={style.txt1}>Forgot Password?</Text>
          </View>
          <View style={style.txt2view}>
            <Text>Don’t worry! it happens.</Text>
            <Text>Please enter phone number associated with your account</Text>
          </View>
          <View style={{paddingTop: height * 0.04}}>
            <IconInput inputLabel={'Enter Your Mobile Number'} />
          </View>
          <View style={{paddingTop: height * 0.01}}>
            <CustomButton text={'Send OTP Code'} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default Index;
