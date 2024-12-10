import React from 'react';
import RootNavigator from './src/navigators/navigator.root';

//store
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import ToastHandler from './src/components/Main/ToastHandler';
import useOneSignalPush from './src/hooks/useOneSignalPush';
import useHandleDeepLink from './src/hooks/useHandleDeepLink';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <KeyboardProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <DataWrapper
              children={<RootNavigator />}
              key={Math.random().toString()}
            />
            {/* <RootNavigator /> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </KeyboardProvider>
  );
};
export default App;

const DataWrapper = ({children}: {children: React.ReactNode}) => {
  const userId = useSelector((state: any) => state?.user?.user?.user?.id);
  const userToken = useSelector((state: any) => state?.user?.user?.jwt);

  useOneSignalPush(userId?.toString(), userToken);
  useHandleDeepLink();
  return (
    <>
      {children}
      <ToastHandler />
    </>
  );
};
