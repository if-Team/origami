export default [
	{path: '/', component: require('../pages/Home.vue')},
	{path: '/page/:page', component: require('../pages/Index.vue')},
	{path: '/tag/:slug', component: require('../pages/Tag.vue')},
	{path: '/tag/:slug/page/:page', component: require('../pages/Tag.vue')},
	{path: '/author/:slug', component: require('../pages/Author.vue')},
	{path: '/author/:slug/page/:page', component: require('../pages/Author.vue')},
	{path: '*', component: require('../pages/NotFound.vue')}
];
