import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Keyboard, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const OTPInput = ({pinCount = 4, onCodeChanged, onCodeFilled, style}) => {
  // State to hold the current code
  const [code, setCode] = useState(Array(pinCount).fill(''));
  // References for each TextInput
  const inputRefs = useRef([]);

  // Handle input changes for each digit
  const handleTextChange = (text, index) => {
    // Update the code array
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Trigger onCodeChanged callback
    if (onCodeChanged) {
      onCodeChanged(newCode.join(''));
    }

    // If input is non-empty and there is a next input, focus the next input
    if (text && index < pinCount - 1) {
      inputRefs.current[index + 1].focus();
    }

    // If code is fully entered, trigger onCodeFilled callback and dismiss keyboard
    if (newCode.join('').length === pinCount) {
      Keyboard.dismiss();
      if (onCodeFilled) {
        onCodeFilled(newCode.join(''));
        // Dismiss keyboard when the last field is filled
      }
    }
  };

  // Function to get the appropriate style for each input field
  const getInputStyle = digit => {
    // Return filled style if the digit is non-empty, otherwise default style
    return digit ? styles.filledInput : styles.defaultInput;
  };

  return (
    <View style={[styles.container, style]}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => {
            inputRefs.current[index] = ref;
          }}
          style={getInputStyle(digit)} // Apply conditional style
          value={digit}
          maxLength={1}
          keyboardType="number-pad"
          placeholder="0"
          placeholderTextColor="#E8E6EA"
          onFocus={() => {
            // Automatically open the keyboard when the first field is touched
            if (index === 0) {
              inputRefs.current[index].focus();
            }
          }}
          onChangeText={text => handleTextChange(text, index)}
          onKeyPress={({nativeEvent}) => {
            // Handle backspace key press to move focus to the previous input
            if (nativeEvent.key === 'Backspace') {
              // If the input is empty and there is a previous input, focus it
              if (digit === '' && index > 0) {
                inputRefs.current[index - 1].focus();
              } else if (digit !== '') {
                handleTextChange('', index);
              }
            }
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginVertical: height * 0.03, // Adjust as needed
  },
  defaultInput: {
    width: width * 0.17, // Adjust width as needed
    height: height * 0.08,
    borderWidth: 1,
    borderColor: '#000', // Adjust border color as needed
    fontSize: width * 0.05,
    fontWeight: 'bold',
    fontFamily: 'Dubai-Bold',
    color: '#000',
    textAlign: 'center', // Adjust text color as needed
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // Custom color for filled fields// Default background color
  },
  filledInput: {
    width: width * 0.17, // Adjust width as needed
    height: height * 0.08,
    borderColor: '#fff', // Adjust border color as needed
    textAlign: 'center',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#fff', // Adjust text color as needed
    backgroundColor: '#164377',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    // Custom color for filled fields
  },
});

export default OTPInput;
