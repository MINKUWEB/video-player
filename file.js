function playvideo() {
var x=document.getElementById('videoo');


x.play();

}
function Pausevideo(){
var x=document.getElementById('videoo');


x.pause();
}

function vload(){
var x=document.getElementById('uplode').value.replace(/.*(\/|\\)/,'');

var y=document.getElementById('videoo');
y.src=x;

}
