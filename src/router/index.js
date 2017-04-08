import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/aa'
import Hello from '@/components/Hello'

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a3 = a.map( s => s.length );

Vue.use(Router)

export default new Router({
	routes: [{
            path: '',
            redirect: '/home'
        },
        {
		path: '/home',
		name: 'home',
		component: home,
		children: [{
                path: '/', //食品详情页
                redirect: '/home/foodDetail'
            },{
                path: 'foodDetail', //食品详情页
                component: Hello,
            }]
	}]
})
