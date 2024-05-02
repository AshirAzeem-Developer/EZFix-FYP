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

const Index = () => {
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
          <View style={{paddingTop: height * 0.01}}>
            <Input
              secureTextEntry={true}
              placeholder={'Enter a new Password'}
            />
            <Input
              secureTextEntry={true}
              placeholder={'Confirm new Password'}
            />
          </View>
          <View style={{paddingTop: height * 0.06,alignSelf:"center"}}>
            <CustomButton text={'Submit'}  ButtonWidth={width * 0.5}/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default Index;
