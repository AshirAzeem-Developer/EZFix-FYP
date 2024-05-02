import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import style from './style';

import icons from '../../../assets/icons';

import CustomButton from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import Input from '../../../components/Input';
import CategorySelector from '../../../components/CategorySelectDropDown';
import styles from './style';

const SignUp = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <>
      <AppHeader
        title={'Sign Up'}
        onPressBackButton={() => navigation.navigate('Splash')}
      />
      <View style={style.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={style.fieldview}>
            <View>
              <Text>Enter your CNIC number</Text>
              <Input
                keyboardType={'phone-pad'}
                placeholder={'42201-0164-0124'}
              />
            </View>
            <View>
              <Text>Enter Your name</Text>

              <Input
                keyboardType={'default'}
                placeholder={'Attaullah bakhsh'}
              />
            </View>
            <View>
              <Text>Enter Your Mobile Number</Text>

              <Input inputMode={'tel'} placeholder={'0334 4889595'} />
            </View>
            <View>
              <Text>Enter Your Password</Text>

              <Input secureTextEntry={true} placeholder={'**********'} />
            </View>
          </View>
          <View>
            <Text>Confirm Password</Text>
            <Input secureTextEntry={true} placeholder={'**********'} />
          </View>
          <View style={styles.categorySelectorContainerStyle}>
            <CategorySelector />
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
            <Text style={{fontSize: width * 0.04}}>Already Have account?</Text>
            <TouchableOpacity>
              <Text style={{fontSize: width * 0.04, color: '#164377'}}>
                {' '}
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};
export default SignUp;
