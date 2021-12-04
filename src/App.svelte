<script lang="ts">
	import { Navbar, NavbarBrand } from 'sveltestrap';
	let serverName: string = "";
	let oldName: string = "";

function startServer(){
	serverName = prompt("Name your server:");
	if(serverName == ""){
		alert("ERROR: No name was specified");
	}else{
		oldName = serverName;
		alert("Server Started");
	}
}

function stopServer(){
	alert("Server Stopped");
	oldName = serverName;
	serverName = "";
}

function restartServer(){
	alert("Server Restarted");
	serverName = oldName;
}

</script>


<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<main>
	<div id="right">
		<button class="btn btn-primary" on:click="{startServer}">Start Server</button>
		<button class="btn btn-danger" on:click="{stopServer}">Stop Server</button>
		<button class="btn btn-success" on:click="{restartServer}">Restart Server</button>
		<h1>Server Name: {serverName}</h1>
	</div>
</main>	

<style>
</style>