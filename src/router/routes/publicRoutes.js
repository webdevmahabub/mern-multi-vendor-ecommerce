import { lazy } from "react";
import AdminLogin from "../../views/auth/AdminLogin";

const Login = lazy(()=> import('../../views/auth/Login'))
const Register = lazy(()=> import('../../views/auth/Register'))

const publicRoutes = [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path : '/admin/login',
        element : <AdminLogin/>
    }
]

export default publicRoutes;