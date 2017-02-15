<template>
	<article class="grid-item post post-card">
		<header class="post-header">
			<h2 class="post-title"><a :href="url">{{title}}</a></h2>
		</header>
		<hr class="post-divider">
		<template v-if="image">
			<div class="post-image">
				<div class="post-image-filter" :style="imageStyle"></div>
				<div class="post-image-indicator">
					<div class="post-image-indicator-shape"></div>
					<div class="post-image-indicator-buttons">
						<a class="mdi mdi-link force-link" :data-origami-link="url"></a>
						<a class="mdi mdi-file-document" :href="url"></a>
					</div>
				</div>
				<div class="post-image-download">
					<a class="mdi mdi-download" download target="_blank" :href="image">
						download
					</a>
				</div>
				<div class="post-image-original">
					<a class="mdi mdi-image" target="_blank" :href="image">
						original
					</a>
				</div>
				<div class="mobile-image-tools">
					<a class="mdi mdi-download" download target="_blank" :href="image"></a>
					<a class="mdi mdi-image" target="_blank" :href="image"></a>
					<a class="mdi mdi-link force-link" :data-origami-link="url"></a>
					<a class="mdi mdi-file-document" :href="url"></a>
				</div>
			</div>
		</template>
		<section class="post-excerpt">
			<p>{{excerpt}}</p>
		</section>
		<a class="read-more" :href="url"></a>
		<footer class="post-meta">
			<author :author="author"></author>
			<template v-if="tags.length > 0">
				&#20;on&#20;
				<tag v-for="tag in tags" :slug="tag.slug" :name="tag.name"></tag>
			</template>
			<time class="post-date" :datetime="datetime">{{datetext}}</time>
		</footer>
	</article>
</template>

<script>
	import Author from "./Author.vue";
	import Tag from "./Tag.vue";

	import excerpt from "../js/excerpt.js";

	const minlen = (str, len) => (str.length < len) ? minlen('0' + str, len) : str;
	const pad2 = (str) => minlen('' + str, 2);
	const monthString = (num) => [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	][num];

	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			slug: {
				type: String,
				required: true
			},
			image: {},
			excerpt: {
				type: String,
				required: true
			},
			author: {
				type: Object,
				required: true
			},
			tags: {
				type: Array,
				required: true
			},
			index: {
				type: Number,
				required: true
			},
			date: {
				required: true
			}
		},
		computed: {
			datetime(){
				return `${this.date.getFullYear()}-${pad2(this.date.getMonth() + 1)}-${pad2(this.date.getDate())}`;
			},

			datetext(){
				return `${pad2(this.date.getDate())} ${monthString(this.date.getMonth())} ${this.date.getFullYear()}`;
			},

			url(){
				return `/${this.slug}`;
			},

			imageStyle(){
				return `background-image: url("${this.image}")`;
			}
		},
		mounted() {
			this.$el.style.animationDuration = ".5s";
			this.$el.style.webkitAnimationDuration = ".5s";
			this.$el.style.animationDelay = this.index / 2 + "s";
			this.$el.style.webkitAnimationDelay = this.index / 2 + "s";
			this.$el.style.animationName = "flip";
			this.$el.style.webkitAnimationName = "flip";
		},
		components: {
			Author,
			Tag
		}
	}
</script>
