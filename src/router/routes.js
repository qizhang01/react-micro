import React, { lazy } from 'react'
//业务页面
const DesignerPage = lazy(() => import('../pages/designer/index.js'))

const RouteMaps = [
    {
        name: 'FirstPage',
        path: '/',
        component: DesignerPage,
    },
    // {
    //     name: 'FirstPage',
    //     path: '/cyclone_speedup',
    //     component: DesignerPage,
    // },
    // {
    //     name: 'DesignerPage',
    //     path: '/designer',
    //     component: DesignerPage,
    // },
]

export default RouteMaps
