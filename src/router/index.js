import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Grqj from '../views/Grqj'
import Jiadian from '../views/Jiadian'
import Jjcd from '../views/Jjcd'
import Login from '../views/Login'
import Lyou from '../views/Lyou'
import My from '../views/My'
import News from '../views/My/News'
import Set from '../views/My/Set'
import Classify from '../views/Classify'
import A from '../views/Classify/A'
import B from '../views/Classify/B'
import C from '../views/Classify/C'
import D from '../views/Classify/D'
import E from '../views/Classify/E'
import F from '../views/Classify/F'
import Myyp from '../views/Myyp'
import Register from '../views/Register'
import Shopping from '../views/Shopping'
import Sousuo from '../views/Sousuo'
import SousuoResult from '../views/SousuoResult'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',

      component: Home
    },
    {
      path: '/classify',

      component: Classify,
      children: [
        {
          path: 'a',
          component: A
        },
        {
          path: '',
          redirect: 'Classify/A'
        },
        {
          path: 'b',
          component: B
        },

        {
          path: 'c',
          component: C
        },
        {
          path: 'd',
          component: D
        },
        {
          path: 'e',
          component: E
        },
        {
          path: 'f',
          component: F
        }
      ]
    },
    {
      path: '/grqj',

      component: Grqj
    },
    {
      path: '/jiadian',

      component: Jiadian
    },
    {
      path: '/jjcd',

      component: Jjcd
    },
    {
      path: '/login',

      component: Login
    },
    {
      path: '/lyou',

      component: Lyou
    },
    {
      path: '/my',

      component: My,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'set',
          component: Set
        }
      ]
    },
    {
      path: '/myyp',

      component: Myyp
    },
    {
      path: '/register',

      component: Register
    },
    {
      path: '/shopping',

      component: Shopping
    },
    {
      path: '/sousuo',

      component: Sousuo
    },
    {
      path: '/sousuoResult',

      component: SousuoResult
    },
    {
      path: '/',
      redirect: '/home'
    }

  ]

})

export default router
