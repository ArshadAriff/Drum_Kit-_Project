var noOfBut = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfBut; i++) {
  var audio = new Audio('sounds/tom-1.mp3');
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var key=this.innerHTML;
    makeSound(key);
    doAnimation(key);
  });
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  doAnimation(event.key);
});
function makeSound(key) {
  switch (key) {

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "g":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "h":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
    console.log(key);

  }

}
function doAnimation(key){
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");

  },100);
}
