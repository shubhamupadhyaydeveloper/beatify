import notifee, { AndroidStyle } from '@notifee/react-native'

type displayType = {
  title: string;
  message: string;
  image: string;
  categoryId: string;
};

export const displayNotification = async ({
  title,
  message,
  image,
  categoryId,
}: displayType) => {
   const channelId = await notifee.createChannel({
     id  : "default",
     name : "default channel"
   })

   await notifee.displayNotification({
      title : title,
      body : message,
      android : {
        largeIcon : image,
        channelId : channelId, onlyAlertOnce : true,
        actions : [
           {
             title : "okay",
             pressAction : {
               id : categoryId,
               launchActivity : "default"
             }
           }
        ]
      }
   })
};

export const addBadgeCount = async () => {
    notifee.setBadgeCount(1).then(() => console.log('badge count'))
}

export const setCategory = async () => {
   await notifee.setNotificationCategories([
      {
         id : "see-profile",
         actions : [
            {
               id : 'see-profile',
               title : 'okay',
               foreground : true
            }
         ]
      },
   ])
}