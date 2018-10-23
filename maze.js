// Author: Christopher Robinson
// Description: Code to add functionality to a maze game web program


window.onload = function(){
	var bound1 = document.querySelector("#boundary1");
	var allBn = document.querySelectorAll("div.boundary");
	var mEnd = document.getElementById("end");
	var mStart = document.getElementById("start"); 
	var inst = document.getElementById("status");
	var theMaze = document.getElementById("maze")
	var win = true;
	var crashCntr = 0;
	
	console.log(allBn);
	//Exercise 1
	bound1.addEventListener("mouseover", function(){
		this.classList.add("youlose");
		crashCntr = crashCntr + 1;
	})
	
	//Exercise 2
	for(var i = 1; i < allBn.length; i++){
		allBn[i].addEventListener("mouseover", function(){
			this.classList.add("youlose");
			crashCntr = crashCntr + 1;
		})
	};
	
	//Exercise 3
	mEnd.addEventListener("mouseover", function(){
		// using crashCntr
		
		
		if(crashCntr === 0){
			//alert("You Win!");
			inst.textContent = "You Win";
		} else {
			//alert("YOU LOSE");
			inst.textContent = "YOU LOSE";
		}
	})
	
	//Exercise 4
	mStart.addEventListener("click", function(){
		if (bound1.classList.contains("youlose")){
			bound1.classList.remove("youlose");
		}
		
		for(var i = 1; i < allBn.length; i++){
			if(allBn[i].classList.contains("youlose")){
				allBn[i].classList.remove("youlose");
			}
		}
		
		crashCntr = 0;
		inst.textContent = "Move your mouse over the \"S\" to begin.";
		
	})
	
	//Exercise 5
	//See above
	
	//Exercise 6
	theMaze.addEventListener("mouseleave", function(){
		bound1.classList.add("youlose");
		
		for(var i = 1; i < allBn.length; i++){
			allBn[i].classList.add("youlose");
		}
		
	});
	

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