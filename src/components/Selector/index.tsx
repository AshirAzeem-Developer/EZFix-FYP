import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';
import useStyles from './style';

// Define the type for each skill item
interface Skill {
  id: number;
  name: string;
  hourlyRate: string;
}

// Define the type for the data prop
interface SelectorProps {
  data: Skill[];
  onSelect: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({data, onSelect}) => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const {styles} = useStyles();

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#008000'}]}>
          Select Matching Skill
        </Text>
      );
    }
    return null;
  };

  // Transform the skills data to options
  const dropdownOptions = data?.map(skill => ({
    label: `${skill.name} - ${skill.hourlyRate}/hr`,
    value: skill.name + '\n' + skill.hourlyRate,
  }));

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#008000'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dropdownOptions}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select skill' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          if (item.value !== value) {
            setValue(item.value);
            onSelect(item.value);
          }
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={isFocus ? '#008000' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default Selector;
