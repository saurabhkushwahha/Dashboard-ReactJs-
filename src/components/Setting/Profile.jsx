import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react'

function Profile() {
 return <SettingSection icon={User} title={"Profile"}>
     <div className='flex flex-col sm:flex-row items-center mb-8'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1AVfdc2ZdDztndLP36f8HHnstIuEyj7Ss8X2yumVvuEaqOYJR-YbvjnpJp9VY4IXTSw&usqp=CAU" alt="Profile"
       className='rounded-full  w-20 h-20 object-cover mr-4'
      />

      <div>
            <h1 className='text-xl font-medium text-gray-100 '>Saurabh kushwaha</h1>
            <p className='text-gray-400 '>saurabh@gmail.com</p>
      </div>

     </div>

     <button className='text-sm px-4 py-2 text-gray-100 bg-indigo-600 hover:bg-indigo-700 font-bold  w-full  rounded shadow-xl transition duration-200 sm:w-auto '>Edit Profile</button>
 </SettingSection>
}

export default Profile