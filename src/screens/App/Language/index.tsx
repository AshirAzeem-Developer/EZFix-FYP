import React, {useState} from 'react';
import {
  FlatList,
  I18nManager,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import LangSelectItem from '../../../components/LangSelectItem';

import {
  setLangData,
  setLocale,
  useLocaleStore,
} from '../../../store/reducer/locale';
import {useDispatch} from 'react-redux';
import RNRestart from 'react-native-restart';
import useStyles from './style';
import icons from '../../../assets/icons';
import {ParentView} from '../../../components/common/ParentView/ParentView';
import Header from '../../../components/Header';
import images from '../../../assets/images';
type SelectLangItem = {
  langID: number;
  title: string;
  icon: any;
  rtl: boolean;
  locale: string;
};
export default function Language({navigation}: any) {
  const {styles, colors, sizes} = useStyles();
  const dispatch = useDispatch();
  const {strings, langID, locale, rtl, langTitle} = useLocaleStore();
  const languages = [
    {
      langID: 1,
      title: 'English',
      icon: icons.ENG_ICON,
      rtl: false,
      locale: 'EN',
    },
    {
      langID: 2,
      title: 'Urdu',
      icon: icons.URDU_ICON,
      rtl: true,
      locale: 'UR',
    },
  ];
  const [selectedLang, setSelectedLang] = useState<SelectLangItem>({
    langID: langID,
    title: langTitle,
    icon: locale == 'UR' ? icons.URDU_ICON : icons.ENG_ICON,
    rtl: rtl ? rtl : false,
    locale: locale,
  });
  const handleChangeLang = (lang: SelectLangItem) => {
    if (locale == lang.locale) {
      console.log('Already selected', locale, lang.locale);
      return;
    }

    // console.log('Locale To Sent ====> ', lang.langID, lang.locale, lang.rtl);

    setSelectedLang(lang);
    dispatch(
      setLocale({langID: lang.langID, locale: lang.locale, rtl: lang.rtl}),
    );
    I18nManager.forceRTL(lang.rtl);
    setTimeout(() => {
      RNRestart.restart();
    }, 1000);
  };
  return (
    <ParentView
      //   backgroundColor={theme.colors.background}
      //   barStyle={'dark-content'}
      style={{}}>
      <Header
        heading="Language"
        isLeftShow={true}
        leftIconAction={() => navigation.goBack()}
      />

      <View style={styles.langIconContainer}>
        <Image
          source={images.LANG_IMAGE}
          style={{
            width: sizes.WIDTH * 0.45,
            height: sizes.WIDTH * 0.45,
            marginHorizontal: sizes.WIDTH * 0.02,
            marginVertical: sizes.HEIGHT * 0.04,
          }}
        />
      </View>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>Choose your language</Text>
      </View>
      <FlatList
        data={languages}
        extraData={[selectedLang]}
        // keyExtractor={(item, index) => index.toString() + 'language'}
        renderItem={({item}) => (
          <LangSelectItem
            title={item.title}
            langIcon={item.icon}
            onSelect={() => {
              handleChangeLang(item);
            }}
            selected={item.locale == selectedLang.locale}
          />
        )}
      />
    </ParentView>
  );
}
