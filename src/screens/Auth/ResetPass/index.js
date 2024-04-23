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

const ResetPass = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <AppHeader
        title={'Reset'}
        onPressBackButton={() => navigation.navigate('Splash')}
      />
      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.imgview}>
            <Image source={images.ResetImage} style={style.img} />
            <Text style={style.txt1}>Reset Your Password</Text>
          </View>
          <View style={style.txt2view}>
            <Text>Now you can reset your old password</Text>
          </View>
          <View style={{paddingTop: height * 0.05}}>
            <IconInput
              secureTextEntry={true}
              inputLabel={'Enter a new Password'}
            />
            <IconInput
              secureTextEntry={true}
              inputLabel={'Confirm new Password'}
            />
          </View>
          <View style={{paddingTop: height * 0.04}}>
            <CustomButton text={'Submit'} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default ResetPass;
