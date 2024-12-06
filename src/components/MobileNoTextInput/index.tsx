import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text, Image} from 'react-native';

// third party
import CountryPicker from 'react-native-country-picker-modal';

// styles
import useStyles from './style';

// local
import images from '../../assets/images';

type MobileNoTextInputProps = {
  // bool
  isShowRightIcon: boolean;

  // string
  placeHolderTxt: string;
  value: string;
  // func
  rightIconAction?: () => void;
  handleOnChange: (text: string) => void;
  validator?: (text: string) => boolean;
  errorText?: string;
};

const MobileNoTextInput: React.FC<MobileNoTextInputProps> = ({
  // text
  placeHolderTxt,
  value,
  // bools
  isShowRightIcon,
  // functions
  rightIconAction,
  handleOnChange,
  //styles objext
  validator,
  errorText,

  ...props
}) => {
  const {styles, sizes, colors} = useStyles();
  const [selectedCountryCode, setSelectedCountryCode] = useState<any>('PK');
  const [selectedCountry, setSelectedCountry] = useState({
    currency: ['PKR'],
    callingCode: ['92'],
    region: 'Asia',
    subregion: 'Southern Asia',
    flag: 'flag-pk',
    name: {
      common: 'Pakistan',
      ces: 'Pákistán',
      deu: 'Pakistan',
      fra: 'Pakistan',
      hrv: 'Pakistan',
      ita: 'Pakistan',
      jpn: 'パキスタン',
      nld: 'Pakistan',
      por: 'Paquistão',
      rus: 'Пакистан',
      slk: 'Pakistan',
      spa: 'Pakistán',
      fin: 'Pakistan',
      est: 'Pakistan',
      zho: '巴基斯坦',
      pol: 'Pakistan',
      urd: 'پاکستان',
      kor: '파키스탄',
    },
  });

  const onSelect = (country: any) => {
    // console.log('===>', country);
    setSelectedCountryCode(country.cca2);
    setSelectedCountry(country);
  };

  const handleTextChange = (text: string) => {
    // Remove non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
    handleOnChange(numericText);
  };

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
        <View style={styles.leftIconCont}>
          <CountryPicker
            countryCodes={['PK']}
            withFlag={true}
            withFilter={true}
            withCallingCode={true}
            countryCode={selectedCountryCode}
            onSelect={onSelect}
            withModal={true}
            visible={false}
            withCallingCodeButton={true}
          />
        </View>

        {/* TextInput  */}

        <TextInput
          style={[styles.textInp]}
          placeholder={placeHolderTxt}
          placeholderTextColor={colors.LIGHT_GRAY200}
          value={value}
          onChangeText={text => {
            setShowError(true);
            if (validator) {
              if (validator(text)) {
                setError('');
              } else {
                setError(errorText || 'Invalid Input');
              }
            }

            if (handleTextChange) {
              handleTextChange(text);
            }
          }}
          keyboardType="number-pad"
        />
        {/* TextInput end */}

        {/* right icon cont */}
        {isShowRightIcon ? (
          <TouchableOpacity
            activeOpacity={1}
            style={styles.rightIconCon}
            onPress={rightIconAction}>
            <Image source={images.cross} style={styles.rightIcon} />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyRightIconCont} />
        )}
        {/* right icon cont end */}
      </View>
    </>
  );
};

export default MobileNoTextInput;
