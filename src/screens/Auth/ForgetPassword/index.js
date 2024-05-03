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
import Input from '../../../components/Input';

const {width, height} = Dimensions.get('window');
const Index = ({navigation}) => {
  return (
    <>
      <AppHeader
        title={'Forgot'}
        onPressBackButton={() => navigation.goBack()}
      />

      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.imgview}>
            <Image source={images.ForgetImage} style={style.img} />
            <Text style={style.txt1}>Forgot Password?</Text>
          </View>
          <View style={style.txt2view}>
            <Text>Don’t worry! it happens.Please enter phone</Text>
            <Text> number associated with your account</Text>
          </View>
          <View style={{paddingTop: height * 0.04, alignSelf: 'center'}}>
            <Input placeholder={'Enter Your Mobile Number'} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: height * 0.04,
            }}>
            <CustomButton
              text={'Send OTP Code'}
              ButtonWidth={width * 0.5}
              onPress={() => navigation.navigate('ResetPassword')}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default Index;
