import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {enData} from '../../constants/Languages';
type LocaleType = {
  langTitle: string;
  rtl?: boolean;
  strings: typeof enData;
  locale: string;
  langID: number;
  localizations?: any;
};
const initialState: LocaleType = {
  langTitle: 'English',
  rtl: false,
  strings: enData,
  locale: 'en',
  langID: 1,
  localizations: {},
};
export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (
      state,
      action: PayloadAction<{
        langID: number;
        locale: string;
        rtl: boolean;
      }>,
    ) => {
      state.langID = action.payload.langID;
      state.locale = action.payload.locale;
      state.rtl = action.payload.rtl;
    },
    setLangData: (state, action: PayloadAction<LocaleType>) => {
      state.strings = action.payload.strings;
      state.langID = action.payload.langID;
      state.locale = action.payload.locale;
      state.localizations = action.payload.localizations;
      state.langTitle = action.payload.langTitle;
      state.rtl = action.payload.rtl;
    },
  },
});
export const {setLangData, setLocale} = localeSlice.actions;
export default localeSlice.reducer;

export const useLocaleStore = (): LocaleType => {
  const locale = useSelector((state: any) => state.locale);
  return locale;
};
