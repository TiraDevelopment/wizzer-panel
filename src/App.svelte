<script>
	let server = "None";
	function start(){
		// Logic here to make the server

		server = prompt("Please enter a name for your server.");

		if(server == ""){
			server = "None";
			start();
		}
		if(server == null){
			server = "None";
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
</svelte:head>

<main>
	<nav class="navbar navbar-wizzer border">
		<div class="container">
			<img src="./WizzerLogo.png" class="nav-icon">
		</div>
	  </nav>

	  &nbsp;



<div class="text-center align-self-center">
	<h1>Current Server: {server}</h1>
	&nbsp;
	<button class="btn btn-success" on:click="{start}">Start Server</button>
	&nbsp;
	<button class="btn btn-danger" on:click="{stop}">Stop Server</button>
</div>


</main>	