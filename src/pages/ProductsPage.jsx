import React,{useState} from 'react'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import ProductTable from '../components/productPage/ProductTable'
import {motion} from 'framer-motion'
import CategoryDistributionChart from '../components/OverviewPage/CategoryDistributionChart'
import SaleTrendChart from '../components/productPage/SaleTrendChart'
function ProductsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Product" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Products" icon={Package} value={1234} color="#6366F1" />
          <StatCard name="Top Selling" icon={TrendingUp} value={89} color="#8B5CF6" />
          <StatCard name="Low Stock" icon={AlertTriangle} value={23} color="#EC4899" />
          <StatCard name="Total Revenue" icon={DollarSign} value={"$543,210"} color="#10B981" />
        </motion.div>
        {/* Products Table */}
        <ProductTable/>
        {/* Charts */}
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10'>
           <SaleTrendChart/>
           <CategoryDistributionChart/>
         </div>
      </main>
    </div>
  )
}

export default ProductsPage