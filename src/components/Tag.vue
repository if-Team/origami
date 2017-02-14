<template>
	<a class="tag" :href="href">{{name}}</a>
</template>

<script>
	export default {
		props: {
			slug: {
				type: String,
				required: true
			},

			name: {
				type: String,
				required: true
			}
		},

		computed: {
			href(){
				return `/tag/${this.slug}`
			}
		}
	};
</script>
