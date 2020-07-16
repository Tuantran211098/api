import React from 'react'
import Ecommunce from './modules/e-communce/index'
import Feature from './modules/Features/index'
import NotFound  from './modules/NotFound/index'

const Routes = [
    {
        path:'/',
        exact:true,
        main:()=><Ecommunce/>
    },
    {
        path:'/feature',
        exact:false,
        main:()=><Feature/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFound/>
    }
];
export default Routes