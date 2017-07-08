<template>
	<span class="author">
		<img v-if="authorImage" class="author-thumb" :src="authorImage" :alt="authorName" nopin="nopin">
		<a :href="url">{{authorName}}</a>
	</span>
</template>

<script>
	import resolveUrl from "../js/resolve-url";

	export default {
		props: {
			author: {
				type: Object,
				required: true
			}
		},

		computed: {
			url(){
				return resolveUrl("/author/" + this.author.slug);
			},

			authorImage(){
				if(this.author.image){
					return resolveUrl(this.author.image);
				}else if(this.author.profile_image) {
					return resolveUrl(this.author.profile_image);
				}
			},

			authorName(){
				return this.author.name;
			}
		}
	}
</script>
