import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';
import IconInput from '../../../components/Input/IconInput';

import CustomButton from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import Input from '../../../components/Input';
const {width, height} = Dimensions.get('window');
const Signin = ({navigation}) => {
  return (
    <>
      <AppHeader
        title={'Sign In'}
        onPressBackButton={() => navigation.navigate('Splash')}
      />

      <KeyboardAvoidingView behavior="position">
        <View style={style.container}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={style.imgview}>
              <Image source={icons.EZLogo} style={style.img} />
              <Text style={style.txt1}>Login</Text>
            </View>

            <Input placeholder={'Phone Number'} />
            <Input placeholder={'Password'} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomButton text={'Login'} ButtonWidth={width * 0.4} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default Signin;
