<template>
	<div id="app">
		<navigation></navigation>
		<origami-main>
			<transition name="slide-fade" mode="out-in">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</origami-main>
	</div>
</template>

<style scoped>
	.slide-fade-enter-active {
		transition: all .3s ease-in-out;
	}
	.slide-fade-leave-active {
		transition: all .3s ease-in-out;
	}
	.slide-fade-enter, .slide-fade-leave-to{
		/*transform: translateX(-50px);*/
		opacity: 0;
	}
</style>

<script>
	import Navigation from "./components/Navigation.vue";
	import OrigamiMain from "./components/OrigamiMain.vue";

	export default {
		components: {
			Navigation,
			OrigamiMain
		}
	}
</script>
