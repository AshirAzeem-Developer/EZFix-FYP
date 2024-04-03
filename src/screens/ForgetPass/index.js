
import CustomButton from "../../components/Button";
import IconInput from "../../components/Input/IconInput";
import style from "./style";
import {Dimensions, Image, KeyboardAvoidingView, Text, View} from 'react-native';
import icons from "../../assets/icons";





const ForgetPass=()=>{
const {width, height} = Dimensions.get('window');

    return(<>
    
    <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.imgview}>
            <Image source={icons.EZLogo} style={style.img} />
            <Text style={style.txt1}>ForgetPassword?</Text>
            
          </View>
          <View style={style.txt2view}>
          <Text >Don’t worry! it happens.</Text>
          <Text>Please enter phone number associated with your account</Text>
          </View>
          <View style={{paddingTop:height*0.01}}>
            <IconInput
              inputLabel={'Enter Your Mobile Number'}
            />
          </View>
          <View style={{paddingTop:height*0.01}}>
            <CustomButton text={'Send OTP Code'} />
          </View>
          
        </KeyboardAvoidingView>
      </View>
    </>);
}
export default ForgetPass;