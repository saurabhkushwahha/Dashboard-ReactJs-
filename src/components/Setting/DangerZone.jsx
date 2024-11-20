import React from 'react'
import { Trash } from 'lucide-react'
import {motion} from 'framer-motion'
function DangerZone() {
  return (
    <motion.div
      className='bg-red-900  backdrop-blur-md backdrop-filter shadow-xl rounded-xl border border-red-800 p-6 bg-opacity-50 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className='flex items-center mb-4 '>
        <Trash className="text-red-400 mr-4" size="24" />
        <h2 className='text-xl font-semibold text-gray-100'>Danger Zone</h2>
      </div>
      <p className='text-gray-200 mb-6'>Permanently delete your account and all of your content.</p>
      <button className='text-gray-100 bg-red-700 hover:bg-red-600  font-semibold py-2 px-4 rounded shadow-xl'>Delete Account</button>
    </motion.div>
  )
}

export default DangerZone