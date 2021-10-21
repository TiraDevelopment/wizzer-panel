//initiate all variables
var tools = document.getElementById("tools");
var logo = document.getElementById("logo");

var StartServer = document.getElementById("StartServer");
var StopServer = document.getElementById("StopServer");
var RestartServer = document.getElementById("RestartServer");

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

    StartServer.style.height = ToolbarHeight * 1.25 + 'px';
    StartServer.style.width = ToolbarHeight * 5 + 'px';

    StartServer.style.left = ScreenWidth - ToolbarHeight * 5.3 + 'px';
    StartServer.style.top = ToolbarHeight * 1.5  + 'px';

    //update it's text size

    StartServer.style.fontSize = ToolbarHeight / 2 + 'px';

    //update the "Stop Server"'s button's size and position
    StopServer.style.height = ToolbarHeight * 1.25 + 'px';
    StopServer.style.width = ToolbarHeight * 5 + 'px';
    
    StopServer.style.left = ScreenWidth - ToolbarHeight * 5.3 + 'px';
    StopServer.style.top = ToolbarHeight * 3.25 + 'px';
    
    //update it's text size
    
    StopServer.style.fontSize = ToolbarHeight / 2 + 'px'; 

    //update the "Restart Server"'s button's size and position
    RestartServer.style.height = ToolbarHeight * 1.25 + 'px';
    RestartServer.style.width = ToolbarHeight * 5 + 'px';
        
    RestartServer.style.left = ScreenWidth - ToolbarHeight * 5.3 + 'px';
    RestartServer.style.top = ToolbarHeight * 5 + 'px';
        
        //update it's text size
        
    RestartServer.style.fontSize = ToolbarHeight / 2 + 'px'; 

}, 200);

function Start_Server()
{
    alert("Server Start Action.")
}

function Stop_Server()
{
    alert("Server Stop Action.")
}

function Restart_Server()
{
    alert("Server Restart Action.")
}
