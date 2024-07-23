import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigators/navigator.root';

//store
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import {KeyboardProvider} from 'react-native-keyboard-controller';
// export const UserContext = React.CreateContext({});

const App = () => {
  //   const [user, setUser] = React.useState({});

  console.log('hello');
  return (
    <>
      {/* <UserContext.Provider value={{user, setUser}}> */}
      <KeyboardProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </KeyboardProvider>
      {/* </UserContext.Provider> */}
    </>
  );
};
export default App;
