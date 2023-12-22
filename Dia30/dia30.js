document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

  document.getElementById("btn_send").addEventListener("click", checkEmail);
  document.getElementById("check_laberinto").addEventListener("click", CheckLaberinto);
  document.getElementById("check_laberinto").addEventListener("click", CheckSpotyWord);
  document.getElementById("check_laberinto").style.display = "none";
  checkCanvas();
}


function checkEmail(){
  let email = document.getElementById("reason").value;
  let reason = document.getElementById("email").value;

  console.log(reason)
  console.log(email)

  if(reason && email){

    //const serviceID = 'default_service';
    //const templateID = 'template_f5gwsgb';
    const publicKey = "zug5qRn6mv_hg8oOs";
    emailjs.init(publicKey);

    emailjs.send("service_66qmdsr","template_f5gwsgb",{
      reply_to: reason,
      from_name: email,
    }).then((res) =>{
      console.log("De locos")
      document.getElementById("content").style.display = "none";
      document.getElementById("juanma_img").style.display = "block";
      document.getElementById("secret_number").style.display = "block";
      document.getElementById("check_laberinto").style.display = "block";
    }).catch((err) =>{
      alert("Algo has puesto mal cacho mongolo")
    });

  }else{
    // Debug only
    document.getElementById("content").style.display = "none";
    document.getElementById("juanma_img").style.display = "block";
    document.getElementById("secret_number").style.display = "block";
    document.getElementById("check_laberinto").style.display = "block";
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }
}

function CheckLaberinto(){
  console.log("Check laberinto");
  let value = document.getElementById("secret_number").value;
  console.log(value);
  console.log(claveLaberinto)
  if(value == claveLaberinto){
    // Ha acertado el laberinto, mostrar lista de spoty
    document.getElementById("block_spoty").style.display = "block";
    document.getElementById("secret_word").style.display = "block";

  }else{
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }

}

function CheckSpotyWord(){
  let word = document.getElementById("secret_word").value;

  if(word == "Mondongo"){
    console.log("correcto")
    document.getElementById("pista1").classList.remove("mostrar");
    document.getElementById("pista1").classList.add("ocultar");
    setTimeout(() => {
      document.getElementById("pista1").style.display = "none";
      document.getElementById("mondongo_img").style.display = "block";
      let audio = new Audio("../assets/mondongo.mp3");
      audio.play();
      setTimeout(() => {
        document.getElementById("mondongo_img").style.display = "none";
      }, 1000);
    }, 1100);
  }else{
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }
}


// Canvas
function checkCanvas() {
  const canvas = document.getElementById('puzzleCanvas');
  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let points = [];

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  document.addEventListener('mouseup', stopDrawing);

  function startDrawing(event) {
    console.log("Empezando a pintar");
    isDrawing = true;
    points = [];
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  }

  function draw(event) {
    console.log("Pintando");
    if (!isDrawing) return;
    console.log("Seguimos pintando");
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    ctx.lineTo(x, y);
    ctx.stroke();

    points.push({ x, y });
  }

  function stopDrawing() {
    console.log("Dejamos de pintar");
    isDrawing = false;
    checkDrawing(); // Llama a la función para verificar el dibujo al detener el dibujo
  }

  function checkDrawing() {
    if (points.length >= 6) {
      const triangle1 = points.slice(0, 3);
      const triangle2 = points.slice(3, 6);

      if (isClosed(triangle1, 10) && isClosed(triangle2, 10)) {
        alert('¡Correcto! Has dibujado dos triángulos superpuestos. Pasaste la prueba.');
      } else {
        alert('Incorrecto. Intenta de nuevo.');
      }
    } else {
      alert('Dibuja dos triángulos superpuestos. Intenta de nuevo.');
    }
  }

  function isClosed(points, closeDistance) {
    const firstPoint = points[0];
    const lastPoint = points[points.length - 1];
    const distance = Math.sqrt(
      Math.pow(lastPoint.x - firstPoint.x, 2) + Math.pow(lastPoint.y - firstPoint.y, 2)
    );

    return distance < closeDistance;
  }
}