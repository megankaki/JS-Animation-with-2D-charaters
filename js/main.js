/**
 * Function to be ran by the load event of the page
 */
function startup(e){

	console.log(e)

	console.log("Startup called!")

	window.setInterval(animateCharacter, 500)

	// document.getElementsByTagName('a')[0].addEventListener('click', LinkClick)
	
	window.document.addEventListener('keydown', changeDirection)

	window.document.addEventListener('keydown', moveCharacter)
	// when any keyispressed 'keydown' react, keyup is when you release the key
	window.document.addEventListener('keydown', changeCharacter)
		//change characters
		//do not do function() aka. changeChatacter() because you do not need the 
	//because the pages are all loaded in one place, we do not need to reference each other and because the files transfer over. 
	//Add any keyboard event listeners here


	//change direction, move character & change directionto the main js file in startup, addEventListener

}
var fired_events;
function LinkClick(e){
	fired_event = e;
	document.writeln("<p>Mouse was clicked at" + e.screenX + " x " + e.screenY + "</p>")
	console.log(e)
	e.preventDefault(); 
}
//log event and prevent the event from doing its defualt action. and declare a global variable with the var at the beginning. cancel its normal event which is going to Google.com in this case.
//https://developer.mozilla.org/en-US/docs/Web/API/Event ->helpful link for additional properties 

//Write the javascript necessary to call startup() onload
 window.addEventListener('load', startup)

//addEventListener (event, function (do not put in parentheses, function is itself?), useCapture)