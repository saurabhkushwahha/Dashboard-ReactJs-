import React from 'react'
import {PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend} from 'recharts'
import {motion} from 'framer-motion'

const orderStatusData = [
	{ name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

function OrderDistribution() {
  return (
      <motion.div
       className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700'
       initial={{opacity:0,y:20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.3}}
      >
        <h1 className='text-lg font-medium mb-4 text-gray-100'>Order Distribution</h1>
        <div style={{width:"100%", height:300}}>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                 <PieChart>
                    <Pie
                     data={orderStatusData}
                     cx={"50%"}
                     cy={"50%"}
                     labelLine={true}
                     outerRadius={80}
                     fill='#8884d8'
                     dataKey="value"
                     label={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`}
                    >
                      {orderStatusData.map((entry,index)=>(
                         <Cell key={index} fill={COLORS[index]}/>
                      ))}
                    </Pie>
                    <Tooltip
                     contentStyle={{
                      backgroundColor:"rbga(31,41,55,0.8)",
                      borderColor:"#4B5513",
                      borderRadius:"1.3rem"
                     }}
                    />
                    <Legend/>
                 </PieChart>
            </ResponsiveContainer>
        </div>
      </motion.div>
  )
}

export default OrderDistribution