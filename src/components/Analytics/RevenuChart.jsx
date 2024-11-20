import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];

function RevenuChart() {
  return (
    <motion.div
     className="bg-gray-800 backdrop-blur-md shadow-xl rounded-xl bg-opacity-50 p-6 border border-gray-800 mb-8"
     initial={{opacity:0,y:20}}
     animate={{opacity:1,y:0}}
     transition={{delay:0.1}}
    >
      <h1 className="text-lg font-medium text-gray-100">Revenue vs Target</h1>
      <div style={{width:"100%", height:400}}>
        <ResponsiveContainer>
         <AreaChart data={revenueData}>
             <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"/>
             <XAxis dataKey="month"/>
             <YAxis stroke="#9CA3AF"/>
             <Tooltip
              contentStyle={{
                backgroundColor:"rgba(31,41,55,0.8)",
                borderRadius:"1.3rem",
                borderColor:"#4B5513"
              }}
              itemStyle={{color:"#E5E7EC"}}
             />
             <Legend/>
           <Area type={"monotone"} dataKey="revenue"  stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
           <Area type={"monotone"} dataKey="target"  stroke="#8B5CF6" fill="#8B5CF6"  fillOpacity={0.3}/>

         </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default RevenuChart