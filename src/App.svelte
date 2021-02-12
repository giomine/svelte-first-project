<script>
	import Header from "./Header.svelte";
	import Countdown from "./Countdown.svelte";
</script>

<main>
	<Header />

	<div class="middle">
		<div class="tomb-raider">
			<img class="tomb-raider-logo" src="/images/tomb-raider-logo.png" alt="">
		</div>
		<Countdown />
	</div>

	<div class="footer">

	</div>
	
</main>

<style>
	.middle{
		height: 100vh;
		background: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
	}

	.tomb-raider-logo{
		width: 660px;
	}

	.footer{
		height: 50vh;
		background: white;
	}
</style>