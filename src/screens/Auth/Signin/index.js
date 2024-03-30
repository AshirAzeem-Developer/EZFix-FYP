import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingView, Text,
  View,
} from 'react-native';
import style from './style';

import icons from "../../../assets/icons";
import IconInput from "../../../components/Input/IconInput";

const Signin=()=>{
    return(<>
    <View style={style.container}>
        <View style={style.imgview}>
          <Image source={icons.EZLogo} style={style.img} />
          <Text style={style.txt1}>Login</Text>
        </View>
        <View>
            <IconInput/>
        </View>
    </View>
    
    </>)
}
export default Signin;
