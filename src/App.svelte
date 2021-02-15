<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from "./Home.svelte";
  	import Jp from "./jp.svelte";
	import Video from "./Video.svelte";
	import Footer from "./Footer.svelte";
	let showModal = true; // toggle this to see video pop up

const toggleModal = () => {
	console.log("Clicked!");
	showModal = !showModal;
}
</script>

<Router>

<Video videoId="vuemrb_ur2w" {showModal} on:click={toggleModal} />



<main>
	<Route path="/">
		<Home />
	</Route>
	<Route path="jp">
		<Jp />
	</Route>
	<Footer />
</main>
</Router>

<style>
</style>