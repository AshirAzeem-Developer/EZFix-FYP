import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';

// styles
import useStyles from './style';

// local

interface OTPInputProps {
  length?: number;
  onOTPChange: (otp: string) => void;
  textInputStyle?: ViewStyle;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 4,
  textInputStyle,
  onOTPChange,
}) => {
  const {styles, sizes, colors} = useStyles();

  const [otp, setOTP] = useState<string[]>(new Array(length).fill(''));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (/[^0-9]/.test(text)) return;

    const newOTP = [...otp];
    newOTP[index] = text;

    if (text !== '' && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    setOTP(newOTP);
    onOTPChange(newOTP.join(''));
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.enterCodeTxt}>Enter the code below:</Text>
      <View style={styles.otpCon}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[
              styles.input,
              textInputStyle,
              {
                backgroundColor: digit !== '' ? colors.BLACK : colors.WHITE,
              },
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            ref={ref => (inputs.current[index] = ref)}
          />
        ))}
      </View>
    </View>
  );
};

export default OTPInput;
