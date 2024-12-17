import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import images from '../../../assets/images';
import TextInputCustom from '../../../components/TextInputCustom';
import {launchImageLibrary} from 'react-native-image-picker';
import {showSuccess} from '../../../utils/helperFunction';
import {useSelector} from 'react-redux';
import {getUserById, updateUserById} from '../../../utils/ApiCall';
import apiEndPoints from '../../../constants/apiEndPoints';
import {useFocusEffect} from '@react-navigation/native';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';

export default function EditProfile({navigation}: any) {
  const {styles, sizes, colors} = useStyles();
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const userId = useSelector((state: any) => state?.user?.user?.user?.id);

  const [userAllData, setUserAllData] = useState<any>({});
  const [Username, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true); // Loading state for initial fetch

  // Fetch user data from the API
  const fetchUserData = useCallback(async () => {
    setIsFetching(true); // Start loading
    try {
      const response = await getUserById(userToken, userId);
      const userData = response.data;

      if (userData) {
        setUserAllData(userData);
        setUserName(userData.name || '');
        setPhoneNumber(userData.phoneNumber || '');
        setProfileImage(
          userData.profileImage?.url
            ? `${apiEndPoints.BASE_URL}${userData.profileImage.url}`
            : '',
        );
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsFetching(false); // Stop loading
    }
  }, [userToken, userId]);

  // Fetch data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [fetchUserData]),
  );

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: false}, response => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        setProfileImage(selectedImage);
      }
    });
  };

  const handleSave = async () => {
    setIsLoading(true); // Start loading on save
    try {
      const response = await updateUserById(userToken, userId, {
        name: Username,
        phoneNumber,
      });

      if (response.status === 200) {
        showSuccess('Profile updated successfully');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Show loading indicator while fetching data
  if (isFetching) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.GRAY} />
      </View>
    );
  }

  return (
    <ParentView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text
            style={{color: colors.RED, fontSize: sizes.WIDTH * 0.04}}
            onPress={() => navigation.goBack()}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} disabled={isLoading}>
          <Text
            style={{
              fontSize: sizes.WIDTH * 0.04,
              color: isLoading ? colors.LIGHT_GRAY : colors.GRAY,
            }}>
            {isLoading ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>

      <MyKeyboardAvoider style={{height: sizes.HEIGHT * 0.9}}>
        <View style={[styles.profileImageContainer, {flexDirection: 'row'}]}>
          <View>
            <Image
              style={{
                width: sizes.WIDTH * 0.25,
                height: sizes.WIDTH * 0.25,
                borderRadius: sizes.WIDTH * 0.125,
              }}
              source={{
                uri: profileImage || images.DUMMY_PROFILE,
              }}
            />
            <TouchableOpacity style={styles.upload} onPress={pickImage}>
              <Image source={images.UPLOAD_IMAGE_CAMERA} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Name Input */}
        <View style={styles.nameContainer}>
          <Image source={images.person} />
          <TextInputCustom
            textInputStyle={styles.inputStyle}
            handleOnChange={text => setUserName(text)}
            value={Username}
            placeHolderTxt="Enter your name"
            showBottomBorder={false}
          />
        </View>

        {/* Phone Number Input */}
        <View
          style={{
            ...styles.phoneNumContainer,
            flexDirection: 'row',
          }}>
          <Text style={styles.phoneNumCode}>+92</Text>
          <TextInputCustom
            textInputStyle={styles.inputStyle}
            handleOnChange={text => setPhoneNumber(text)}
            value={phoneNumber}
            placeHolderTxt="Enter Phone Number"
            showBottomBorder={false}
          />
        </View>

        {/* Country Input */}
        <View style={styles.phoneNumContainer}>
          <Image source={images.FLAG} />
          <TextInputCustom
            handleOnChange={text => {}}
            textInputStyle={styles.inputStyle}
            value="Pakistan"
            placeHolderTxt="Country"
            editable={false} // Disable editing
            showBottomBorder={false}
          />
        </View>
      </MyKeyboardAvoider>
    </ParentView>
  );
}
