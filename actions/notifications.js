import {AsyncStorage} from 'react-native';
import {Notifications} from 'expo';
const FLASHCARDS_NOTIFICATION_KEY = '@FLASHCARDS_APP:NOTIFICATION';

export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';

export function updateNotification(notification) {
  return {
    type: UPDATE_NOTIFICATION,
    notification,
  };
}

export const handleAddNotification = () => {
  return dispatch => {
    AsyncStorage.getItem(FLASHCARDS_NOTIFICATION_KEY).then(results => {
      const data = JSON.parse(results);
      if (data === null) {
        const localNotification = {
          title: 'FlashCards - Remember to study',
          body: `You did not study today yet, do not forget to Study!`,
          android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
          },
        };

        // let t = new Date();
        // t.setSeconds(t.getSeconds() + 30);
        // const schedulingOptions = {
        //   time: t,
        //   repeat: 'minute',
        // };

        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(8);
        tomorrow.setMinutes(0);
        const schedulingOptions = {
          time: tomorrow,
          repeat: 'day',
        };

        Notifications.scheduleLocalNotificationAsync(
          localNotification,
          schedulingOptions,
        );

        console.log('Criando Notification AsyncStorage');
        AsyncStorage.setItem(
          FLASHCARDS_NOTIFICATION_KEY,
          JSON.stringify(true),
        ).then(() => {
          console.log('Notification Criada');
          dispatch(updateNotification(true));
        });
      }
    });
  };
};

export const handleResetNotification = () => {
  return dispatch => {
    AsyncStorage.removeItem(FLASHCARDS_NOTIFICATION_KEY)
      .then(() => {
        Notifications.cancelAllScheduledNotificationsAsync();
        dispatch(updateNotification(false));
        console.log('Notificação Deletada');
      })
      .then(dispatch(handleAddNotification()));
  };
};
