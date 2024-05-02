import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';

import CustomButton from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import Input from '../../../components/Input';
import CategorySelector from '../../../components/CategorySelectDropDown';
import styles from './style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import images from '../../../assets/images';

const SignUp = () => {
  const {width, height} = Dimensions.get('window');

  const openCamera = async () => {
    try {
      const result = await launchCamera();
      console.log('Response ====>>> ', result?.assets[0]?.uri);
    } catch (error) {
      console.error('Error occurred while opening camera:', error);
    }
  };

  return (
    <>
      <AppHeader
        title={'Sign Up'}
        onPressBackButton={() => navigation.navigate('Splash')}
      />

      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <ScrollView>
            <View style={style.fieldview}>
              <Text
                style={{
                  fontSize: width * 0.06,
                  color: 'black',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  fontFamily: 'Poppins-BlackItalic',
                }}>
                Register
              </Text>
              <View>
                <Text style={{fontWeight: 'bold'}}>Enter your CNIC number</Text>
                <Input
                  keyboardType={'phone-pad'}
                  placeholder={'42201-0164-0124'}
                />
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>Enter Your name</Text>

                <Input
                  keyboardType={'default'}
                  placeholder={'Attaullah bakhsh'}
                />
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>
                  Enter Your Mobile Number
                </Text>

                <Input inputMode={'tel'} placeholder={'0334 4889595'} />
              </View>
              <View>
                <Text style={{fontWeight: 'bold'}}>Enter Your Password</Text>

                <Input secureTextEntry={true} placeholder={'**********'} />
              </View>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Confirm Password</Text>
              <Input secureTextEntry={true} placeholder={'**********'} />
            </View>
            <View style={styles.categorySelectorContainerStyle}>
              <CategorySelector />
            </View>
            <View style={styles.uploadButtonContainer}>
              <TouchableOpacity
                style={{
                  marginLeft: width * 0.009,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={openCamera}>
                <Image source={icons.Upload} style={{marginRight: 12}} />
                <Text style={{fontSize: width * 0.05}}>
                  Attach Cnic Front Picture
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{paddingTop: height * 0.03, alignSelf: 'center'}}>
              <CustomButton text={'Send OTP Code'} ButtonWidth={width * 0.5} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: height * 0.02,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: width * 0.04}}>
                Already Have account?
              </Text>
              <TouchableOpacity>
                <Text style={{fontSize: width * 0.04, color: '#164377'}}>
                  {' '}
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default SignUp;
