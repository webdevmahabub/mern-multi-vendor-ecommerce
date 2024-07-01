import { lazy } from "react";    
import Category from "../../views/admin/Category";
const ChatSeller = lazy(()=> import('../../views/admin/ChatSeller'))
const PaymentRequest = lazy(()=> import('../../views/admin/PaymentRequest'))
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'))  
const Orders = lazy(()=> import('../../views/admin/Orders'))    
const Sellers = lazy(()=> import('../../views/admin/Sellers'))
const DeactiveSellers = lazy(()=> import('../../views/admin/DeactiveSellers'))
const SellerRequest = lazy(()=> import('../../views/admin/SellerRequest'))
const SellerDetails = lazy(()=> import('../../views/admin/SellerDetails'))
const OrderDetails = lazy(()=> import('../../views/admin/OrderDetails'))

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element : <Orders/> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/Category',
        element : <Category/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/Sellers',
        element : <Sellers/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/payment-request',
        element : <PaymentRequest/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/deactive-sellers',
        element : <DeactiveSellers/> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/sellers-request',
        element : <SellerRequest/> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/seller/details/:sellerId',
        element : <SellerDetails/> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/chat-sellers',
        element : <ChatSeller/> ,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/order/details/:orderId',
        element : <OrderDetails/> ,
        role : 'admin'
    }
    
]