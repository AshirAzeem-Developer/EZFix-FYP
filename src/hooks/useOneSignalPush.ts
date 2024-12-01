import {useState, useEffect} from 'react';
import {OneSignal} from 'react-native-onesignal';
import {
  addNotification,
  NotificationsType,
} from '../store/reducer/notifications';
import {store} from '../store/store';

export const logoutOneSignal = () => {
  OneSignal.logout();
};

const initOneSignal = async (userId: string) => {
  OneSignal.initialize('1c4b0230-8300-414b-8ecf-6d63cba52903');
  await OneSignal.Notifications.requestPermission(true);
  OneSignal.login(userId);
  showNotification();
};

const showNotification = () => {
  OneSignal.Notifications.addEventListener('click', event => {
    console.log(
      'OneSignal: notification clicked:',
      JSON.stringify(event.notification.additionalData, null, 2),
    );

    const data = event.notification.additionalData;
    console.log('Data: ', data);

    // const notification = {
    //   content: event.notification.body,
    //   title: event.notification.title,
    //   id: event.notification.notificationId,
    //   date: new Date().toISOString(),
    // } as NotificationsType;

    // const dispatch = store.dispatch;

    // dispatch(addNotification(notification));
  });
};

const useOneSignalPush = (userId: string, userToken: string) => {
  const [isOneSignalInitialized, setIsOneSignalInitialized] = useState(false);

  useEffect(() => {
    if (userToken) {
      if (isOneSignalInitialized) return;
      initOneSignal(userId);
      setIsOneSignalInitialized(true);
    }
  }, [userId, userToken]);
};

export default useOneSignalPush;
