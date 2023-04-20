import { lazy } from "react";


const routes = [{
    path: '/admin',
    title: 'Admin',
    exact: true,
    component: lazy(() => import('./pages/Admin'))

}]

export default routes