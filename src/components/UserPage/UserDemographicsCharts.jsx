import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

function UserDemographicsCharts() {
  return (
    <motion.div
     className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 "
     initial={{opacity:0,y:20}}
     animate={{opacity:1,y:0}}
     transition={{delay:0.3}}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">Demographic Charts</h1>
      <div className="h-80">
         <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                 <Pie
                 data={userDemographicsData}
                 cx={"50%"}
                 cy={"50%"}
                  labelLine
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey={"value"}
                  label={({name,percent})=>`${name} ${(percent*100).toFixed(0)}%`}
                 >
                    {userDemographicsData.map((entry,index)=>(
                       <Cell key={index} fill={COLORS[index]}/>
                    ))}
                 </Pie>
                 <Tooltip
                  contentStyle={{
                    backgroundColor:"rgba(31,41,55,0.8)",
                    borderColor:"#4B5513",
                    borderRadius:"1.4rem",
                  }}
                 />
                 <Legend/>

              </PieChart>
         </ResponsiveContainer>
      </div>

    </motion.div>
  )
}

export default UserDemographicsCharts