<template>
	<nav class="pagination" role="navigation">
		<a class="older-posts pagination-wrapper" v-if="next" @click="load" :href="nexturl">
			<span class="page-number">{{pagination}} / {{pages}}</span>
		</a>
	</nav>
</template>

<script>
	export default {
		props: {
			pagination: {
				type: Number,
				required: true
			},
			pages: {
				type: Number,
				required: true
			},
			context: {
				type: String,
				required: true
			},
			loadNext: {
				type: Function,
				required: true
			},
			contextData: {
				type: String
			}
		},

		methods: {
			pageUrl(page){
				let baseUrl = '';
				if(this.context === 'author' || this.context === 'tag')
					baseUrl = `/${this.context}/${this.contextData}`;

				if(this.page === 1) return baseUrl;
				return `${baseUrl}/page/${page}`;
			}
		},

		data(){
			return {
				load: (ev) => {
					ev.preventDefault();
					this.loadNext();
				}
			}
		},

		computed: {
			next(){
				return this.pagination < this.pages;
			},

			/*prev(){
				return 1 < this.pagination;
			},*/

			nexturl(){
				return this.pageUrl(this.pagination + 1);
			}/*,

			prevurl(){
				return this.pageUrl(this.pagination - 1);
			}*/
		}
	}
</script>
