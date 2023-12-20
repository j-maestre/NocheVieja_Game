document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){
  let qr1_img = document.getElementById("qr1");
  let qr2_img = document.getElementById("qr2");
  let qr3_img = document.getElementById("qr3");
  let qr4_img = document.getElementById("qr4");


  let qr1 = localStorage.getItem("qr1");
  let qr2 = localStorage.getItem("qr2");
  let qr3 = localStorage.getItem("qr3");
  let qr4 = localStorage.getItem("qr4");

  if(qr1){
    qr1_img.style.display = "block";
  }else{
    qr1_img.style.display = "none";
  }
  
  if(qr2){
    qr2_img.style.display = "block";
  }else{
    qr2_img.style.display = "none";
  }
  if(qr3){
    qr3_img.style.display = "block";
  }else{
    qr3_img.style.display = "none";
  }
  if(qr4){
    qr4_img.style.display = "block";
  }else{
    qr4_img.style.display = "none";
  }
}