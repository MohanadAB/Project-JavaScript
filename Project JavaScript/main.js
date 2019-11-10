var body = document.querySelector("body");
body.style.display="grid";
body.style.margin="0";
body.style.padding="0";
body.style.backgroundImage= "url(splash.jpg)";  //"#2F4F4F" | "#2196F3";
body.style.backgroundSize= "cover";
body.style.backgroundPosition= "center";
body.style.backgroundRepeat= "no-repeat";

let splash = document.querySelector('#splash')
		splash.addEventListener('click', ()=>{
		     document.body.style.backgroundImage = "url('splash.jpg')";
		});
let splashSword = document.querySelector('#splashSword')
		     splashSword.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashSword.jpg')";
		});
let splasGhost = document.querySelector('#splashGhost')
		    splashGhost.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashGhost.jpg')";
		});
let splasFreedom = document.querySelector('#splashFreedom')
		     splashFreedom.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashFreedom.jpg')";
		});
let splashSaber = document.querySelector('#splashSaber')
		    splashSaber.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashSaber.jpg')";
		});
let splasRobote = document.querySelector('#splashRobote')
		     splashRobote.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashRobote.jpg')";
		});
let splasDeath = document.querySelector('#splashDeath')
		     splashDeath.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashDeath.jpg')";
		});
let splasNier = document.querySelector('#splashNier')
		    splashNier.addEventListener('click', ()=>{
			document.body.style.backgroundImage = "url('splashNier.jpg')";
		});

// body.style.padding = "10px";

var W = window.innerWidth;
var pixW= Math.floor(W/40);
console.log(pixW);

var H = window.innerHeight;
var pixH= Math.floor(H/40);
body.style.marginTop=`${(H%40)/2}px`;
body.style.marginLeft=`${(W%40)/2}px`;
console.log(pixH);

var temp = "";
for (let a = 0; a < pixW; a++) {
    temp+="40px " 
}
body.style.gridTemplateColumns=temp;

var rows = "";
for (let a = 0; a < pixH; a++) {
    rows+="40px " 
}
body.style.gridTemplateRows=rows;

// body.style.gridTemplateRows=temp;
// console.log(temp);

for (var i = 0; i < pixW*pixH; i++) {
    let D = document.createElement("div"); 
    /*D.addEventListener("mouseenter",()=>{
        console.log("aa")
      	  D.style.backgroundColor="#"+((1<<24)*Math.random()|0).toString(16);
    });
    D.addEventListener("onmousemove",()=>{
        console.log("aa")
      	  D.style.backgroundColor="";
    });
	*/
	D.addEventListener("mouseenter", generateRandomColor);
	D.addEventListener("mouseleave", deleteColor);
	
function generateRandomColor(e) {
   const lettersList = "123456789ABCDEF0"; 
   const arrayLetterList = lettersList.split("");
let color = "#"; 
for (let i = 0; i < 6; i++) {
	color += arrayLetterList[Math.floor(Math.random() * 15)];
}
this.style.background = color; 
}

	//delete color after some "time"
function deleteColor(e) {
setTimeout(function () {    //set time for clear color
e.target.style.background = "";
}, 300);
}
    D.style.transition = "all 0.1s linear 0s";
       body.appendChild(D);
         // D.innerText=i;
    console.log(i)
}
document.getElementById("refresh").reset();

