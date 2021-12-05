<script language="ts">

	let server = "None";

	function start(){
		// Logic here to make the server

		server = prompt("Please enter a name for your server.");

		if(server == "" || server == null){
			server = "None";
			start();
		}
	}

	function stop(){
		// Logic here to stop the server

		server = "None";
	}
</script>

<style>
	.nav-icon{
		min-height: 50px;
		min-width: 50px;
		width: 10vw;
		height: 10vw;
		max-height: 100px;
		max-width: 100px;
	}
	.navbar-wizzer{
		background: #282864;
	}
</style>

<svelte:head>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

	<!-- Primary Meta Tags -->
<title>Wizzer Panel</title>
<meta name="title" content="Wizzer Panel — Servers">
<meta name="description" content="Create your own server on Wizzer Today!">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wizzer-panel.netlify.app/">
<meta property="og:title" content="Wizzer Panel — Servers">
<meta property="og:description" content="Create your own server on Wizzer Today!">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://wizzer-panel.netlify.app/">
<meta property="twitter:title" content="Wizzer Panel — Servers">
<meta property="twitter:description" content="Create your own server on Wizzer Today!">

<script src="https://unpkg.com/@supabase/supabase-js"></script>
</svelte:head>

<main>
	<nav class="navbar navbar-wizzer border">
		<div class="container">
			<img src="./WizzerLogo.png" class="nav-icon" alt>
		</div>	
	</nav>

	&nbsp;

	<div class="text-center">
	<h1>Current Server: {server}</h1>
	<button class="btn btn-success" on:click="{start}">Start Server</button>
	<button class="btn btn-danger" on:click="{stop}">Stop Server</button>
	&nbsp;

	</div>
</main>	