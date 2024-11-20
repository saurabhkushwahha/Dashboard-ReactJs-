import { useState } from 'react'
import { Bell } from 'lucide-react'
import SettingSection from './SettingSection'
import ToggleSwitch from './ToggleSwitch'

function Notification() {
 const [notification, setNotification]= useState({
   push:true,
   email:false,
   sms:true,
 })

  return <SettingSection icon={Bell} title={"Notification"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notification.push}
        onToggle={()=>setNotification({...notification,push:!notification.push})}
      />
      <ToggleSwitch
       label={"Email"}
       isOn={notification.email}
       onToggle={()=>setNotification({...notification,email:!notification.email})}
      />
      <ToggleSwitch
       label={"SMS"}
       isOn={notification.sms}
       onToggle={()=>setNotification({...notification,sms:!notification.sms})}
      />
  </SettingSection>

}

export default Notification
