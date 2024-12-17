import React, {useCallback, useState} from 'react';
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
import {getUserById, updateUserById, uploadImage} from '../../../utils/ApiCall';
import apiEndPoints from '../../../constants/apiEndPoints';
import {useFocusEffect} from '@react-navigation/native';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';

export default function EditProfile({navigation}: any) {
  const {styles, sizes, colors} = useStyles();
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const userId = useSelector((state: any) => state?.user?.user?.user?.id);

  const [userAllData, setUserAllData] = useState<any>({});
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // Fetch user data from Strapi
  const fetchUserData = useCallback(async () => {
    setIsFetching(true);
    try {
      const response = await getUserById(userToken, userId);
      const userData = response.data;

      console.log('User Data ----- >> ', JSON.stringify(userData, null, 2));
      if (userData) {
        setUserAllData(userData);
        setUsername(userData.name || '');
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
      setIsFetching(false);
    }
  }, [userToken, userId]);

  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [fetchUserData]),
  );

  // Select and upload profile image
  const pickImage = async () => {
    launchImageLibrary({mediaType: 'photo'}, async response => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setProfileImage(selectedImage.uri);

        // Upload the image to Strapi
        try {
          const formData = new FormData();
          formData.append('files', {
            uri: selectedImage.uri,
            type: selectedImage.type,
            name: selectedImage.fileName,
          });

          const uploadResponse = await uploadImage(userToken, formData);

          console.log(
            'Upload Response',
            JSON.stringify(uploadResponse.data[0], null, 2),
          );

          if (uploadResponse.data[0]?.id) {
            // Update user profile with uploaded image

            await updateUserById(userToken, userId, {
              profileImage: uploadResponse?.data[0]?.id,
            });
            showSuccess('Profile image updated successfully!');
          }
        } catch (error) {
          Alert.alert('Error', 'Failed to upload image');
          console.error('Image upload error:', error);
        }
      }
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const response = await updateUserById(userToken, userId, {
        name: username,
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
      setIsLoading(false);
    }
  };

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: colors.RED, fontSize: sizes.WIDTH * 0.04}}>
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
        <View style={styles.profileImageContainer}>
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

        <View style={styles.inputContainer}>
          <TextInputCustom
            leftIcon={images.person}
            textInputStyle={styles.inputStyle}
            handleOnChange={setUsername}
            value={username}
            placeHolderTxt="Enter your name"
          />
          <TextInputCustom
            leftIcon={images.PHONE_CODE}
            textInputStyle={styles.inputStyle}
            handleOnChange={setPhoneNumber}
            value={phoneNumber}
            placeHolderTxt="Enter Phone Number"
          />
        </View>
      </MyKeyboardAvoider>
    </ParentView>
  );
}
