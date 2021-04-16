const menuRouter=[
      {
          path: '/home',
          name: 'home',
          title:'首页',
          component: () => import('@v/home'),
      },
      {
          path:'/real-time',
          name:'real-time',
          title: '实时推送',
          component: () => import('@v/real-time'),
      },
      {
        path:'/echarts',
        name:'echarts',
        title: '日线图',
          hidePage:true,
        component: () => import('@v/echarts'),
      },
      {
        path:'/macd',
        name:'macd',
        title: 'MACD',
        component: () => import('@v/macd'),
      }
]
const defaultRouter = [

]
export  {menuRouter,defaultRouter}

