import React from 'react'
import Header from '../components/common/Header'
import OverViewCard from '../components/Analytics/OverViewCard'
import RevenuChart from '../components/Analytics/RevenuChart'
import ChannelPerformance from '../components/Analytics/ChannelPerformance'
import ProductPerformance from '../components/Analytics/ProductPerformance'
import UserRetention from '../components/Analytics/UserRetention'
import CustomerSegmentation from '../components/Analytics/CustomerSegmentation'
import AIPoweredInsight from '../components/Analytics/AIPoweredInsight'
function AnalyticPage() {
  return (
   <div className='flex-1 overflow-auto relative z-10'>
     <Header title="Analytics"/>
     <main
      className='max-w-7xl mx-auto py-6 px-4  lg:px-8'
     >
      <OverViewCard/>
      <RevenuChart/>

     <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
       <ChannelPerformance/>
       <ProductPerformance/>
       <UserRetention/>
       <CustomerSegmentation/>
     </div>
     <AIPoweredInsight/>
     </main>
   </div>
  )
}

export default AnalyticPage