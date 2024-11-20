import React from 'react'
import Header from '../components/common/Header'
import { motion } from "framer-motion"
import StatCard from '../components/common/StatCard';
import { CheckCircle, Clock, DollarSignIcon, ShoppingBag } from 'lucide-react';
import DailyOrders from '../components/Order/DailyOrders'
import OrderDistribution from '../components/Order/OrderDistribution';
import OrderTable from '../components/Order/OrderTable';
const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

function OrderPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Order" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Order" icon={ShoppingBag} value={orderStats.totalOrders} color="#6366F1" />
          <StatCard name="Pending Order" icon={Clock} value={orderStats.pendingOrders} color="#F59E0B" />
          <StatCard name="Completed Order" icon={CheckCircle} value={orderStats.completedOrders} color="#10B981" />
          <StatCard name="Total Revenue" icon={DollarSignIcon} value={orderStats.totalRevenue} color="#6366F1" />
        </motion.div>
          {/* Charts */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10'>
            <DailyOrders/>
            <OrderDistribution/>
          </div>
          {/* Table */}
          <OrderTable/>
      </main>
    </div>
  )
}

export default OrderPage