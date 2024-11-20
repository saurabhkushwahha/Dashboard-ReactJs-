import React from 'react'
import {motion} from 'framer-motion'
function SettingSection({icon:Icon, title,children}) {
  return (
    <motion.div
     className='bg-transparent  backdrop-blur-md backdrop-filter shadow-xl rounded-xl border border-gray-700 p-6 bg-opacity-50 mb-8'
     initial={{opacity:0,y:20}}
     animate={{opacity:1,y:0}}
     transition={{delay:0.3}}
    >
      <div className='flex items-center mb-4 '>
          <Icon className="text-indigo-400 mr-4" size="24"/>
          <h2 className='text-xl font-semibold text-gray-100'>{title}</h2>
      </div>
     {children}
    </motion.div>
  )
}

export default SettingSection