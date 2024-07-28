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
import {ProfileStackParamsList} from '../../../navigators/navigator.seeker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

// type Props = NativeStackScreenProps<ProfileStackParamsList, 'Profile'>;

const Profile = () => {
  const {styles, sizes, colors} = useStyles();
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ParentView
      style={styles.container}
      enterAnimation={FadeInDown.duration(500)}>
      <SafeAreaView>
        {/* ========= >> Header << ============= */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
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
              <Text style={[styles.text, styles.contact]}>+92 344 2565412</Text>
            </View>
          </View>
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
              dolor ex eum optio. Dolore eligendi quasi reiciendis! Laudantium,
              voluptatum aliquam iure, et nemo eaque incidunt sapiente qui ut
              ipsa libero!*
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

export default Profile;
