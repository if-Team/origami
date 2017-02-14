<template>
	<post-list :context="context" :context-data="contextData" :limit="limit"></post-list>
</template>

<script>
	import PostList from "./components/PostList.vue";

	export default {
		data(){
			return {
				context: origamiPagination.context,
				contextData: origamiPagination.data,
				//pagination: origamiPagination.pagination,
				limit: origamiPagination.limit
			};
		},
		components: {
			PostList
		}
	}
</script>
