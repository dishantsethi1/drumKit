var totalNo=document.querySelectorAll(".drum").length;

for(var i=0;i<totalNo;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buton=this.innerHTML;
    makeSound(buton);
    buttonAnimation(buton);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})
function makeSound(key){
  switch(key){
    case "w":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom14=new Audio("sounds/tom-4.mp3");
    tom14.play();
    break;

    case "j":
    var tom15=new Audio("sounds/snare.mp3");
    tom15.play();
    break;

    case "k":
    var tom16=new Audio("sounds/crash.mp3");
    tom16.play();
    break;

    case "l":
    var tom17=new Audio("sounds/kick-bass.mp3");
    tom17.play();
    break;

    default:
    console.log("not working properly");
  }
}


function buttonAnimation(key){
  var pressedb=document.querySelector("."+key);

  pressedb.classList.add("pressed");

  setTimeout(function(){
    pressedb.classList.remove("pressed");
  },100);
}
