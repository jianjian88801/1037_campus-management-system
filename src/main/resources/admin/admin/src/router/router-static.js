import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import tongzhihuifu from '@/views/modules/tongzhihuifu/list'
    import danweileibie from '@/views/modules/danweileibie/list'
    import danwei from '@/views/modules/danwei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuanxiaoguanliyuan from '@/views/modules/yuanxiaoguanliyuan/list'
    import toupiaoxinxi from '@/views/modules/toupiaoxinxi/list'
    import yuanxiao from '@/views/modules/yuanxiao/list'
    import tongzhituisong from '@/views/modules/tongzhituisong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/tongzhihuifu',
        name: '通知回复',
        component: tongzhihuifu
      }
          ,{
	path: '/danweileibie',
        name: '单位类别',
        component: danweileibie
      }
          ,{
	path: '/danwei',
        name: '单位',
        component: danwei
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/yuanxiaoguanliyuan',
        name: '院校管理员',
        component: yuanxiaoguanliyuan
      }
          ,{
	path: '/toupiaoxinxi',
        name: '投票信息',
        component: toupiaoxinxi
      }
          ,{
	path: '/yuanxiao',
        name: '院校',
        component: yuanxiao
      }
          ,{
	path: '/tongzhituisong',
        name: '通知推送',
        component: tongzhituisong
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
