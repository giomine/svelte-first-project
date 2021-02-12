<script>
    var countDownDate = new Date("Apr 27, 2021 15:37:25").getTime();
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
		clearInterval(x);
		// document.getElementById("numbers").innerHTML = "EXPIRED";
	}
	}, 1000);
</script>

<main>
    <div class="countdown-container">
        <div class="countdown">
            <div class="countdays">
                <div id="days" class="numbers"></div>
                <p class="countdowntext">DAYS</p>
            </div>

            <div class="counthours">
                <div id="hours" class="numbers"></div>
                <p class="countdowntext">HOURS</p>
            </div>

            <div class="countminutes">
                <div id="minutes" class="numbers"></div>
                <p class="countdowntext">MINUTES</p>
            </div>

            <div class="countseconds">
                <div id="seconds" class="numbers"></div>
                <p class="countdowntext">SECONDS</p>
            </div>			
        </div>
        <div class="reveal">
            
        </div>
        <div class="countdown-button">

        </div>
    </div>
</main>


<style>
    .countdown-container{
		height: 300px;
		width: 650px;
		background: gray;
		color: white;
		text-align: center;
		margin-top: 100px;
	}

	.countdown{
		display: flex;
		justify-content: center;
	}

	.numbers{
		font-size: 100px;
		line-height: 0.8;
		margin: 20px 0 0 20px;
	}

	.countdowntext{
		margin: 0;
		font-size: 15px;
		letter-spacing: 4px;
	}
</style>