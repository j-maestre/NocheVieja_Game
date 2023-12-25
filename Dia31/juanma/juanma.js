document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  document.getElementById("comprobar").addEventListener("click", checkAnswerd);
}


function checkAnswerd(){
  let name = document.getElementById("crucigrama_answerd").value;
  if(name == "Molino"){
    console.log("de chill")
    localStorage.setItem("juanma",true);
    document.body.classList.add("ocultar");
    setTimeout(() => {
      window.location.href = "../dia31.html";
    }, 1800);
  }else{
    let audio = new Audio("../assets/error3.ogg");
    audio.play();
  }
}
