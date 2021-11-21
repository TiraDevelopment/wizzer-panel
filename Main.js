function Start_Server()
{
    alert("START SERVER: Supposed to send HTTP request to Wizzer API")
}

function Stop_Server()
{
    alert("STOP SERVER: Supposed to send HTTP request to Wizzer API")
}

function Restart_Server()
{
    alert("RESTART SERVER: Supposed to send HTTP request to Wizzer API")
}

function New_Server_Name(NewName)
{
    document.getElementById("ServerName").innerHTML = "Server Name: " + NewName;
}

setInterval(function(){
    document.getElementById("logo").style.width =
    (screen.innerWidth / document.getElementById("logo").style.height) + 'px';
}, 20)
