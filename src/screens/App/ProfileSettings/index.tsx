import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import useStyles from './style';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import {screen} from '../../../utils/constants';
import images from '../../../assets/images';

import Header from '../../../components/Header';
import ProfileSettingOption from '../../../components/ProfileSettingOption';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import CustomModal from '../../../components/CustomCreatedModal';
import {useGenericModal} from '../../../hooks/useGenericModal/useGenericModal';

import useUserStore, {
  setUser,
  useUserSelector,
} from '../../../store/reducer/user';
import Animated, {FadeInRight} from 'react-native-reanimated';
import {getGlobalStyles} from '../../../constants/GlobalStyle';
import icons from '../../../assets/icons';
import {color} from 'react-native-elements/dist/helpers';
import {useDispatch, useSelector} from 'react-redux';
import { deleteUserById } from '../../../utils/ApiCall';

interface ProfileSettingOptionType {
  optionId: number;
  optionIcon: any; // Replace with the correct type if known, e.g., ImageSourcePropType
  optionText: string;
  onPressAction: () => void;
}

interface Props {
  navigation: NavigationProp<any>; // Adjust to your specific navigation type if known
}

export default function ProfileSettings({navigation}: Props) {
  const {styles, sizes, colors} = useStyles();
  const fonts = getGlobalStyles(colors, sizes);
  const user = useUserSelector(); // Get current user details from state
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [isOpen, setIsopen] = useState(false);



  const modalProps = {
    image: images.DELETE_BADGE,
    title: 'Delete Account',
    firstDes: 'Are you sure you want to delete account?',
    firstDesStyle: {
      color: colors.BLACK,
    },
    // Update the firstDesStyle property to be a string
    buttonTitle: 'Delete',
    handleClose: () => {
      dispatch(setUser(null));
    },
  };
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const userData = useSelector((state: RootState) => state.user.user.user);
  const userId = useSelector((state: RootState) => state.user?.user?.user?.id);
  const handleDeleteAccount = async () => {
    console.log(userToken);
    console.log(userData);
    
    
    // Show confirmation alert
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            setIsLoading(true);
            try {
              // Call API to delete account
              await deleteUserById(userToken, userId);

              // Clear user data from local storage or state
              dispatch(setUser(null));

              // Redirect to login or another appropriate screen
              setIsopen(true);

              Alert.alert('Success', 'Your account has been deleted.');
            } catch (error) {
              Alert.alert('Error', 'Failed to delete account. Please try again.');
            } finally {
              setIsLoading(false);
            }
          },
        },
      ],
    );
  };
  
  // Use the custom hook
  const {GenericModal, hideModal, showModal} = useGenericModal({
    modalProp: modalProps,
  });

  const profileSettingOptions: ProfileSettingOptionType[] = [
    {
      optionId: 1,
      optionIcon: icons.LOCK,
      optionText: 'Change Password',
      onPressAction: () => {
        navigation.navigate('AuthStack', {screen: 'ChangePassword'});
      },
    },
    {
      optionId: 2,
      optionIcon: icons.BELL_ICON,
      optionText: 'Notification',
      onPressAction: () => {
        navigation.navigate('NotificationSettings');
      },
    },
    {
      optionId: 3,
      optionIcon: icons.SUPPORT,
      optionText: 'Support',
      onPressAction: () => {
        navigation.navigate('Support');
      },
    },
    {
      optionId: 4,
      optionIcon: icons.PRIVACY_POLICY,
      optionText: 'Privacy Policy',
      onPressAction: () => {
        navigation.navigate('PrivacyPolicy');
      },
    },

    {
      optionId: 5,
      optionIcon: icons.DELETE,
      optionText: 'Delete Account',
      onPressAction: handleDeleteAccount, // Attach delete handler
    },
    {
      optionId: 6,
      optionIcon: icons.ARROW_RIGHT,
      optionText: 'Logout',
      onPressAction: () => setIsopen(true),
    },
  ];

  const closeModal = () => {
    setIsopen(false);
    // navigate('ServiceProvider', {screen: 'HomeTabs'});
    dispatch(setUser(null));
  };
  return (
    <ParentView style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerView}>
          <Header
            isLeftShow={true}
            leftIconAction={() => navigation.goBack()}
            heading="Settings"
          />
        </View>
        {/* <Text style={styles.Heading}>Settings</Text> */}
        {profileSettingOptions?.map((option, ind) => {
          return (
            <Animated.View
              entering={FadeInRight.duration(150).delay((ind + 1) * 100)}
              key={ind}>
              <ProfileSettingOption
                optionIcon={option.optionIcon}
                optionText={option.optionText}
                onPress={option.onPressAction}
              />
            </Animated.View>
          );
        })}
        <Text style={styles.footer}>EZFIX - Version 1.0</Text>
        <GenericModal />
        <CustomModal
          modalTitle={'Logout'}
          modalDesc={'Are you sure you want to logout?'}
          modalState={isOpen}
          rightBtnOnPress={closeModal}
          iconImage={icons.LOGOUT_BADGE}
          leftBtnText={'Cancel'}
          leftBtnBgColor="white"
          rightBtnText={'Logout'}
          rightBtnBgColor="#FFE2E2"
          rightBtnTextStyle={{color: 'red'}}
          leftBtnTextStyle={{color: 'black'}}
          leftBtnOnPress={closeModal}
        />
      </SafeAreaView>
    </ParentView>
  );
}
