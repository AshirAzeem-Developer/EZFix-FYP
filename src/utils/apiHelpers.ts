import {useEffect, useState} from 'react';
import {setLangData, setLocale, useLocaleStore} from '../store/reducer/locale';
import {Alert, I18nManager} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import api from './api';
import endPoints from '../constants/apiEndPoints';
import {arData, enData} from '../constants/Languages';
// getLocales
export const useLocalizationsRecourses = () => {
  const {langID, rtl, locale} = useLocaleStore();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [lastLanguageId, setLastLanguageId] = useState(-1);
  const [error, setError] = useState('');
  interface LangType {
    ShortName: string;
    resources: any;
    isRTL: boolean;
    LanguageId: number;
    Localizations: any;
    Name: string;
  }
  useEffect(() => {
    // if (langID === lastLanguageId) {
    //   return;
    // }
    // if (loading) return;
    // setLastLanguageId(langID);
    api
      .get<LangType>(`${endPoints.LOCALIZATION_RESOURCES}/${langID}`)
      .then(([response, error]: any) => {
        // setIsLocaleLoaded(true);
        console.log('locale data', JSON.stringify(response, null, 2));
        if (error) {
          // notify.error(error.responseMessage);
          return;
        }
        if (response?.Success) {
          // setLastLanguageId(langID);
          const data = response;
          dispatch(
            setLangData({
              strings: locale == 'AR' ? arData : enData,
              langID: data.Data.LanguageId,
              locale: data.Data.ShortName,
              localizations: data.Data.Localizations,
              langTitle: data.Data.Name,
              rtl: rtl,
            }),
          );
        }
      });
  }, [langID, loading]);
  // return {
  //   loading,
  //   error,
  // };
};
// get language
export type Language = {
  languageID: number;
  languageCode: string;
  languageShortName: string;
  isRTL: boolean;
  languageName: string;
};
export const getLanguages = async () => {
  //   const [res, error] = await api.get(endPoints.LANGUAGES);
  //   if (error) {
  //     Alert.alert('Error', 'Error while fetching languages');
  //     return [];
  //   }
  //   return (res?.data?.data || []) as Language[];
};
