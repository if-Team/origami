<template>
	<div>
		<div class="post-list">
			<div class="post-column" v-if="!tablet">
				<template v-for="post in previousLeft">
					<post
						v-if="post"
						:title="post.title"
						:slug="post.slug"
						:excerpt="post.excerpt"
						:author="post.author"
						:image="post.image"
						:tags="post.tags"
						:url="post.url"
						:date="new Date(post.published_at)"
						:index="post.index">
					</post>
				</template>
			</div>

			<div class="post-column" v-if="!tablet">
				<template v-for="post in previousRight">
					<post
						v-if="post"
						:title="post.title"
						:slug="post.slug"
						:excerpt="post.excerpt"
						:author="post.author"
						:image="post.image"
						:tags="post.tags"
						:url="post.url"
						:date="new Date(post.published_at)"
						:index="post.index">
					</post>
				</template>
			</div>

			<div class="post-column full-column" v-if="tablet">
				<template v-for="post in posts">
						<post
							v-if="post"
							:title="post.title"
							:slug="post.slug"
							:excerpt="post.excerpt"
							:author="post.author"
							:image="post.image"
							:tags="post.tags"
							:url="post.url"
							:date="new Date(post.published_at)"
							:index="post.index">
						</post>
				</template>
			</div>
		</div>

		<pagination
			:pagination="pagination"
			:pages="pages"
			:context="context"
			:context-data="contextData"
			:load-next="nextPage">
		</pagination>

		<div id="clip-notifier">Copied to clipboard!</div>
	</div>
</template>

<script>
	import excerpt from "../js/excerpt.js";
	import fitvids from "fitvids";

	import Pagination from "./Pagination.vue";
	import Post from "./Post.vue";

	export default {
		components: {
			Pagination,
			Post
		},

		data(){
			return {
				posts: [],
				pagination: 0,
				pages: 1,
				previousLeft: [],
				previousRight: [],
				tablet: false
			};
		},

		props: {
			context: {
				type: String,
				required: true
			},
			contextData: {
				type: String
			},
			limit: {
				type: Number,
				required: true
			}
		},

		/*computed: {
			tablet(){
				return window.innerWidth <= 900;
			}
		},*/

		mounted(){
			fitvids(".post-content");
			this.nextPage();

			window.addEventListener('resize', () => {
				this.recalculateTablet();
			});

			this.recalculateTablet();
		},

		methods: {
			recalculateTablet(){
				this.tablet = window.innerWidth <= 900;
			},

			recalculate(){
				let leftHeight = 0;
				let rightHeight = 0;

				const newLeft = this.previousLeft.slice();
				const newRight = this.previousRight.slice();
				this.posts.forEach((v) => {
					const height = this.calculatePostHeight(v);
					if(newLeft.find((_v) => _v.id === v.id)){
						leftHeight += height;
					}else if(newRight.find((_v) => _v.id === v.id)){
						rightHeight += height;
					}else{
						if(leftHeight > rightHeight){
							newRight.push(v);
							rightHeight += height;
						}else{
							newLeft.push(v);
							leftHeight += height;
						}
					}
				});

				this.previousLeft = newLeft;
				this.previousRight = newRight;
			},

			calculatePostHeight(post){
				//Roughly calculating post height.
				//Approximate height is okay
				//because it is onlyused when classifing columns.

				let height = 50;
				if(post.image) height += 100;
				height += Math.floor(post.title.length / (window.innerWidth / 8)) * 30;
				height += post.excerpt.length * 30 / (window.innerWidth / 8);

				return height;
			},

			nextPage(){
				const query = {
					limit: this.limit,
					page: this.pagination + 1,
					include: "author,tags"
				};

				if(this.context === 'tag' || this.context === 'author')
					query.filter = `${this.context}:${this.contextData}`;

				fetch(ghost.url.api('posts', query))
				.then((v) => v.json())
				.then((v) => {
					this.pagination = v.meta.pagination.page;
					this.pages = v.meta.pagination.pages;
					this.posts.push(...v.posts.map((v, k) => {
						v.index = k;
						v.excerpt = excerpt(v.html, {words: 26})
						return v;
					}));
					this.recalculate();
				});
			}
		}
	}
</script>
