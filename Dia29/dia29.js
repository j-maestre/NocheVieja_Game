document.addEventListener("DOMContentLoaded", onLoad);


function onLoad(){
  document.getElementById("btn-check-padel").addEventListener("click",checkPadel);
  document.getElementById("btn-check-number").addEventListener("click",checkNumber);

  let bloque2 = document.getElementById("pista2");
  bloque2.classList.remove("mostrar");
  bloque2.classList.add("ocultar");
  
}

function checkPadel(){
  let text = document.getElementById("secret-padel");
  if(text.value == "Pepe botella"){
    //document.getElementById("pista2").style.display = "block"
    document.getElementById("pista2").classList.add("mostrar");
    document.getElementById("pista2").classList.remove("ocultar");
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
    document.body.classList.remove("mostrar");
    document.body.classList.add("ocultar");
    setTimeout(function() {
      // Redireccionar a la nueva página
      window.location.href = "../index.html";
    }, 1800);
  }else{
    let audio = new Audio("../assets/error2.ogg");
    audio.play();
  }
}