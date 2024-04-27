import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import style from './style';


import CustomButton from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import Input from '../../../components/Input';
import images from '../../../assets/images';
const {width, height} = Dimensions.get('window');
const Signin = ({navigation}) => {
  return (
    <>
      <AppHeader
         title={'Login'}
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
            <View style={style.title} >
             <Image style={{resizeMode:'contain',width:width*1,alignSelf:"center",
             paddingTop:height*0.7}} source={images.SigninPage}/>
             {/* <Text style={style.txt1}>EzFix</Text> */}
            </View>
           <View style={{paddingTop:height*0.05}} >  
            <Input  placeholder={'Phone Number'} />
            
            <Input placeholder={'Password'} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop:width*0.2
            }}>
            <CustomButton text={'Login'} ButtonWidth={width * 0.4} />
        
          </View>
          <View style={{flexDirection:'row',paddingTop:height*0.02}}>
          <Text style={{fontSize:width * 0.04}}>Don't Have an account?</Text>
            <TouchableOpacity>
              <Text style={{fontSize:width * 0.04,color:"#075B9D"}}> Signup</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity  style={{paddingTop:height*0.01}}>
            <Text style={{fontWeight:"bold"}}>Forget Password?</Text>
          </TouchableOpacity>
        
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default Signin;
