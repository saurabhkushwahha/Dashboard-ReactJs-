import React ,{useState}from 'react'
import SettingSection from './SettingSection'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

function Security() {
  const [twoFactorAuthentication,setTwoFactorAuthenticaton]=useState(true)
  return (
    <SettingSection icon={Lock} title="Security">
       <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactorAuthentication}
        onToggle={()=>setTwoFactorAuthenticaton(!twoFactorAuthentication)}
       />
       <button className='text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded shadow-xl mt-2'>Change Password</button>
    </SettingSection>
  )
}

export default Security