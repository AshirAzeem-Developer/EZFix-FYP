import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DropDown from '../../../components/DropDown';

type Props = NativeStackScreenProps<AppStackParamsList>;

const Profile: React.FC<Props> = ({navigation}) => {
  const {styles, sizes, colors} = useStyles();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const userType = useSelector(state => state?.user?.user?.user?.roleType);
  console.log('USerType', userType);

  const SeekerView = () => {
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
              <Image source={images.PROFILE} />
              <View style={styles.profileDetailsContainer}>
                <Text style={styles.name}>John Smith</Text>
                <Text style={styles.phoneNumberText}>+92 321 5589988</Text>
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
                <Text style={[styles.text, styles.country]}>US, Texas</Text>
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
              <Image source={images.PROFILE} />
              <View style={styles.profileDetailsContainer}>
                <Text style={styles.name}>John Smith</Text>
                <Text style={styles.phoneNumberText}>+92 321 5589988</Text>
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
                <Text style={[styles.text, styles.sec1Desc]}>237890</Text>
              </View>
              <View>
                <Text style={styles.text}>In Progress</Text>
                <Text style={[styles.text, styles.sec1Desc]}>27</Text>
              </View>
            </View>
            {/* =========== >>> Section 2 <<<< ============= */}

            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.countryLabel}>Country</Text>
                <Text style={[styles.text, styles.country]}>US, Texas</Text>
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
                <TouchableOpacity onPress={Show} style={styles.addicon}>
                  <Image source={icons.ADD} />
                </TouchableOpacity>
              </View>
            </View>
            {showSkills && (
              <View style={styles.dropdown}>
                <DropDown />
              </View>
            )}

            {/* =========== >>> Section 4 <<<< ============= */}
            <View style={styles.experienceContainer}>
              <View style={styles.experienceChipContainer}>
                <Text style={styles.expLabel}>Experience</Text>
                <View style={styles.experienceChip}>
                  <Text style={styles.chipText}>1+ Years</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.refHeading}>
                <View style={styles.refDivider} />
                <Text style={styles.textSkill}>Skill</Text>
                <View style={styles.clubSportsTextDivider} />
                <Text style={styles.textSkill}>Technician</Text>
              </View>
              <Text style={styles.experienceTime}>Mar 2023 - Present...</Text>
              <Text style={styles.textShortDesc}>Add a short description</Text>
              <Text style={styles.expDesc}>
                *Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                dolor ex eum optio. Dolore eligendi quasi reiciendis!
                Laudantium, voluptatum aliquam iure, et nemo eaque incidunt
                sapiente qui ut ipsa libero!*
              </Text>
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
