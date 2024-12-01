import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './style';

import {ParentView} from '../../../components/common/ParentView/ParentView';
import images from '../../../assets/images';
import CustomInput from '../../../components/CustomInput';
import CustomTextArea from '../../../components/CustomTextArea';
import CustomMenuModal from '../../../components/CustomMenuModal';
import CustomActionSheet from '../../../components/CustomActionSheet';
import CustomModal from '../../../components/CustomModal';
import MyKeyboardAvoider from '../../../components/MyKeyboardAvoider';
import icons from '../../../assets/icons';
import { useSelector } from 'react-redux';
import { getUserById, updateUserById } from '../../../utils/ApiCall';
import apiEndPoints from '../../../constants/apiEndPoints';
import TextInputCustom from '../../../components/TextInputCustom';

export default function EditProfile({navigation}: any) {
  const {styles, sizes, colors} = useStyles();
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  const userId = useSelector((state: RootState) => state.user?.user?.user?.id);
  console.log(userId);
  const [Username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isOpen, setIsopen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState<string>('');
  // navigation
  const {navigate} = navigation;

  const handleEdit = () => {
    // Handle edit action
    console.log('Edit Is Pressed');
  };

  const handleDelete = () => {
    // Handle delete action
    console.log('Experience Delted ');
  };
  // const fetchUserData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await getUserById(userToken, userId);
  //     const userData = response.data;
  //     setName(userData.name || '');
  //     setEmail(userData.email || '');
  //     setPhoneNumber(userData.phoneNumber || '');
  //     setProfileImage(`${apiEndPoints.BASE_URL}${userData?.profileImage?.url}`);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //     Alert.alert('Error', 'Failed to fetch user data.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSave = async () => {
    // if (!name || !email || !phoneNumber) {
    //   Alert.alert('Validation Error', 'Name, email, and phone number are required.');
    //   return;
    // }

    setIsLoading(true);
  
      updateUserById(userToken, userId, {        
       
          name:Username,
             
    
      // Alert.alert('Success', 'Profile updated successfully.');
      // navigation.goBack();
      }).then((res)=>{
        console.log(JSON.stringify(res.data,null,2));
        
      }).catch((error)=>{
        console.log(error);
        
      })
    
    }
  console.log(Username);

  // useEffect(() => {
  //   fetchUserData();
  // }, []);
  const menuOptions = [
    {
      optionText: 'Edit Profile',
      optionIcon: images.EIDT,
      optionOnPress: handleEdit,
    },
    {
      optionText: 'Delete',
      optionIcon: icons.DELETE,
      optionOnPress: handleDelete,
    },
  ];

  const closeModal = () => {
    setModalVisible(false);
  };

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
        <TouchableOpacity  onPress={handleSave}>
          <Text
            style={{
              fontSize: sizes.WIDTH * 0.04,
              color: colors.GRAY,
            }}>
            Save
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
              borderRadius: sizes.WIDTH * 0.125,}}
            source={profileImage ? {uri: profileImage} : images.DUMMY_PROFILE} />
            <TouchableOpacity style={styles.upload}>
              <Image source={images.UPLOAD_IMAGE_CAMERA} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ============= >>> Name Input  <<<< =================  */}
        <View style={styles.nameContainer}>
          <Image source={icons.Profile} />
          <TextInputCustom
           
    
    handleOnChange={text => setUserName(text)}
    value={Username}
    placeHolderTxt="Enter your name"
          />
        </View>
        {/* ============= >>> Contact Input  <<<< =================  */}
        <View
          style={{
            ...styles.phoneNumContainer,
            flexDirection: 'row',
          }}>
          <Text style={styles.phoneNumCode}>+92</Text>
          <CustomInput
            inputType={'number-pad'}
            label="Contact Number"
            inpValue={phoneNumber} // Use inpValue to bind the state
            onChangeText={setEmail}
            placeholder={'+92 xxx xxxxxxx'}
          />
        </View>
        {/* ============= >>> CountryInput  <<<< =================  */}
        <View style={styles.phoneNumContainer}>
          <Image source={images.FLAG} />

          <CustomInput
            inputType={'email-address'}
            label="Country"
            placeholder={'Pakistan'}
          />
        </View>

        <View style={styles.experienceContainer}>
          <View style={styles.experienceHeader}>
            <Text style={styles.expLabelText}>Experience</Text>
            <View style={styles.expIconContainer}>
              <TouchableOpacity>
                <Image source={icons.ADD} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsopen(true)}>
                <Image source={images.EIDT} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.expDetailsContainer}>
            <Text style={styles.expPosition}>Assistant Refree</Text>
          </View>
          <View style={styles.expDetailsContainer}>
            <Text style={styles.expYear}>Feb 2022</Text>
          </View>
          <View style={styles.expDetailsContainer}>
            <Text style={styles.expYear}>March 2023</Text>
          </View>
          <View style={styles.expDetailsContainer}>
            <CustomTextArea
              placeholder="I have Experience as a Plumber for 2 years and I have worked in different companies and I have a good experience in this field "
              customStyles={{
                marginTop: 0,
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              maxLength={250}
              value={description}
              setValue={setDescription}
            />
          </View>
        </View>

        <CustomMenuModal
          modalState={isOpen}
          onBackdropPress={() => setIsopen(false)}>
          <CustomActionSheet
            options={menuOptions}
            // customContainerStyle={{
            //   position: 'absolute',
            //   bottom: sizes.HEIGHT * 0.6,
            // }}
          />
        </CustomMenuModal>

        <CustomModal
          modalState={modalVisible}
          rightBtnOnPress={closeModal}
          leftBtnOnPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
          closeModal={closeModal}
          iconImage={images.DELETE_BADGE}
          leftBtnText="Delete"
          modalTitle="Delete Experience"
          modalDesc="Are you sure you want to delete this 
                  experience, it may affect your credibility"
          leftBtnBgColor="white"
          rightBtnText="Cancel"
          rightBtnBgColor="#FFE2E2"
          rightBtnTextStyle={{color: 'red'}}
        />
      </MyKeyboardAvoider>
    </ParentView>
  );
}
