import { lazy } from "react";


const routes = [{
    path: '/admin',
    title: 'Admin',
    exact: true,
    component: lazy(() => import('./pages/Admin'))

},
{
    path: '/admin/list',
    title: 'List',
    exact: true,
    component: lazy(() => import('./pages/List'))

}]

export default routes