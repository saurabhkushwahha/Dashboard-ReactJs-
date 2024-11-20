import React, { useState } from 'react'
import { BarChart2, DollarSign, Settings, Users, ShoppingBag, ShoppingCart, TrendingUp, Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SIDE_ITEMS = [
  { name: "Overview", icon: BarChart2, color: '#6366f1', path: '/' },
  { name: "Product", icon: ShoppingBag, color: "#8B5CF6", path: '/productpage' },
  { name: "Users", icon: Users, color: "#EC4899", path: '/userpage' },
  { name: "Sales", icon: DollarSign, color: "#10B981", path: '/salespage' },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", path: '/orderpage' },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", path: '/analyticpage' },
  { name: "Settings", icon: Settings, color: "#6EE7B7", path: '/settingpage' }
]

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <motion.div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='p-2 rounded-full hover:bg-gray-700 transition-all max-w-fit'
        >
          <Menu size={24} />
        </motion.button>
        <nav className='mt-8 flex-grow'>
          {SIDE_ITEMS.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-all mb-2'
              >
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                <AnimatePresence>
                  {
                    isSidebarOpen && (
                       <motion.div
                         className='ml-5 whitespace-nowrap'
                         initial={{opacity:0, width:0}}
                         animate={{opacity:1,width:"auto"}}
                         exit={{opacity:0,width:0}}
                         transition={{duration:0.2,delay:0.3}}
                       >
                        {item.name}
                       </motion.div>
                    )
                  }
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}

export default SideBar