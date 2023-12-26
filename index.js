document.addEventListener("DOMContentLoaded", onLoad);

//var fechaDia29 = new Date("2023-12-24T23:00:00Z");
var fechaDia29 = new Date("2023-12-29T23:00:00Z");

//var fechaDia30 = new Date("2023-12-24T23:00:00Z");
var fechaDia30 = new Date("2023-12-30T23:00:00Z");

//var fechaDia31 = new Date("2023-12-24T23:00:00Z");
var fechaDia31 = new Date("2023-12-31T23:00:00Z");

function ActualizarContadores(){
  let fechaActual = new Date();

  let diferencia = fechaDia29 - fechaActual;

  // Dia 29
  var diasRestantes1 = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horasRestantes1 = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutosRestantes1 = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundosRestantes1 = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  // Dia 30
  diferencia = fechaDia30 - fechaActual;
  var diasRestantes2 = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horasRestantes2 = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutosRestantes2 = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundosRestantes2 = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  // Dia 31
  diferencia = fechaDia31 - fechaActual;
  var diasRestantes3 = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horasRestantes3 = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutosRestantes3 = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundosRestantes3 = Math.floor((diferencia % (1000 * 60)) / 1000);

  if(diasRestantes1 >= 0){ 
    //console.log("Tiempo restante: " + diasRestantes + " días, " + horasRestantes + " horas, " + minutosRestantes + " minutos, " + segundosRestantes + " segundos");
    document.getElementById("time_left_1").innerHTML = "Disponible en: "+diasRestantes1+" dias, "+horasRestantes1+" horas, "+minutosRestantes1+" minutos y "+segundosRestantes1 + " segundos";
  }else{
    document.getElementById("time_left_1").innerHTML = "";
    document.getElementById("dia_29").classList.remove("locked");
  }
  
  if(diasRestantes2 >= 0){ 
    //console.log("Tiempo restante: " + diasRestantes + " días, " + horasRestantes + " horas, " + minutosRestantes + " minutos, " + segundosRestantes + " segundos");
    document.getElementById("time_left_2").innerHTML = "Disponible en "+diasRestantes2+" dias, "+horasRestantes2+" horas, "+minutosRestantes2+" minutos y "+segundosRestantes2 + " segundos";
  }else{
    document.getElementById("time_left_2").innerHTML = "";
    document.getElementById("dia_30").classList.remove("locked");
  }

  if(diasRestantes3 >= 0){ 
    //console.log("Tiempo restante: " + diasRestantes + " días, " + horasRestantes + " horas, " + minutosRestantes + " minutos, " + segundosRestantes + " segundos");
    document.getElementById("time_left_3").innerHTML = "Disponible en "+diasRestantes3+" dias, "+horasRestantes3+" horas, "+minutosRestantes3+" minutos y "+segundosRestantes3 + " segundos";
  }else{
    document.getElementById("time_left_3").innerHTML = "";
    document.getElementById("dia_31").classList.remove("locked");
  }




  //console.log("hoy es el mes ",mes ," y el dia ",dia);
}

function onLoad(){

  document.body.classList.remove("ocultar");
  document.body.classList.add("mostrar");
  setInterval(ActualizarContadores, 1000);

  let qr1_img = document.getElementById("qr1");
  let qr2_img = document.getElementById("qr2");
  let qr3_img = document.getElementById("qr3");
  let qr4_img = document.getElementById("qr4");


  let qr1 = localStorage.getItem("qr1");
  let qr2 = localStorage.getItem("qr2");
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


  if(qr1 && qr2 && qr3){
    document.getElementById("dia_extra").style.display = "block";
  }
  
}