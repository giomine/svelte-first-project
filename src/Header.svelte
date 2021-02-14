<script>

</script>

<main>
    <div class="header">
		<img class="square-logo" src="https://cdn.sqexeu.com/headerbar/images/SE_Logo_White.svg" alt="square enix logo">
		<div class="login-container">
			<div class="triangle">	
			</div>
			<div class="login">
				<a href="http://square-enix-games.com"><p>JOIN</p></a>
				<a href="http://square-enix-games.com"><p>LOG IN</p></a>
			</div>
		</div>	
	</div>
</main>

<style>
    a{
        text-decoration-line: none;
        color: black;
    }
    a:hover{
        color: rgb(184, 62, 16);
    }
    .header{
		height: 50px;
		background: black;
		display: flex;
		justify-content: space-between;
		border-bottom: 2px solid rgb(14, 14, 14);
	}

	.square-logo{
		height: 20px;
		padding: 15px 20px;
	}

	.login-container{
		display: flex;
	}
	.login{
		background: white;
		height: 50px;
		width: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		font-size: 0.8rem;
		font-weight: bold;
	}
	.triangle{
		 background:linear-gradient(to bottom right,rgb(0, 0, 0) 50%,rgb(255, 255, 255) 50%);
		 height: 50px;
		 width: 50px;
	}
</style>