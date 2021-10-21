//initiate all variables
var tools = document.getElementById("tools");
var logo = document.getElementById("logo");
var ScreenHeight, ScreenWidth, ToolbarHeight;

//consistently update the website's positions according to the screen size
setInterval(function(){
    //get the screen's size
    ScreenHeight = window.innerHeight;
    ScreenWidth = window.innerWidth;

    //set the toolbar height
    ToolbarHeight = ScreenHeight / 1;

    //update the upper tools' size and position
    tools.style.width = ScreenWidth + 'px';
    tools.style.height = ToolbarHeight + 'px';

    //update the logo's size and position
    logo.style.height = ToolbarHeight + 'px';
    logo.style.width = ToolbarHeight + 'px';
    logo.style.left = ScreenWidth / 50 + 'px';

}, 200);
