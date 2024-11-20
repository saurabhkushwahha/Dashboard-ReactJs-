import React ,{useState}from 'react'
import SettingSection from './SettingSection'
import { HelpCircle } from 'lucide-react'

export default function ConnectedAccount() {
  const[connectedAccount,setConnectedAccount]=useState([
    {
      id:1,
      name:"Google",
      connected:true,
       icon:'/google.png',
    },
    {
      id:2,
      name:"Facebook",
      connected:true,
      icon:'/facebook.svg',
    },
    {
      id:3,
      name:"Twitter",
      connected:false,
      icon:'/x.png',
    }

  ])

  return (
    <SettingSection  icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccount.map((account)=>(
         <div key={account.id} className='flex items-center justify-between py-3'>
          <div className='flex gap-2'>
           <img src={account.icon} alt="Social imag" className='size-6 rounded-full object-cover mr-2' />
           <span className='text-white '>{account.name}</span>
          </div>
           <button
            onClick={()=>{
               setConnectedAccount(
                 connectedAccount.map((acc)=>{
                    if(acc.id===account.id){
                      return {
                         ...acc,
                         connected:!acc.connected,
                      }
                    }
                    return acc
                 })
               )
            }}
           className={`py-1 px-4 rounded ${account.connected ? "bg-green-500 hover:bg-green-700" :"bg-gray-500 hover:bg-gray-400"} font-semibold shadow-xl transition duration-200`}>{account.connected ?"connected" : "connect"}</button>
         </div>
      ))}

    </SettingSection>
  )
}
