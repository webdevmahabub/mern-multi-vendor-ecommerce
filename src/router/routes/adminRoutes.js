import { lazy } from "react";    
import Category from "../../views/admin/Category";
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'))  
const Orders = lazy(()=> import('../../views/admin/Orders'))    
const Sellers = lazy(()=> import('../../views/admin/Sellers'))

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

]