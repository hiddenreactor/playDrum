var keys = ["w", "a", "s", "d", "j", "k", "l"];

keys.forEach(buttonClicked);
document.addEventListener("keydown", function() {
  sounds(event.key);
});

function buttonClicked(value) {
  document.querySelector("." + value).addEventListener("click", function() {
    sounds(value);
  });
}

function sounds(value) {
  switch (value) {
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
