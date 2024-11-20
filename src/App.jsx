import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'
import SideBar from './components/SideBar'
import UserPage from './pages/UserPage'
import SalesPage from './pages/SalesPage'
import OrderPage from './pages/OrderPage'
import AnalyticPage from './pages/AnalyticPage'
import Setting from './pages/Setting'
function App() {

  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* BackGround*/}
        <div className='fixed inset-0  z-0'>
           <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
           <div className='absolute inset-0 backdrop-blur-sm'/>
        </div>
       <SideBar/>
        <Routes>
          <Route path='/' element={<OverviewPage/>} />
          <Route path='/productpage' element={<ProductsPage/>} />
          <Route path='/userpage' element={<UserPage/>} />
          <Route path='/salespage' element={<SalesPage/>} />
          <Route path='/orderpage' element={<OrderPage/>} />
          <Route path='/analyticpage' element={<AnalyticPage/>} />
          <Route path='/settingpage' element={<Setting/>} />
          <Route path='*' element={"404 Page Not found"} />
        </Routes>
      </div>
    </>
  )
}

export default App
