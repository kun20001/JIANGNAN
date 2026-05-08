var side = document.getElementById("sidebar");
var open = document.getElementById("open");
var close = document.getElementById("close");
var win = document.getElementById("window1");
var win2 = document.getElementById("window2");
var win3 = document.getElementById("window3");

side.style.width="0";

function showpage1() {
  win.style.display='block';
  win2.style.display='none';
  win3.style.display='none';
  side.style.width="0";
}
function showpage2() {
  win.style.display='none';
  win2.style.display='block';
  win3.style.display='none';
  side.style.width="0";
}
function showpage3() {
  win.style.display='none';
  win2.style.display='none';
  win3.style.display='block';
  side.style.width="0";
}
open.onclick=function(){
    side.style.width="15rem";
}
close.onclick=function(){
    side.style.width="0";
}