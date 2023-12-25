document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  document.getElementById("check_maps").addEventListener("click", checkMaps);
}


function checkMaps(){
  let name = document.getElementById("name").value;
  if(name == "Tomata"){
    console.log("de chill")
    //localStorage.setItem("alex",true);
    
    document.body.classList.add("ocultar");
    setTimeout(() => {
      window.location.href = "../dia31.html";
    }, 1800);
  }else{
    let audio = new Audio("../assets/error3.ogg");
    audio.play();
  }
}
