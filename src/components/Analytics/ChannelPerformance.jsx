import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];

function ChannelPerformance() {
  return (
    <motion.div
     className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-xl rounded-xl p-6 border border-gray-700"
     initial={{opacity:0,y:20}}
     animate={{opacity:1,y:0}}
     transition={{delay:0.3}}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">Channel Performance</h1>
      <div style={{width:"100%", height:300}}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
             <Pie
               data={channelData}
               cx={"50%"}
               cy={"50%"}
               labelLine={true}
               fill="#8884d8"
               dataKey="value"
               label={({name,percent})=>`${name}${(percent*100).toFixed(0)}%`}
             >
             {channelData.map((entry,index)=>(
                 <Cell key={index} fill={COLORS[index]}/>
             ))}
             </Pie>
           <Tooltip
            contentStyle={{
               backgroundColor:"rgba(31,41,55,0.8)",
               borderColor:"#4B5513",
               borderRadius:"1.2rem"
            }}
           />
          <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ChannelPerformance