import {useState, useEffect} from 'react';
import {Keyboard, Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

const updateListener = isAndroid ? 'keyboardDidShow' : 'keyboardWillShow';
const resetListener = isAndroid ? 'keyboardDidHide' : 'keyboardWillHide';

export const useIsKeyboardOpen = () => {
  const [is, setIs] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(updateListener, () => {
      setIs(true);
    });
    const keyboardHideListener = Keyboard.addListener(resetListener, () => {
      setIs(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return is;
};
export default useIsKeyboardOpen;
