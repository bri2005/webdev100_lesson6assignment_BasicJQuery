/*
 *How to get access to elements on the page..
 */

//the body..
$("body")

//all paragraphs..
$("p")

//all elements of class MyClass..
$(".MyClass")

//The element with the ID of MyElement..
$("#MyElement")

/*
 * How to make updates to the CSS style of the element
 */

//Update the background colour of the background to black
$("body").css({ "background-color":"black"});


//Animate a box div to have width/height 100px in 1 second (1000 millisecs) from previous values
$("#myBox").animate({
	width: "100px",
	height: "100px"
}, 1000);

//fade in and out for 5 seconds at a time
$("#myBox").fadeIn(5000);
$("#myBox").fadeOut(5000);

//slide the box in and out of the screen for 2 secs at a time
$("#myBox").slideUp(5000);
$("#myBox").slideDown(2000);

//listen to click events and act on them
$("#myBox").click(   
	function(){
		alert("Box was clicked!"); 
	}
);

//use callbacks to chain/link animations..
//when the menu is shown it will call an anonymous function to animate set the opacity to 0.5

$(".menu").show( function() {
	(".menu").animate( {opacity: 0.5})
})





