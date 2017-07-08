<template>
	<div :class="imageClass">
		<div v-if="image" class="post-tag-image" :style="imageStyle"></div>
		<a :href="href">{{name}}</a>
	</div>
</template>

<script>
	import resolveUrl from "../js/resolve-url";
	export default {
		props: {
			slug: {
				type: String,
				required: true
			},

			name: {
				type: String,
				required: true
			},

			image: {
				type: String
			}
		},

		computed: {
			href(){
				return resolveUrl(`/tag/${this.slug}`);
			},

			imageStyle(){
				return `background-image: url("${resolveUrl(this.image)}");`;
			},

			imageClass(){
				return `post-tag${(this.image) ? ' imaged-tag' : ''}`;
			}
		}
	};
</script>
