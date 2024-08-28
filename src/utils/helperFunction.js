import Toast from 'react-native-toast-message';

export const showSuccess = (title, message) => {
  Toast.show({
    type: 'success',
    text1: title,
    text2: message,
    autoHide: true,
    visibilityTime: 2000,
  });
};

export const showWarning = (title, message) => {
  Toast.show({
    type: 'warning',
    text1: title,
    text2: message,
    autoHide: true,
    visibilityTime: 2000,
  });
};

export const showError = (title, message) => {
  Toast.show({
    type: 'error',
    text1: title,
    text2: message,
    autoHide: true,
    visibilityTime: 2000,
  });
};
