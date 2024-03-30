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

const {height, width} = Dimensions.get('window');
const Signin = () => {
  return (
    <>
      <KeyboardAvoidingView style={style.container} behavior="position">
        {/* <KeyboardAvoidingView behavior="position"> */}
        <View style={style.imgview}>
          <Image source={icons.EZLogo} style={style.img} />
          <Text style={style.txt1}>Login</Text>
        </View>
        <View>
          <IconInput />
        </View>
        <View>
          <IconInput />
        </View>

        <CustomButton text={'Login'} />
        {/* </KeyboardAvoidingView> */}
      </KeyboardAvoidingView>
    </>
  );
};
export default Signin;
