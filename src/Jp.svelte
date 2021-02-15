<script>
	import Video from "./Video.svelte";
	import Header from "./Header.svelte";
	import Countdown from "./Countdown.svelte";
	import Button from "./Button.svelte";
	let showModal = true; // toggle this to see video pop up

const toggleModal = () => {
	console.log("Clicked!");
	showModal = !showModal;
}
</script>

<Video videoId="vuemrb_ur2w" {showModal} on:click={toggleModal} />

<main>
	<Header join="新規登録" login="ログイン" loginBarJP={true} squareEnixJP="https://www.jp.square-enix.com" />

	<div class="middle">
		<div class="tomb-raider">
			<img class="tomb-raider-logo" src="/images/tomb-raider-logo.png" alt="tomb raider logo">
		</div>
		<Countdown reveal="発表会2021年4月27日" dayUnit="日" hourUnit="時" minUnit="分" secUnit="秒" largeText={true} />
		<!-- BUTTON COMPONENTS -->
		<Button text="ティーザー" isRed={true} smallText={true} on:click={toggleModal}  />
		<div class="button-position">
			<a title="Add to Calendar" data-id="of6047180" href="https://www.addevent.com/event/of6047180+google" target="_blank" rel="nofollow"><Button text="カレンダーに追加" smallText={true} /></a>
			<a href="https://www.jp.square-enix.com"><Button text="ニュースレター登録" smallText={true} /></a>
			<div class="socialmedia">
				<i class="fab fa-facebook fa-2x"></i>
				<i class="fab fa-twitter fa-2x"></i>
				<i class="fab fa-google-plus fa-2x"></i>
				<i class="fab fa-youtube-square fa-2x"></i>
				<i class="fab fa-instagram fa-2x"></i>
			</div>
		</div>
		
	</div>
</main>

<style>
	a{
		text-decoration-line: none;
	}
	.middle{
		height: 815px;
		background: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
	}

	.tomb-raider-logo{
		width: 660px;
	}

	.button-position{
		height: 700px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.socialmedia{
		margin-top: 35px;
		width: 250px;
		display: flex;
		justify-content: space-between;
		color: rgb(218, 218, 218);
	}
</style>