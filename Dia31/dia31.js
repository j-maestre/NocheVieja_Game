document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  //document.getElementById("check_maps").addEventListener("click", checkMaps);

  let rafa = localStorage.getItem("rafa");
  if(rafa){
    document.getElementById("rafa_img").classList.add("completed");
  }
  
  let alex = localStorage.getItem("alex");
  if(alex){
    document.getElementById("alex_img").classList.add("completed");
  }
  
  let juanma = localStorage.getItem("juanma");
  if(juanma){
    document.getElementById("juanma_img").classList.add("completed");
  }

  if( rafa && juanma && alex){
    document.body.classList.add("ocultar");
    localStorage.setItem("qr3",true);
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1800);
  }
}


function checkMaps(){
}
