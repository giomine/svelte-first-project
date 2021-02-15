<script>
    export let reveal = "REVEAL EVENT APRIL 27TH";
    export let dayUnit = "DAYS";
    export let hourUnit = "HOURS";
    export let minUnit = "MINS";
    export let secUnit = "SECS";
    export let largeText = false;
    var countDownDate = new Date("Apr 17, 2021 15:19:10").getTime();
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
            confetti.start();
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
                <p class="countdowntext nudge">{dayUnit}</p>
            </div>

            <div class="counthours">
                <div id="hours" class="numbers"></div>
                <p class="countdowntext nudge">{hourUnit}</p>
            </div>

            <div class="countminutes">
                <div id="minutes" class="numbers"></div>
                <p class="countdowntext nudge">{minUnit}</p>
            </div>

            <div class="countseconds">
                <div id="seconds" class="numbers"></div>
                <p class="countdowntext nudge-right">{secUnit}</p>
            </div>			
        </div>
        <div class="reveal">
            <div class:space={largeText} class="hr"></div>
            <h3 class:large={largeText} id="revealtoday">{reveal}</h3>
        </div>
    </div>
</main>


<style>
    h3{
        letter-spacing: 8px;
        color: rgb(184, 62, 16);
    }

    .large{
        font-size: 2rem;
        margin-top: 10px;
    }

    .space{
        margin-top: 20px !important;
    }
   
    .countdown-container{
		height: 210px;
		width: 650px;
		color: white;
		text-align: center;
        margin-top: 125px;
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