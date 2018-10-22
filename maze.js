// Author: Christopher Robinson
// Description: Code to add functionality to a maze game web program


window.onload = function(){
	var bound1 = document.querySelector("#boundary1");
	var allBn = document.querySelectorAll("div.boundary");
	var mEnd = document.getElementById("end");
	var win = true;
	var crashCntr = 0;
	
	console.log(allBn);
	// Excercise 1
	bound1.addEventListener("mouseover", function(){
		this.classList.add("youlose");
		crashCntr = crashCntr + 1;
	})
	
	//Excercise 2
	for(var i = 1; i < allBn.length; i++){
		allBn[i].addEventListener("mouseover", function(){
			this.classList.add("youlose");
			crashCntr = crashCntr + 1;
		})
	};
	
	//Excercise 3
	mEnd.addEventListener("mouseover", function(){
		// using crashCntr
		
		if(crashCntr === 0){
			alert("You Win!");
		} else {
			alert("YOU LOSE");
		}
	})
	

}


var turnRed = function(wall) {
	wall.classList.add("youlose");
};



/* testing for Excercise 2
for(var i = 1; i < allBn.length; i++){
	allBn[i].addEventListener("mouseover", function(){
		this.classList.add("youlose");
	})
};
*/

//bdry1.onclick = turnRed();

/*
var test = document.getElementsByTagName('h1');

console.log(test);
test.style.backgroundColor = 'yellow';
*/