import Vue from 'vue'
import Router from 'vue-router'
// import Index from '../components/index/index'
import Index from '../components/index/index'
import Product from '../components/product/product'
import News from '../components/news/news'
import Zxfuda from '../components/zxfuda/zxfuda'
import About from '../components/about/about'
import Join from '../components/join/join'
import NewsDetails from '../components/news/newsDetails'

// 安装element-ui 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 安装vue-superslide
// import Vue from 'vue'
import VueSuperSlide from 'vue-superslide'
Vue.use(VueSuperSlide);

// 导入插件axios 挂载属性
import Axios from 'axios'
Vue.prototype.axios = Axios;

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active', //动态class
	routes: [
		{
			path: '/',
			redirect: { name: 'index' }
		},
		{
			path: '/ ',
			name: 'index',
			component: Index
		},
		{
			path: '/product',
			name: 'product',
			component: Product
		},
		{
			path: '/news',
			name: 'news',
			component: News
		},
		{
			path: '/newsDetails',
			name: 'newsDetails',
			component: NewsDetails
		},
		{
			path: '/zxfuda',
			name: 'zxfuda',
			component: Zxfuda
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/join',
			name: 'join',
			component: Join
		}
	]
})

