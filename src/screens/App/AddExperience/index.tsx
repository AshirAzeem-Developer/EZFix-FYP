import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import useStyles from './style';
import Header from '../../../components/Header';
import CustomModal from '../../../components/CustomCreatedModal';
import images from '../../../assets/images';

enum ExperienceLevel {
  ENTRY = 'Entry Level',
  INTERMEDIATE = 'Intermediate',
  EXPERT = 'Expert',
}

// Interfaces
interface Skill {
  id?: string;
  name: string;
  category: string;
  hourlyRate: number;
  experienceYears: number;
  experienceLevel: ExperienceLevel;
}

interface Experience {
  id?: string;
  jobTitle: string;
  startDate: Date;
  endDate?: Date;
  skill: Skill;
}

const AddExperience = ({navigation}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [skill, setSkill] = useState<Skill | null>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const {styles, colors} = useStyles();
  const [isOpen, setIsopen] = useState(false);

  // Sample skills (replace with actual skills from your database)
  const SKILLS: Skill[] = [
    {
      id: '1',
      name: 'React Native',
      category: 'Software Development',
      hourlyRate: 50,
      experienceYears: 3,
      experienceLevel: ExperienceLevel.INTERMEDIATE,
    },
    {
      id: '2',
      name: 'UI/UX Design',
      category: 'Design',
      hourlyRate: 45,
      experienceYears: 2,
      experienceLevel: ExperienceLevel.EXPERT,
    },
  ];
  const closeModal = () => {
    setIsopen(false);
    // navigate('ServiceProvider', {screen: 'HomeTabs'});
    //    dispatch(setUser(null));
  };
  const handleAddExperience = () => {
    if (!skill) {
      Alert.alert('Please select a skill');
      return;
    }

    const newExperience: Experience = {
      jobTitle,
      startDate,
      endDate,
      skill,
    };

    // Simulate adding experience (replace with actual logic)
    console.log('New Experience:', newExperience);

    // Reset fields
    setJobTitle('');
    setStartDate(new Date());
    setEndDate(undefined);
    setSkill(null);

    // Show confirmation
    Alert.alert('Experience added successfully!');
  };

  return (
    <ParentView style={styles.container}>
      <Header
        heading="Add Work Experience"
        isLeftShow={true}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <Text style={styles.title}>Add Work Experience</Text> */}

        <TextInput
          style={styles.input}
          placeholder="Job Title"
          value={jobTitle}
          onChangeText={setJobTitle}
        />

        <View style={styles.dateContainer}>
          <Text style={styles.label}>Start Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowStartDatePicker(true)}>
            <Text>{startDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker
              value={startDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowStartDatePicker(false);
                if (selectedDate) {
                  setStartDate(selectedDate); // Update start date
                }
              }}
            />
          )}
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.label}>End Date (Optional)</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowEndDatePicker(true)}>
            <Text>
              {endDate ? endDate.toLocaleDateString() : 'Not Specified'}
            </Text>
          </TouchableOpacity>
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate || new Date()} // Use current date as fallback
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowEndDatePicker(false);
                if (selectedDate) {
                  setEndDate(selectedDate); // Update end date
                }
              }}
            />
          )}
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Select Skill</Text>
          <View style={styles.skillDropdown}>
            {SKILLS.map(s => (
              <TouchableOpacity
                key={s.id}
                style={[
                  styles.skillItem,
                  skill?.id === s.id && styles.selectedSkillItem, // Highlight selected skill
                ]}
                onPress={() => {
                  setSkill(s); // Set selected skill
                  console.log('Selected Skill:', s.name);
                }}>
                <Text>{s.name}</Text>
                <Text style={styles.skillSubtext}>{s.category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddExperience}>
          <Text style={styles.addButtonText}>Add Experience</Text>
        </TouchableOpacity>
      </ScrollView>
      <CustomModal
        modalTitle={'Exerience Addded'}
        modalDesc={''}
        modalState={isOpen}
        rightBtnOnPress={closeModal}
        iconImage={images.CHECK_BADGE}
        leftBtnText={'Cancel'}
        leftBtnBgColor="white"
        rightBtnText={'OK'}
        rightBtnBgColor="rgba(0,128,0,1)"
        rightBtnTextStyle={{color: 'black'}}
        leftBtnTextStyle={{color: 'black'}}
        leftBtnOnPress={closeModal}
      />
    </ParentView>
  );
};

export default AddExperience;
