var side = document.getElementById("sidebar");
var open = document.getElementById("open");
var close = document.getElementById("close");
side.style.width="0";
open.onclick=function(){
    side.style.width="15rem";
}
close.onclick=function(){
    side.style.width="0";
}