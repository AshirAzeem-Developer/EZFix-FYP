import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: 'Finland', value: 'finland' },
    { label: 'Barcelona', value: 'barcelona' },
    { label: 'Spain', value: 'spain' },
    { label: 'Italy', value: 'italy' },

  ]);

  const dotColors = ['#008000',]; 

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      multiple={true}
      min={1}
      max={3}
      mode="BADGE"
      badgeTextStyle={{
        fontWeight: 'bold',
        color: '#000',
      }}
      badgeStyle={{
        padding: 5,
        borderRadius: 10,
        margin: 2,
        backgroundColor: '', // Keeps the background color neutral or the same
      }}
      badgeDotColors={value.map((val, index) => dotColors[index % dotColors.length])}
      style={{
        borderColor: '#fff',
        borderRadius: 8,
      }}
      dropDownContainerStyle={{
        borderColor: '#fff',
        borderRadius: 8,
      }}
      labelStyle={{
        color: '#000',
        fontWeight: 'bold',
      }}
    />
  );
}

export default DropDown;
