import React, { useState } from 'react'
import {motion} from "framer-motion"
import {Search} from 'lucide-react'
const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

function UserTable() {

  const [searchTerm,setSearchTerm]=useState("")
  const[filterUsers,setFilterUsers]= useState(userData)

  const handleSearch=(e)=>{
     const term=e.target.value.toLowerCase()
     setSearchTerm(term)
     const filtered=userData.filter((user)=> user.name.toLowerCase().includes(term))
     setFilterUsers(filtered)
  }

  return (
      <motion.div
       initial={{opacity:0,y:20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.2}}
       className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-5'
      >
        <div className='flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center mb-6'>
           <h1 className='text-xl font-semibold  text-gray-100'>Users List</h1>
           <div className='relative'>
              <input
               type='text'
               placeholder='Search Users....'
               className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
               onChange={handleSearch}
               value={searchTerm}
              />
             <Search className='absolute left-3 top-2.5 text-gray-400 ' size={18}/>
           </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-700'>
            <thead>
               <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>email</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>role</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>status</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>action</th>
               </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {filterUsers.map((user)=>(
                <motion.tr
                  key={user.id}
                  initial={{opacity:0,y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{delay:0.5}}
                >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                  <img src='https://www.refactoringui.com/_next/static/media/book.5380927448c9872170bbc9fc9e5828c4.png' alt='img'
                   className='size-10 rounded-full border border-gray-300 mr-2'
                  />
                  {user.name}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-200'>
                  {user.email}
                </td>
                 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-white'>
                  {user.role}
                  </span>
                </td>
                 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status=="Inactive" ? "bg-red-700":"bg-blue-700"}  text-white`}>
                  {user.status}
                  </span>
                </td>
                 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300 '>
                  <button className='text-indigo-700 hover:text-indigo-300 mr-2'>
                    Edit
                  </button>
                  <button className='text-red-700 hover:text-red-300 mr-2'>
                    Delete
                  </button>
                </td>
                </motion.tr>
              ))}

            </tbody>
          </table>
        </div>
      </motion.div>
  )
}

export default UserTable