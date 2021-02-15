<script>
	import { Link } from "svelte-navigator";
	export let join = "JOIN";
	export let login = "LOG IN";
	export let loginBarJP = false;
	export let squareEnixJP = "http://square-enix-games.com";
</script>

<main>
    <div class="header">
		<img class="square-logo" src="https://cdn.sqexeu.com/headerbar/images/SE_Logo_White.svg" alt="square enix logo">
		<div class="login-container">
			<nav class="flags">
				<Link to="/">🇬🇧</Link>
				<Link to="jp">🇯🇵</Link>
			</nav>
			<div class="triangle">	
			</div>
			<div class="login" class:loginJP={loginBarJP}>
				<a href="{squareEnixJP}"><p>{join}</p></a>
				<a href="{squareEnixJP}"><p>{login}</p></a>
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
	.flags{
		width: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 20px;
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
	.loginJP{
		width: 115px;
		font-size: 0.9rem;
		padding-left: 5px;
	}
	.triangle{
		 background:linear-gradient(to bottom right,rgb(0, 0, 0) 50%,rgb(255, 255, 255) 50%);
		 height: 50px;
		 width: 50px;
	}
</style>