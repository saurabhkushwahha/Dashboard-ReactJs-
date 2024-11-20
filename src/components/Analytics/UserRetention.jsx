import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userRetentionData = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 75 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 50 },
  { name: "Week 5", retention: 45 },
  { name: "Week 6", retention: 40 },
  { name: "Week 7", retention: 38 },
  { name: "Week 8", retention: 35 },
];

function UserRetention() {
  return (
    <motion.div
      className="bg-gray-800 backdrop-blur-md bg-opacity-50 shadow-xl rounded-xl border p-6 border-gray-700 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-xl font-semibold  text-gray-100 mb-4">User Rentation</h1>
      <div style={{ width: "100%", height:300 }}>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={userRetentionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={"name"} />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5513",
                borderRadius: "1.3rem"
              }}
              itemStyle={{
                color: "#E2E7EC"
              }}
            />
            <Legend />
            <Line
              dataKey={"retention"}
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 4, r: 2 }}
              activeDot={{ r: 4, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default UserRetention