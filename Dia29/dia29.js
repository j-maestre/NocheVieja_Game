document.addEventListener("DOMContentLoaded", onLoad);


function onLoad(){
  document.getElementById("btn-check-padel").addEventListener("click",checkPadel);
  document.getElementById("btn-check-number").addEventListener("click",checkNumber);

  let bloque2 = document.getElementById("pista2");

  if(bloque2){
    bloque2.style.display = "none";
  }else{
    console.log("No encontrao");
  }
}

function checkPadel(){
  let text = document.getElementById("secret-padel");
  if(text.value == "Pepe botella"){
    document.getElementById("pista2").style.display = "block"
  }else{
    let audio = new Audio("../assets/error2.ogg");
    audio.play();
  }
}

function checkNumber(){
  let text = document.getElementById("secret-number");
  if(text.value == 3.20){
   alert("Te chapo el Bokaty!")
   localStorage.setItem("qr1", true);
  }else{
    let audio = new Audio("../assets/error2.ogg");
    audio.play();
  }
}