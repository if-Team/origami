//Stylesheets
import "./index.less";

//Polyfills
import Promise from 'promise-polyfill';
if (!window.Promise) {
	window.Promise = Promise;
}
import "whatwg-fetch";

//Vue
import Vue from "vue";
import App from "./App.vue";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

if($('#origami-posts')){
	new Vue({
		el: '#origami-posts',
		render(h){
			return h(App);
		}
	});
}

const toggleClass = (el, className) => {
	if(el.classList.contains(className))
		el.classList.remove(className);
	else
		el.classList.add(className);

};

const toggleMenu = () => {
	toggleClass(document.body, 'nav-opened');
};

[$('.menu-button'), $('.body-opacity'), $('.nav-closer')].forEach((v) => {
	v.addEventListener('click', toggleMenu);
});
