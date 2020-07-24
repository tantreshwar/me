var ans=0;
var timeo;
var timi;

function ctDwn(time){
var x=document.getElementById("timeleft");
timeo=setTimeout(function(){ alert("Timeout!!"); }, 5000);

timi=setInterval(function decrement_ctr(){
	x.innerHTML=time;
	if (time>=1)
		time=time-1;
},1000);

}

function stop(){
clearInterval(timeo);
clearTimeout(timi);
}

var sum=0;
function findType(ele){
var temp=ele;
var rem=0;
while (temp>0){
rem=temp%10;
temp=parseInt(temp/10);
sum=sum+rem;
}
if (sum%2==0)
	return 1
return 0;
}


function generate() {
  var y=0;
  var x=document.getElementById("num");
  y=x.innerHTML=Math.floor((Math.random() * 1000000000000) +1);
  ctDwn(5);
  ans=findType(y);
}

function eveCheck(){
stop();
if (ans==1)
	alert("You Win!!");
else
	alert("You Lose!!");
}


function oddCheck(){
	stop();
	if (ans==1)
		alert("You Lose!!");
	else
		alert("You Win!!");
}
