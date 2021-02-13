<script>
    import Button from "./Button.svelte"
    import Video from "./Video.svelte";
    let showModal = false; // toggle this to see video pop up

    const toggleModal = () => {
		console.log("Clicked!");
		showModal = !showModal;
	}

    const handlePopUp = () => {
        console.log("clicked");
        alert("clicked!");
        showModal = !showModal;
    }

    var countDownDate = new Date("Feb 13, 2021 16:14:50").getTime();
	var x = setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		document.getElementById("days").innerHTML = days + " :";
		document.getElementById("hours").innerHTML = hours + " :";
		document.getElementById("minutes").innerHTML = minutes + " :";
		document.getElementById("seconds").innerHTML = seconds;
		if (distance < 0) {
            document.getElementById("days").innerHTML = "0:";
            document.getElementById("hours").innerHTML = "0:";
            document.getElementById("minutes").innerHTML = "0:";
            document.getElementById("seconds").innerHTML = "0";
            document.getElementById("revealtoday").innerText = "REVEAL EVENT TODAY!";
        clearInterval(x); 
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
	}
    }, 1000);
</script>

<main>
    <div class="countdown-container">
        <div class="countdown">
            <div class="countdays">
                <div id="days" class="numbers"></div>
                <p class="countdowntext nudge">DAYS</p>
            </div>

            <div class="counthours">
                <div id="hours" class="numbers"></div>
                <p class="countdowntext nudge">HOURS</p>
            </div>

            <div class="countminutes">
                <div id="minutes" class="numbers"></div>
                <p class="countdowntext nudge">MINS</p>
            </div>

            <div class="countseconds">
                <div id="seconds" class="numbers"></div>
                <p class="countdowntext nudge-right">SECS</p>
            </div>			
        </div>
        <div class="reveal">
            <div class="hr"></div>
            <h3 id="revealtoday">REVEAL EVENT APRIL 27TH</h3>
        </div>
        <div class="countdown-button">

        </div>
        <Button text="WATCH TEASER" isRed={true} {showModal} on:click={toggleModal} on:click={handlePopUp} />
        <Video videoId="vuemrb_ur2w" {showModal} on:click={toggleModal} /> <!-- Can view by changing showModal above to true, can't figure out how to trigger this by clicking on the button -->
    </div>
</main>


<style>
    h3{
        letter-spacing: 8px;
        color: rgb(184, 62, 16);
    }
   
    .countdown-container{
		height: 300px;
		width: 650px;
		color: white;
		text-align: center;
        margin-top: 125px;
        margin-bottom: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
	}

	.countdown{
		display: flex;
		justify-content: center;
	}

	.numbers{
		font-size: 100px;
		line-height: 0.8;
        margin: 20px 0 5px 20px;
        font-family: 'Big Shoulders Display', cursive;
        font-weight: 800;
	}

	.countdowntext{
        margin: 0;
		font-size: 20px;
        letter-spacing: 8px;
        font-family: 'Big Shoulders Display', cursive;
        font-weight: 700;
    }
    .nudge {
        margin-right: 10px;
    }

    .nudge-right{
        margin-left: 20px;
    }

    .hr{
        height: 2px;
        width: 520px;
        background: rgb(129, 129, 129);
        margin-top: 20px;
    }
</style>