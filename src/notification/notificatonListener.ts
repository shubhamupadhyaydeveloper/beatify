import notifee, { EventType } from '@notifee/react-native'
import { navigate } from 'src/navigation/navigaionutils'

notifee.onForegroundEvent(({type,detail}) => {
     switch(type){
        case EventType.ACTION_PRESS:
            if(detail.pressAction?.id === 'see-profile') {
                 navigate('ProfilePage');
            }
     }
})

notifee.onForegroundEvent(({type,detail}) => {
     switch(type){
        case EventType.ACTION_PRESS:
            if(detail.pressAction?.id === 'default') {
                 console.log('this is default')
            }
     }
})

notifee.onBackgroundEvent( async ({type,detail}) => {
     console.log(type)
     console.log(detail)
     if(type == EventType.ACTION_PRESS && detail.pressAction?.id == 'see-profile'){
         console.log("see-profile background 🔥")
     }
})