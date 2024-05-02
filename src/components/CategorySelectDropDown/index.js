import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import React from 'react';
const {width, height} = Dimensions.get('window');

const CategorySelector = () => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Mobiles', disabled: true},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers', disabled: true},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <MultipleSelectList
      maxHeight={height * 0.4}
      boxStyles={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#075B9D',
        borderWidth: 2,
        width: width * 0.9,
      }}
      setSelected={val => setSelected(val)}
      data={data}
      placeholder="Choose a category"
      searchPlaceholder="Search category"
      save="value"
      onSelect={() => console.log(selected)}
      label="Categories"
      notFoundText="No such category found"
      badgeStyles={{backgroundColor: '#164377'}}
      disabledCheckBoxStyles={{backgroundColor: 'white'}}
      disabledTextStyles={{color: 'white'}}
      checkBoxStyles={{backgroundColor: 'white'}}
      disabledItemStyles={{backgroundColor: '#164377'}}
      dropdownStyles={{width: width * 0.9}}
    />
  );
};

export default CategorySelector;

const styles = StyleSheet.create({});
