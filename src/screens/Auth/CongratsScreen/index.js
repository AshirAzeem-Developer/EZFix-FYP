import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import style from './style';
import images from '../../../assets/images';
import CustomButton from '../../../components/Button';

const {width, height} = Dimensions.get('window');
const Signin = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={style.container}>
        <View style={style.imgview}>
          <Image source={images.Congratulation} />
        </View>
        <View>
          <Text style={style.txt1}>You're all set!</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: height * 0.04,
          }}>
          <CustomButton text={'Lets Begin'} ButtonWidth={width * 0.9} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Signin;
