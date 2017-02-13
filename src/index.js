import "./index.less";
import "./js/casper.js";
import Promise from 'promise-polyfill';
if (!window.Promise) {
	window.Promise = Promise;
}

import "whatwg-fetch";

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
	fetch
};

animatePosts($$('article[data-grid]'));
