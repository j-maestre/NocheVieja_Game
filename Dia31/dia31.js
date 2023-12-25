document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  document.getElementById("check_maps").addEventListener("click", checkMaps);

  let rafa = localStorage.getItem("rafa");
  if(rafa){
    document.getElementById("rafa_img").classList.add("completed");
  }
  
  let alex = localStorage.getItem("alex");
  if(alex){
    document.getElementById("alex_img").classList.add("completed");
  }
}


function checkMaps(){
  let name = document.getElementById("name").value;
  if(name == "Tomata"){
    console.log("de chill")
  }else{
    let audio = new Audio("../assets/error3.ogg");
    audio.play();
  }
}
