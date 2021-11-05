//initiate all variables
var tools = document.getElementById("tools");
var logo = document.getElementById("logo");

var StartServer = document.getElementById("StartServer");
var StopServer = document.getElementById("StopServer");
var RestartServer = document.getElementById("RestartServer");

var ServerName = document.getElementById("ServerName");

var ScreenHeight, ScreenWidth, ToolbarHeight;

//consistently update the website's positions according to the screen size
setInterval(function(){

    //get the screen's size
    ScreenHeight = window.innerHeight;
    ScreenWidth = window.innerWidth;

    //set the toolbar height
    ToolbarHeight = ScreenHeight / 7;

    //update the upper tools' size and position
    tools.style.width = ScreenWidth + 'px';
    tools.style.height = ToolbarHeight + 'px';

    //update the logo's size and position
    logo.style.height = ToolbarHeight + 'px';
    logo.style.width = ToolbarHeight + 'px';

    logo.style.left = ScreenWidth / 100 + 'px';

    //update the "Start Server"'s button's size and position

    StartServer.style.height = ToolbarHeight / 3 + 'px';
    StartServer.style.width = ScreenWidth - ScreenWidth / 1.1 + 'px';

    StartServer.style.left = ScreenWidth - ScreenWidth / 8 + 'px';
    StartServer.style.top = ToolbarHeight * 2  + 'px';

    //update it's text size

    StartServer.style.fontSize = ToolbarHeight / 6 + 'px'; 

    //update the "Stop Server"'s button's size and position
    StopServer.style.height = ToolbarHeight / 3 + 'px';
    StopServer.style.width = ScreenWidth - ScreenWidth / 1.1 + 'px';
    
    StopServer.style.left = ScreenWidth - ScreenWidth / 8 + 'px';
    StopServer.style.top = ToolbarHeight * 2.5 + 'px';
    
    //update it's text size
    
    StopServer.style.fontSize = ToolbarHeight / 6 + 'px'; 

    //update the "Restart Server"'s button's size and position
    RestartServer.style.height = ToolbarHeight / 3 + 'px';
    RestartServer.style.width = ScreenWidth - ScreenWidth / 1.1 + 'px';
        
    RestartServer.style.left = ScreenWidth - ScreenWidth / 8 + 'px';
    RestartServer.style.top = ToolbarHeight * 3 + 'px';
        
    //update it's text size

    RestartServer.style.fontSize = ToolbarHeight / 6 + 'px'; 

    //update the server name's position and size

    ServerName.style.top = ToolbarHeight * 2 + 'px';
    ServerName.style.left = ScreenWidth - ScreenWidth / 1.025 + 'px';

    ServerName.style.width = ScreenWidth / 5 + 'px';
    ServerName.style.height = ToolbarHeight * 1.5 + 'px';

    //update it's text size

    ServerName.style.fontSize = ToolbarHeight / 3 + 'px'; 

}, 200);

function Start_Server()
{
    alert("Supposed to send HTTP request to Wizzer API")
}

function Stop_Server()
{
    alert("Supposed to send HTTP request to Wizzer API")
}

function Restart_Server()
{
    alert("Supposed to send HTTP request to Wizzer API")
}
