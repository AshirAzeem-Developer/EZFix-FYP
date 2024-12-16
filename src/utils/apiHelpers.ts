import {useEffect, useState} from 'react';
import {setLangData, setLocale, useLocaleStore} from '../store/reducer/locale';
import {Alert, I18nManager} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import api from './api';
import endPoints from '../constants/apiEndPoints';
import {arData, enData} from '../constants/Languages';
import ErrorToastMessage from '../components/AppToast/ErrorToastMessage';
import {getResourceLocalization} from './ApiCall';
// getLocales
export const useLocalizationsRecourses = () => {
  const {langID, rtl, locale} = useLocaleStore();
  const dispatch = useDispatch();
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

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
    // api
    //   .get<LangType>(
    //     `${endPoints.LOCALIZATION_RESOURCES}?filters[language_id][$eq]=${langID}`,
    //   )
    //   .then(([response, error]: any) => {
    //     // setIsLocaleLoaded(true);
    //     console.log('locale data', JSON.stringify(response, null, 2));
    //     if (error) {
    //       ErrorToastMessage('Error while fetching localizations');
    //       return;
    //     }
    //     if (response?.Success) {
    //       // setLastLanguageId(langID);
    //       const data = response;

    //     }
    //   });

    console.log('---------sssssssssssss------------>', rtl, userToken);

    getResourceLocalization(rtl ? 2 : 1, userToken)
      .then(res => {
        if (res) {
          console.log(
            'Response of Localization Api ============ >> ',
            JSON.stringify(res.data, null, 2),
          );
          dispatch(
            setLangData({
              strings: res?.data?.attributes?.resources,
              langID: res?.data?.attributes?.language_id,
              locale: res?.data?.attributes?.LangShortName,
              localizations: res?.data?.attributes?.resources,
              langTitle: res?.data?.attributes?.language_name,
              rtl: rtl,
            }),
          );
        }
      })
      .catch(err => {
        console.log(
          'Error in fetching localization data',
          JSON.stringify(err, null, 2),
        );
      });
  }, [langID, userToken]);
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
