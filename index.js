// var numberofDrum = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < numberofDrum; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var buttonInnerHTML = this.innerHTML;
//     console.log(this.innerHTML);
//
//     switch (buttonInnerHTML) {
//       case "w":
//         var tom1 = new Audio('sounds/tom-1.mp3');
//         tom1.play();
//         break;
//
//       case "a":
//         var tom2 = new Audio('sounds/tom-2.mp3');
//         tom2.play();
//         break;
//
//       case "s":
//         var tom3 = new Audio('sounds/tom-3.mp3');
//         tom3.play();
//         break;
//
//       case "d":
//         var tom4 = new Audio('sounds/tom-4.mp3');
//         tom4.play();
//         break;
//
//       case "j":
//         var crash = new Audio('sounds/crash.mp3');
//         crash.play();
//         break;
//
//       case "k":
//         var kick = new Audio('sounds/kick-bass.mp3');
//         kick.play();
//         break;
//
//       case "l":
//         var snare = new Audio('sounds/snare.mp3');
//         snare.play();
//         break;
//
//       default:
//         console.log(buttonInnerHTML);
//
//     }
// });
//
// }
//adding all the buttons with the class: drums, to an array called allButtons.
var allButtons = document.querySelectorAll(".drum");

//loop through every drum and add a listener to click events.
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    //store the character inside the drum image to a variable;
    var buttonInnerHTML = this.innerHTML;
    //the character that was stored will then be placed in the function checkKey to play the corrosponding drum sound.
    checkKey(buttonInnerHTML);
    console.log(buttonInnerHTML);
  });
}

//waits for a keyboard event on the webpage to excecute the function

  document.addEventListener("keydown", function (event){
  //the pressed key will get stored in a variable
  var pressedKey = event.key;
  //the stored character will then be placed in the function checkKey to play the corrosponding drum sound.
  checkKey(pressedKey);
  console.log(pressedKey);
});


//this function has a parameter containing the character that's pressed/clicked.
function checkKey(key) {
  //checks if the character is present and will check the corrosponding character with the right drum sound.
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "a":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        case "s":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;

          case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

            case "j":
              var tom2 = new Audio('sounds/tom-2.mp3');
              tom2.play();
              break;

              case "k":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

                case "l":
                  var tom4 = new Audio('sounds/tom-4.mp3');
                  tom4.play();
                  break;
    default:

  }
}
