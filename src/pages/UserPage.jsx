import React from 'react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';
import { motion } from 'framer-motion'
import UserTable from '../components/UserPage/UserTable';
import UserGrowthChart from '../components/UserPage/UserGrowthChart';
import UserActivityHeatMap from '../components/UserPage/UserActivityHeatMap';
import UserDemographicsCharts from '../components/UserPage/UserDemographicsCharts';
const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

function UserPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Users" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard name="Total Users" icon={UserIcon} value={userStats.totalUsers.toString()} color="#6366F1" />
          <StatCard name="New Users Today" icon={UserPlus} value={userStats.newUsersToday.toString()} color="#10B981" />
          <StatCard name="Active Users" icon={UserCheck} value={userStats.activeUsers.toString()} color="#F59E0B" />
          <StatCard name="Churn Rate" icon={UserX} value={userStats.churnRate.toString()} color="#EF4444" />
        </motion.div>

        <UserTable/>

        {/* Users Charts */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8'>
          <UserGrowthChart />
          <UserActivityHeatMap />
          <UserDemographicsCharts />
        </div>
      </main>
    </div>
  )
}

export default UserPage