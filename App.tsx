import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootNavigator} from './src/navigators/stack.navigator';

//store
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
// export const UserContext = React.CreateContext({});

const App = () => {
  //   const [user, setUser] = React.useState({});

  console.log('hello');
  return (
    <>
      {/* <UserContext.Provider value={{user, setUser}}> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      {/* </UserContext.Provider> */}
    </>
  );
};
export default App;
