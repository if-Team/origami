import "./index.less";

import Promise from 'promise-polyfill';
if (!window.Promise) {
	window.Promise = Promise;
}

import "whatwg-fetch";
import fitvids from "fitvids";

import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './js/routes.js';

Vue.use(VueRouter);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const animatePosts = (posts) => {
	let previousDelay = [0, 0];

	posts.forEach((v) => {
		const i = parseInt(v.getAttribute('data-grid-index'));
		const delay = 0.4 + Math.random() / 2;
		v.style.animationDuration = delay + "s";
		v.style.webkitAnimationDuration = delay + "s";
		v.style.animationDelay = previousDelay[i % 2] + "s";
		v.style.webkitAnimationDelay = previousDelay[i % 2] + "s";
		v.style.animationName = "flip";
		v.style.webkitAnimationName = "flip";
		previousDelay[i % 2] += delay;
	});
};

const nextPage = () => {
	if(!window.origamiPagination) return;
	let url = '';

	if(origamiPagination.context !== 'index'){
		url = `/${origamiPagination.context}/${origamiPagination.data}`;
	}

	url += `/page/${origamiPagination.pagination}`;

	//fetch(ghost.url.api('posts'))
	//fetch
};

if($('#origami-app')){
	const router = new VueRouter({
		mode: 'history',
		base: __dirname,
		routes
	});

	const app = new Vue({
		el: '#app',
		router,
		render(h){
			return h(App);
		}
	});
}

animatePosts($$('article[data-grid]'));
fitvids('.post-content');
