//find and register all the buttons under ".drum" class
var allButtons = document.querySelectorAll(".drum").length;

//loop all the buttons under ".drum" class
for (var i = 0; i < allButtons; i++) {
  //Select all the query that has been looped, then add an event (click) into a generic function when the button being clicked
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //assigning and returning HTML content to avariable called buttonInnerHTML
    var buttonInnerHTML = this.innerHTML;
    //assigning variable buttonInnerHTML to the function "sounds"
    sounds(buttonInnerHTML);

  });
}
//assigning an eventListener to (keypress) and pass it throught the function with a parameter of (event)
document.addEventListener("keypress", function(event) {
  //assigning the key property of the event event to the function "sounds"
  sounds(event.key);
});
//excute and play the sounds based on the key parameter
function sounds(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "j":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:


  }

}
