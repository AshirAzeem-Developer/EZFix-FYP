import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigators/navigator.root';

//store
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import SuccessToastMessage from './src/components/AppToast/SuccessToastMessage';
import ErrorToastMessage from './src/components/AppToast/ErrorToastMessage';
import WarningToastMessage from './src/components/AppToast/WarningToastMessage';
import Toast from 'react-native-toast-message';
// export const UserContext = React.CreateContext({});

const App = () => {
  //   const [user, setUser] = React.useState({});

  console.log('hello');
  const toastConfig = {
    success: (props: any) => <SuccessToastMessage toastProps={props} />,
    error: (props: any) => <ErrorToastMessage toastProps={props} />,
    warning: (props: any) => <WarningToastMessage toastProps={props} />,
  };
  return (
    <>
      {/* <UserContext.Provider value={{user, setUser}}> */}
      <KeyboardProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
            <Toast config={toastConfig} position={'top'} />
          </PersistGate>
        </Provider>
      </KeyboardProvider>
      {/* </UserContext.Provider> */}
    </>
  );
};
export default App;
