import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import useStyles from './style';
import Header from '../../../components/Header';
import CustomModal from '../../../components/CustomCreatedModal';
import images from '../../../assets/images';
import {getSkillsFromUserId, postExperience} from '../../../utils/ApiCall';
import {useSelector} from 'react-redux';

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
  data: {
    id?: string;
    jobTitle: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    skill: Skill;
  };
}

const AddExperience = ({navigation}) => {
  const [jobTitle, setJobTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [skill, setSkill] = useState<Skill | null>(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const {styles, colors, sizes} = useStyles();
  const [isOpen, setIsopen] = useState(false);
  const userId = useSelector((state: any) => state?.user?.user?.user?.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);
  const [userSkills, setUserSkills] = useState([]);
  const [jobDescription, setJobDescription] = useState('');
  const [userSkillIds, setUserSkillIds] = useState([]);

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
      data: {
        jobTitle: jobTitle,
        description: jobDescription,
        startDate: startDate,
        endDate: endDate,
        skill: skill.id as any, // Send skill ID only
      },
    };
    postExperience(newExperience, userToken)
      .then(res => {
        if (res.status === 200) {
          setIsopen(true);
          // Simulate adding experience (replace with actual logic)
          console.log(
            'New Experience ------------ >> :',
            JSON.stringify(newExperience, null, 2),
          );

          // Reset fields
          setJobTitle('');
          setJobDescription('');
          setStartDate(new Date());
          setEndDate(undefined);
          setSkill(null);

          navigation.goBack();
        }
      })
      .catch(err => {
        console.log('Error:', err);
      });
  };

  useEffect(() => {
    // Add your logic here
    getSkillsFromUserId(userId, userToken)
      .then(res => {
        const skills = res?.data?.skills || [];
        setUserSkills(skills);
        const skillIds = skills?.map((skill: any) => skill?.id);
        setUserSkillIds(skillIds); // Update skill IDs state
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }, []);

  return (
    <ParentView style={styles.container}>
      <Header
        heading="Add Work Experience"
        isLeftShow={true}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <Text style={styles.title}>Add Work Experience</Text> */}
        <Text style={styles.label}>Job Title</Text>

        <TextInput
          style={styles.input}
          placeholder="Job Title"
          value={jobTitle}
          onChangeText={setJobTitle}
        />
        <Text style={styles.label}>Work Description</Text>

        <TextInput
          style={[
            styles.input,
            {
              height: sizes.HEIGHT * 0.2,
              textAlignVertical: 'top',
            },
          ]}
          placeholder="Enter Job Description"
          value={jobDescription}
          multiline
          numberOfLines={4}
          textAlign="left"
          onChangeText={setJobDescription}
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
            {userSkills.map(s => (
              <TouchableOpacity
                key={s?.id}
                style={[
                  styles.skillItem,
                  skill?.id === s?.id && styles.selectedSkillItem, // Highlight selected skill
                ]}
                onPress={() => {
                  setSkill(s); // Set selected skill
                  console.log('Selected Skill:', s);
                }}>
                <Text
                  style={skill?.id === s?.id && styles.selectedSkillItemText}>
                  {s?.name}
                </Text>
                <Text
                  style={[
                    styles.skillSubtext,
                    skill?.id === s?.id && styles.selectedSkillSubText,
                  ]}>
                  {s?.category?.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddExperience}>
          <Text style={styles.addButtonText}>Add Experience</Text>
        </TouchableOpacity>
      </View>
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
