//find and register all the buttons under ".drum" class
var allButtons = document.querySelectorAll(".drum").length;

//loop all the buttons under ".drum" class
for (var i=0; i < allButtons; i++) {
  //Select all the query that has been looped, then add an assign an event into a generic function
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //
    var buttonInnerHTML = this.innerHTML;
    sounds(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event) {
  sounds(event.key);
});

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
