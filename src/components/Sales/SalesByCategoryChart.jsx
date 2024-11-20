import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
const salesByCategory = [
	{ name: "Electronics", value: 400 },
	{ name: "Clothing", value: 300 },
	{ name: "Home & Garden", value: 200 },
	{ name: "Books", value: 100 },
	{ name: "Others", value: 150 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];
function SalesByCategoryChart() {
  return (
      <motion.div
       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 "
       initial={{opacity:0,y:20}}
       animate={{opacity:1,y:0}}
       transition={{delay:0.3}}
      >
        <h1 className="text-lg font-medium mb-4 text-gray-100">Sales By Category </h1>
        <div style={{width:"100%", height:300}}>
           <ResponsiveContainer width="100%" height="100%">
              <PieChart >
                <Pie
                 data={salesByCategory}
                 cx={"50%"}
                 cy={"50%"}
                 labelLine={true}
                 outerRadius={80}
                 fill="#8884d8"
                 dataKey={"value"}
                 label={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`}
                >
                  {
                    salesByCategory.map((entry,index)=>(
                       <Cell key={index} fill={COLORS[index]}/>
                    ))
                  }
                </Pie>
                 <Tooltip
                  contentStyle={{
                    backgroundColor:"rgba(31,41,55,0.8)",
                    borderColor:"#4B5513",
                    borderRadius:"1.3rem"
                  }}
                  itemStyle={{color:"#E5E7EB"}}
                 />
                 <Legend/>
              </PieChart>
           </ResponsiveContainer>
        </div>
      </motion.div>
  )
}

export default SalesByCategoryChart