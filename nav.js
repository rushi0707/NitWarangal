
var navb=document.getElementById("link");

function showMenu()
{
    navb.style.right="0";
    navb.style.display="block";  /*when click then nav bar will unhide*/
}

function hideMenu()
{
    navb.style.right="-300px";
    navb.style.display="none";  /*when click then nav bar will hide again*/
}
