document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

  document.body.classList.remove("ocultar");
  document.body.classList.add("mostrar");
  let qr1_img = document.getElementById("qr1");
  let qr2_img = document.getElementById("qr2");
  let qr3_img = document.getElementById("qr3");
  let qr4_img = document.getElementById("qr4");


  let qr1 = localStorage.getItem("qr1");
  let qr2 = localStorage.getItem("qr2");
  console.log(qr2)
  let qr3 = localStorage.getItem("qr3");
  let qr4 = localStorage.getItem("qr4");

  if(qr1 == "true" || qr1 == true){
    qr1_img.style.display = "block";
  }else{
    qr1_img.style.display = "none";
  }
  
  if(qr2 == "true" || qr2 == true){
    console.log("true, lo mostramos");
    qr2_img.style.display = "block";
  }else{
    console.log("false, nanai de la china");
    qr2_img.style.display = "none";
  }

  if(qr3 == "true" || qr3 == true){
    qr3_img.style.display = "block";
  }else{
    qr3_img.style.display = "none";
  }

  if(qr4 == "true" || qr4 == true){
    qr4_img.style.display = "block";
  }else{
    qr4_img.style.display = "none";
  }


  document.getElementById("Reset").addEventListener("click",function(){
    localStorage.clear();
  });
  
}