import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  Text,
} from 'react-native';

// styles
import useStyles from './style';

// local
import {InputMode} from '../../constants/enums/inputFieldEnum';
import {Image} from 'react-native-elements';

type TextInputCustomProps = {
  leftIcon?: any;
  rightIcon?: any;
  placeHolderTxt: string;
  value: string;
  isShowRightIcon?: boolean;
  isPassword?: boolean;
  //
  inputMode?: InputMode;
  // functions
  leftIconAction?: () => void;
  rightIconAction?: () => void;
  handleOnChange: (text: string) => void;
  // styles
  textInputStyle?: StyleProp<TextStyle>;
  leftContStyle?: StyleProp<ViewStyle>;
  rightContStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;

  errorHandler?: {
    errorText: string; // error message
    validator: (text: string) => boolean; // return true if no error
  }[];
};

const TextInputCustom: React.FC<TextInputCustomProps> = ({
  // icons
  leftIcon,
  rightIcon,
  // text
  placeHolderTxt,
  value,
  //
  inputMode = InputMode.Text,
  // bools
  isPassword,
  isShowRightIcon,
  // functions
  leftIconAction,
  rightIconAction,
  handleOnChange,
  //styles objext
  textInputStyle,
  leftContStyle,
  rightContStyle,
  onFocus,
  errorHandler,

  ...props
}) => {
  const {styles, sizes, colors} = useStyles();
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  return (
    <>
      <Text
        style={{
          color: 'red',
          textAlign: 'right',
          paddingEnd: sizes.WIDTH * 0.05,
        }}>
        {showError && error}
      </Text>
      <View
        style={[
          styles.container,
          value.length > 0 ? styles.blackBottomBorder : styles.greyBottomBorder, // TODO BIND THIS WITHN INPUT LENGTH
        ]}>
        {/* left icon cont */}
        {leftIcon && (
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.leftIconCon, leftContStyle]}>
            <Image source={leftIcon} style={styles.leftIcon} />
          </TouchableOpacity>
        )}

        {/* left icon cont end */}

        {/* TextInput  */}

        <TextInput
          style={[
            styles.textInp,
            {width: !leftIcon ? '80%' : '70%'},
            textInputStyle,
          ]}
          secureTextEntry={isPassword}
          placeholder={placeHolderTxt}
          placeholderTextColor={colors.LIGHT_GRAY}
          inputMode={inputMode}
          value={value}
          onChangeText={text => {
            setShowError(true);

            if (errorHandler) {
              let errors = errorHandler
                .filter(item => !item.validator(text))
                .map(item => item.errorText);

              if (errors.length > 0) {
                setError(errors[errors.length - 1]);
              } else {
                setError('');
              }
            }
            if (handleOnChange) {
              handleOnChange(text);
            }
          }}
          onFocus={() => {
            if (onFocus) {
              onFocus();
            }
          }}
        />
        {/* TextInput end */}

        {/* right icon cont */}
        {isShowRightIcon ? (
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.rightIconCon, rightContStyle]}
            onPress={rightIconAction}>
            <Image source={rightIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyRightIconCont} />
        )}
        {/* right icon cont end */}
      </View>
    </>
  );
};

export default TextInputCustom;
