import notifee, { EventType } from '@notifee/react-native'

notifee.onForegroundEvent(({type,detail}) => {
     switch(type){
        case EventType.ACTION_PRESS:
            if(detail.pressAction?.id === 'see-profile') {
                 console.log('see-profile foreground 🔥')
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