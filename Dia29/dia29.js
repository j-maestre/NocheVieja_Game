document.addEventListener("DOMContentLoaded", onLoad);


function onLoad(){
  document.getElementById("btn-check-padel").addEventListener("click",checkPadel);

}

function checkPadel(){
  let text = document.getElementById("secret-padel");
  if(text.value == "Pepe botella"){
   
  }else{
    let audio = new Audio("../assets/error2.ogg");
    audio.play();
  }
}