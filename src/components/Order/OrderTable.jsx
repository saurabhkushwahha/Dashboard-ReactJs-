import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
	{ id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];
function OrderTable() {
  const[searchTerm,setSearchTerm]=useState("")
  const[filterOrder,setFilterOrder]= useState(orderData)
  const handleSearch=(e)=>{
     const term=e.target.value.toLowerCase()
     setSearchTerm(term)
     const filtered=orderData.filter(order=>order.id.toLowerCase().includes(term)||order.customer.toLowerCase().includes(term))
     setFilterOrder(filtered)
  }
  return (
    <motion.div
     className="bg-gray-800 bg-opacity-50 backdrop-blur-md  shadow-lg rounded-xl p-6 border border-gray-700"
     initial={{opacity:0, y:20}}
     animate={{opacity:1,y:0}}
     transition={{delay:0.2}}
    >
      <div className="flex justify-between sm:flex-row flex-col gap-4 sm:gap-0 items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-100">Orders</h1>
          <div className="relative">
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />

             <input type="text"
              placeholder="Search Order.. "
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
             />
          </div>
      </div>
     <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Customer</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Total</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>status</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>date</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {filterOrder.map((order)=>(
               <motion.tr
                 key={order.id}
                 initial={{opacity:0,y:20}}
                 animate={{opacity:1,y:0}}
                 transition={{delay:0.5}}
               >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                  {order.id}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  {order.customer}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  ${order.total.toFixed(2)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											order.status === "Delivered"
												? "bg-green-100 text-green-800"
												: order.status === "Processing"
												? "bg-yellow-100 text-yellow-800"
												: order.status === "Shipped"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{order.status}
									</span>
								</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  {order.date}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Eye size={18} />
									</button>
								</td>
               </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default OrderTable