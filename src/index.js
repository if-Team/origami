//Stylesheets
import "./index.less";

//Polyfills
/*import Promise from 'promise-polyfill';
if (!window.Promise) {
	window.Promise = Promise;
}*/
import "babel-polyfill";
import "whatwg-fetch";

//Vue
import Vue from "vue";
import App from "./App.vue";

//Libraries
import Clipboard from "clipboard";
import resolveUrl from "resolve-url";

window.Clipboard = Clipboard;

import "./js/prism.js";

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
	v.addEventListener('click', toggleMenu, false);
});

new Clipboard('[data-origami-link]', {
	text: (trigger) => {
		$('#clip-notifier').classList.remove("running");
		setTimeout(() => {
			$('#clip-notifier').classList.add("running");
		}, 10);

		return resolveUrl(trigger.getAttribute('data-origami-link'));
	}
});

window.addEventListener('load', () =>{
	Array.prototype.forEach.call($$('pre[class*="language-"]'), (v) => {
		v.setAttribute('data-lang', v.className.split(' ').find((v) => v.startsWith('language-')));
	});
});
