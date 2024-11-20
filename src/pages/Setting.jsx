import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/Setting/Profile'
import Notification from '../components/Setting/Notification'
import Security from '../components/Setting/Security'
import ConnectedAccount from '../components/Setting/ConnectedAccount'
import DangerZone from '../components/Setting/DangerZone'
function Setting() {
  return (
     <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Settings"/>
       <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
             <Profile/>
             <Notification/>
             <Security/>
             <ConnectedAccount/>
             <DangerZone/>
       </main>
     </div>
  )
}

export default Setting