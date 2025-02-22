import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ParentView} from '../../../components/common/ParentView/ParentView';

import images from '../../../assets/images';
import useStyles from './style';
import {FadeInDown} from 'react-native-reanimated';
import icons from '../../../assets/icons';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DropDown from '../../../components/DropDown';
import apiEndPoints from '../../../constants/apiEndPoints';
import {getUserById} from '../../../utils/ApiCall';
import {useIsFocused} from '@react-navigation/native';

type Props = NativeStackScreenProps<AppStackParamsList>;

const Profile: React.FC<Props> = ({navigation}) => {
  const {styles, sizes, colors} = useStyles();

  const [userAllData, setUserAllData] = useState<any>({});
  const [isEnabled, setIsEnabled] = useState(false);
  const isFocused = useIsFocused();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // ==== >> Defining type for Redux State << ====
  interface RootState {
    user: {
      user: {
        user: {
          roleType: string;
          name: string;
          phoneNumber: string;
          email: string;
        };
      };
    };
  }

  const userType = useSelector(
    (state: RootState) => state.user.user.user.roleType,
  );

  const userId = useSelector((state: RootState) => state.user.user.user.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  const userData = useSelector((state: RootState) => state.user.user.user);

  const fetchUserData = useCallback(() => {
    getUserById(userToken, userId)
      .then(res => {
        setUserAllData(res.data);
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
      });
  }, [userToken, userId]);
  // Fetch data whenever screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [fetchUserData]),
  );

  const SeekerView = () => {
    // console.log(
    //   'Users All Data  ------- >> ',
    //   JSON.stringify(userAllData, null, 2),
    // );
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <SafeAreaView>
          {/* ========= >> Header << ============= */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Image source={icons.EDIT} style={styles.headerImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileSettings')}>
              <Image source={icons.SETTINGS} style={styles.headerImage} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* =========== >>> Profile <<<< ============= */}
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: `${apiEndPoints.BASE_URL}${userAllData?.profileImage?.url}`,
                }}
                style={{
                  width: sizes.WIDTH * 0.18,
                  height: sizes.WIDTH * 0.18,
                  borderRadius: sizes.WIDTH * 1,
                }}
              />
              <View style={styles.profileDetailsContainer}>
                <Text style={styles.name}>{userAllData?.name}</Text>
                <Text style={styles.phoneNumberText}>{userAllData?.email}</Text>
              </View>
            </View>
            {/* =========== >>> Section 1 <<<< ============= */}
            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.text}>Jobs</Text>
                <Text style={[styles.text, styles.sec1Desc]}>05</Text>
              </View>
              <View>
                <Text style={styles.text}>Completed</Text>
                <Text style={[styles.text, styles.sec1Desc]}>03</Text>
              </View>
              <View>
                <Text style={styles.text}>In Progress</Text>
                <Text style={[styles.text, styles.sec1Desc]}>02</Text>
              </View>
            </View>
            {/* =========== >>> Section 2 <<<< ============= */}

            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.countryLabel}>Country</Text>
                <Text style={[styles.text, styles.country]}>
                  Pakistan , Karachi.
                </Text>
              </View>
              <Image source={images.FLAG} />
            </View>
            {/* =========== >>> Section 3 <<<< ============= */}

            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.contactLabel}>Contact no</Text>
                <Text style={[styles.text, styles.contact]}>
                  +{userAllData?.phoneNumber}
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ParentView>
    );
  };
  const ProviderView = () => {
    const [showSkills, setShowSkills] = useState(false);

    const Show = () => {
      setShowSkills(true);
    };
    return (
      <ParentView
        style={styles.container}
        enterAnimation={FadeInDown.duration(500)}>
        <SafeAreaView>
          {/* ========= >> Header << ============= */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}>
              <Image source={icons.EDIT} style={styles.headerImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileSettings')}>
              <Image source={icons.SETTINGS} style={styles.headerImage} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* =========== >>> Profile <<<< ============= */}
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: `${apiEndPoints.BASE_URL}${userAllData?.profileImage?.url}`,
                }}
                style={{
                  width: sizes.WIDTH * 0.18,
                  height: sizes.WIDTH * 0.18,
                  borderRadius: sizes.WIDTH * 0.09,
                }}
              />
              <View style={styles.profileDetailsContainer}>
                <Text style={styles.name}>{userData?.name}</Text>
                <Text style={styles.phoneNumberText}>{userData?.email}</Text>
              </View>
            </View>
            {/* =========== >>> Section 1 <<<< ============= */}
            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.text}>Jobs</Text>
                <Text style={[styles.text, styles.sec1Desc]}>05</Text>
              </View>
              <View>
                <Text style={styles.text}>Completed</Text>
                <Text style={[styles.text, styles.sec1Desc]}>08</Text>
              </View>
              <View>
                <Text style={styles.text}>In Progress</Text>
                <Text style={[styles.text, styles.sec1Desc]}>6</Text>
              </View>
            </View>
            {/* =========== >>> Section 2 <<<< ============= */}

            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.countryLabel}>Country</Text>
                <Text style={[styles.text, styles.country]}>Pakistan</Text>
              </View>
              <Image source={images.FLAG} />
            </View>
            {/* =========== >>> Section 3 <<<< ============= */}

            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.contactLabel}>Contact no</Text>
                <Text style={[styles.text, styles.contact]}>
                  +92 344 2565412
                </Text>
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  width: sizes.WIDTH * 0.75,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {/* <Text style={styles.contactLabel}></Text> */}
                <Text style={[styles.text, styles.contact]}>Add Skill</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddSkill')}
                  style={styles.addicon}>
                  <Image source={icons.ADD} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.sectionContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  width: sizes.WIDTH * 0.75,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {/* <Text style={styles.contactLabel}></Text> */}
                <Text style={[styles.text, styles.contact]}>
                  Add Experience
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddExperience')}
                  style={styles.addicon}>
                  <Image source={icons.ADD} />
                </TouchableOpacity>
              </View>
            </View>

            {/* =========== >>> Section 5 (Toggle) <<<< ============= */}
            <View style={styles.switchContainer}>
              <Text style={styles.availabilityLabel}>Availability</Text>
              <View>
                <Switch
                  onChange={toggleSwitch}
                  style={styles.switchStyles}
                  value={isEnabled}
                  trackColor={{false: '#787880', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ParentView>
    );
  };

  return userType === 'seeker' ? <SeekerView /> : <ProviderView />;
};

export default Profile;
