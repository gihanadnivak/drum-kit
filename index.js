var numberOfDrumButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    // this.style.color = 'black'

    var buttonInnnerHtml = this.innerHTML ;
    var currentKey = this.innerHTML;
    console.log(currentKey);
    buttonAnimation(currentKey)
    makesound(buttonInnnerHtml);
    
  });

}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key)
});


function makesound(key){
  
  switch (key) {
    case 'w':
      var souuund = new Audio('sounds/crash.mp3')
      souuund.play()
      break;
    case 'a':
      var souuund = new Audio('sounds/kick-bass.mp3')
      souuund.play()
      break;
    case 's':
      var souuund = new Audio('sounds/snare.mp3')
      souuund.play()
      break;
    case 'd':
      var souuund = new Audio('sounds/tom-1.mp3')
      souuund.play()
      break;
    case 'j':
      var souuund = new Audio('sounds/tom-2.mp3')
      souuund.play()
      break;
    case 'k':
      var souuund = new Audio('sounds/tom-3.mp3')
      souuund.play()
      break;
    case 'l':
      var souuund = new Audio('sounds/tom-4.mp3')
      souuund.play()
      break;

    default:
      console.log(buttonInnnerHtml)
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
// var souuund = new Audio("sounds/tom-1.mp3");
//     souuund.play()
