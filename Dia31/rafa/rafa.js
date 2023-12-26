document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  document.getElementById("check_clave").addEventListener("click", checkNumber);
}


function checkNumber(){
  let name = document.getElementById("name").value;
  let fechaActual = new Date();
  let horas = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();

  console.log("horas: ", horas, " minutos: ", minutos, " total: ", horas + minutos);


  console.log("name: ", name, "result: ", (horas + minutos) * 100);
  if(name ==  (horas + minutos) * 100){
    
    localStorage.setItem("rafa",true);
    alert("Me dijeron 18, contesté 9 y me dejaron pasar");
    document.body.classList.add("ocultar");
    setTimeout(() => {
      window.location.href = "../dia31.html";
    }, 1800);
  }else{
    let audio = new Audio("../../assets/error3.ogg");
    audio.play();
  }
}
