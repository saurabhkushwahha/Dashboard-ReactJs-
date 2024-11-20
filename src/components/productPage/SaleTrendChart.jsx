import React from 'react'
import { LineChart,Line ,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer } from 'recharts';
import {motion} from 'framer-motion'
const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];
function SaleTrendChart() {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.2}}
    >
      <h1 className='text-lg font-medium mb-4 text-gray-100'>Sale Trend</h1>
       <div className='h-80'>
          <ResponsiveContainer width="100%" height="100%">
             <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3"  stroke="#4B5563"/>
                  <XAxis dataKey={"month"}/>
                  <YAxis stroke="#9ca3af"/>

                  <Tooltip
                    contentStyle={{
                      backgroundColor:"rgba(31,41,55,0.8)",
                      borderColor:"#4B5513",
                      borderRadius:"1.4rem",
                    }}
                    itemStyle={{color:"#E5E7EC"}}
                  />
                  <Line
                   type="monotone"
                   dataKey="sales"
                    strokeWidth={3}
                    dot={{fill:"#6366F1",strokeWidth:8,r:3}}
                    activeDot={{r:8,strokeWidth:3}}
                  />
             </LineChart>
          </ResponsiveContainer>
       </div>
    </motion.div>
  )
}

export default SaleTrendChart