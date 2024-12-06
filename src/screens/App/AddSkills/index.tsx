import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {AppStackParamsList} from '../../../navigators/navigator.seeker';
import useStyles from './style';
import Header from '../../../components/Header';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import images from '../../../assets/images';
import CustomModal from '../../../components/CustomCreatedModal';
import icons from '../../../assets/icons';
import {getCategories, postSkill} from '../../../utils/ApiCall';
import {useSelector} from 'react-redux';

// Enums
enum ExperienceLevel {
  ENTRY = 'Entry Level',
  INTERMEDIATE = 'Intermediate',
  EXPERT = 'Expert',
}

// Interfaces
interface Skill {
  data: {
    id?: string;
    name: string;
    category: string;
    hourlyRate: number;
    experienceYears: number;
    experienceLevel: ExperienceLevel;
    user: number;
  };
}

// Sample Categories (you can replace with your actual categories)
const CATEGORIES = [
  'Software Development',
  'Design',
  'Marketing',
  'Sales',
  'Management',
];
const AddSkill: React.FC<AppStackParamsList> = ({navigation}) => {
  const {styles, colors} = useStyles();
  const [skillName, setSkillName] = useState('');
  const [category, setCategory] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [experienceYears, setExperienceYears] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
    ExperienceLevel.ENTRY,
  );
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false); // Toggle for category dropdown
  const [showPopup, setShowPopup] = useState(false); // State to show/hide popup
  const [isOpen, setIsopen] = useState(false);
  const userId = useSelector((state: any) => state?.user?.user?.user?.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  const handleAddSkill = () => {
    // Validation and skill addition logic
    if (!skillName || !category || !hourlyRate || !experienceYears) {
      Alert.alert(
        'Fields Missing',
        'Please fill all fields to add a new skill',
      );
      return;
    }
    // Validation and skill addition logic
    const newSkill: Skill = {
      data: {
        name: skillName,
        category: category,
        hourlyRate: parseFloat(hourlyRate),
        experienceYears: parseInt(experienceYears),
        experienceLevel: experienceLevel,
        user: userId,
      },
    };
    postSkill(newSkill, userToken)
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          setIsopen(true);
          // console.log('New Skill:', newSkill);
          setSkillName('');
          setCategory('');
          setHourlyRate('');
          setExperienceYears('');
          setExperienceLevel(ExperienceLevel.ENTRY);
          navigation.goBack();
        }
        // TODO: Add skill to your database/state management
      })
      .catch(err => {
        console.log(err);
      });
  };

  const closeModal = () => {
    setIsopen(false);
    // navigate('ServiceProvider', {screen: 'HomeTabs'});
    //    dispatch(setUser(null));
  };

  useEffect(() => {
    getCategories(userToken)
      .then(res => {
        // console.log('Categories', JSON.stringify(res.data, null, 2));
        setCategories(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(
    //   'Catgories Saved ----------- >>>',
    //   JSON.stringify(categories.data, null, 2),
    // );
  }, []);

  return (
    <ParentView style={styles.container}>
      <Header
        isLeftShow={true}
        heading="Add New Skill"
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <Text style={styles.title}>Add New Skill</Text> */}
        <Text style={styles.label}>Skill Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Add Skill Name"
          value={skillName}
          onChangeText={setSkillName}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowCategoryDropdown(prev => !prev)}>
            <Text>{category || 'Select Category'}</Text>
          </TouchableOpacity>

          {showCategoryDropdown && (
            <FlatList
              data={categories.data}
              keyExtractor={item => item}
              style={styles.dropdownMenu}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCategory(item?.id);
                    setShowCategoryDropdown(false);
                  }}>
                  <Text>{item?.attributes?.name}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        <Text style={styles.label}>Hourly Rate</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Hourly Rate"
          keyboardType="numeric"
          value={hourlyRate}
          onChangeText={setHourlyRate}
        />
        <Text style={styles.label}>Years of Experience</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Years of Experience"
          keyboardType="numeric"
          value={experienceYears}
          onChangeText={setExperienceYears}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Experience Level</Text>
          <View style={styles.radioContainer}>
            {Object.values(ExperienceLevel).map(level => (
              <TouchableOpacity
                key={level}
                style={[
                  styles.radioButton,
                  experienceLevel === level && styles.radioButtonSelected,
                ]}
                onPress={() => setExperienceLevel(level)}>
                <Text
                  style={[
                    styles.radioText,
                    experienceLevel === level && styles.radioButtonSelectedText,
                  ]}>
                  {level}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddSkill}>
          <Text style={styles.addButtonText}>Add Skill</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        transparent={true}
        visible={showPopup}
        animationType="fade"
        onRequestClose={() => setShowPopup(false)}>
        <View style={styles.popupOverlay}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupText}>Skill added successfully!</Text>
            <TouchableOpacity
              style={styles.popupButton}
              onPress={() => setShowPopup(false)}>
              <Text style={styles.popupButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <CustomModal
        modalTitle={'Successfull'}
        modalDesc={'Skill added successfully'}
        modalState={isOpen}
        rightBtnOnPress={closeModal}
        iconImage={images.CHECK_BADGE}
        leftBtnText={'Cancel'}
        leftBtnBgColor="white"
        rightBtnText={'OK'}
        rightBtnBgColor="rgba(0,128,0,0.5)"
        rightBtnTextStyle={{color: 'black'}}
        leftBtnTextStyle={{color: 'black'}}
        leftBtnOnPress={closeModal}
      />
    </ParentView>
  );
};
export default AddSkill;
