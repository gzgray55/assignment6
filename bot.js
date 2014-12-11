
function funcG(){
$("#section-one").animate({
	opacity: 0.25
},2000);
}
var jfunc = funcG();

//function funcH(){
$//("#section-one").slide up(1000);
//}
//var hfunc = funcH();
	var txt="";
	var i=9;
	function myBottles(){	
		while (i>0){
		txt += i +" bottles of beer on the wall..."+i+" bottles of beer. Take one down and pass it around... <br>";
		i--;
	}
	document.getElementById("ptag").innerHTML = txt;
}
console.log(myBottles());
	

var  bottlesG = myBottles();

