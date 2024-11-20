import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

function SalesChannelChart() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg  rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h1 className="text-lg font-medium mb-4 text-gray-100">Sales Channel</h1>
      <div className="h-80 w-full">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5513",
                borderRadius: "1.3rem"
              }}
              itemStyle={{ color: "#D5E7EC" }}
            />
            <Legend />

            <Bar dataKey={"value"} fill="#8884d8">
             {SALES_CHANNEL_DATA.map((entry,index)=>(
              <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]} />
             ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default SalesChannelChart