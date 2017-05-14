/*canvas*/
var c=document.getElementById("c");
var cxt=c.getContext("2d");

cxt.beginPath();
cxt.moveTo(30,0);
cxt.lineTo(50,30);
cxt.lineTo(10,30);
cxt.fillStyle="#8a886c";
cxt.fill();
cxt.closePath();

cxt.beginPath();
cxt.rotate(180*Math.PI/180);
cxt.arc(-30,-30,20,0,Math.PI,true);
cxt.fillStyle="#8a886c";
cxt.fill();
cxt.closePath();