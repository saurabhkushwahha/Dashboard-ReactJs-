import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

function ProductPerformance() {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700"
     initial={{opacity:0,y:20}}
     animate={{opacity:1,y:0}}
     transition={{delay:0.2}}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">Product Performance</h1>
      <div style={{width:"100%", height:300}}>
         <ResponsiveContainer>
           <BarChart data={productPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name"  stroke="#9CA3AF"/>
             <YAxis stroke="#9CA3AF"/>
              <Bar dataKey="sales" fill="#8B5CF6" />
              <Bar dataKey="revenue" fill="#10B981"/>
              <Bar dataKey="profit" fill="#F59E0B" />
           </BarChart>
         </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ProductPerformance