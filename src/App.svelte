<script>
	import Header from "./Header.svelte";
	import Countdown from "./Countdown.svelte";
	import Button from "./Button.svelte";
</script>

<main>
	<Header />

	<div class="middle">
		<div class="tomb-raider">
			<img class="tomb-raider-logo" src="/images/tomb-raider-logo.png" alt="">
		</div>
		<Countdown />
		<Button text="ADD TO CALENDAR" />
		<a href="https://square-enix-games.com/"><Button text="NEWSLETTER SIGN UP" /></a>
	</div>

	<div class="footer">

	</div>
	
</main>

<style>
	a{
		text-decoration-line: none;
	}
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