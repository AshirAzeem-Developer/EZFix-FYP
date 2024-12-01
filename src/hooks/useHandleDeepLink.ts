import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Linking} from 'react-native';

const useHandleDeepLink = () => {
  const navigation = useNavigation();
  useEffect(() => {
    Linking.addEventListener('url', ({url}: {url: string}) => {
      const route = url.replace(/.*?:\/\//g, '');
      const routeName = route.split('/')[0];
      navigation.navigate('Notification');
      console.log('Route name:', routeName);
    });
  }, []);
};

export default useHandleDeepLink;
