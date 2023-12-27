document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

  document.getElementById("btn_send").addEventListener("click", checkEmail);
  document.getElementById("check_laberinto").addEventListener("click", CheckLaberinto);
  document.getElementById("check_spoty").addEventListener("click", CheckSpotyWord);
  document.getElementById("check_laberinto").style.display = "none";
  document.getElementById("mondongo").style.display = "none-";
  //CreateCanvas();
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function checkEmail(){
  let email = document.getElementById("reason").value;
  let reason = document.getElementById("email").value;

  if(reason && email && validateEmail(reason)){

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
    //document.getElementById("content").style.display = "none";
    //document.getElementById("juanma_img").style.display = "block";
    //document.getElementById("secret_number").style.display = "block";
    //document.getElementById("check_laberinto").style.display = "block";
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
    document.getElementById("check_spoty").style.display = "block";
    document.getElementById("check_laberinto").style.display = "none";

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
    let audio = new Audio("../assets/mondongo.mp3");
    setTimeout(() => {
      document.getElementById("pista1").style.display = "none";
      document.getElementById("mondongo_img").style.display = "block";
      audio.play();
      setTimeout(() => {
        document.getElementById("mondongo_img").style.display = "none";
        document.getElementById("mondongo").style.display = "block";
        CreateCanvas();
      }, 1000);
    }, 1100);
  }else{
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }
}


function angleBetweenThreePoints(A, B, C) {
  var AB = Math.sqrt(Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2));
  var BC = Math.sqrt(Math.pow(B.x - C.x, 2) + Math.pow(B.y - C.y, 2));
  var AC = Math.sqrt(Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2));

  var angleInRadians = Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB));
  var angleInDegrees = (angleInRadians * 180) / Math.PI;

  return angleInDegrees;
}

function isInRange(number, rangeStart, rangeEnd) {
  return number >= rangeStart && number <= rangeEnd;
}

function MagnitudeRange(vector1, vector2, threshold) {
  let distance = Math.sqrt(Math.pow(vector2.x - vector1.x, 2) + Math.pow(vector2.y - vector1.y, 2));

  console.log("Distance-> ", distance);
  return distance <= threshold;
}

function CreateCanvas() {
  var canvas = document.createElement('canvas');
  var canvasContainer = document.getElementById('canvas_container');
  canvas.classList.add("canvas_block");

  var drawIcon = document.createElement('i');
  drawIcon.className = 'fas fa-pen';
  drawIcon.id = 'draw_icon';


  canvasContainer.appendChild(drawIcon);
  canvasContainer.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var drawing = false;
  var points = []; // Nueva variable para almacenar los puntos
  let pos = { x: 0, y: 0 };

  resize();

  window.addEventListener('resize', resize);
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchend', stopDrawing);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchcancel', stopDrawing);

  

  function startDrawing(e) {
    drawing = true;
    setPosition(e);
    points = []; // Limpiar puntos al comenzar el dibujo
    e.preventDefault();
  }

  function stopDrawing() {
    drawing = false;
    if (isTriangle(points)) {
     // alert("Noo!! Descubriste mi secreto...");
      let audio = new Audio("../assets/zelda.mp3");
      audio.play();
      setTimeout(() => {
        document.body.classList.add("ocultar");
        setTimeout(() => {
          localStorage.setItem("qr2",true)
          window.location.href = "../index.html";
          
        }, 1500);
      }, 2000);
    } else {
      console.log("No es un triángulo");
      canvas.width = canvas.width;
    }
    pos = { x: 0, y: 0 };

    // Reset del canvas cada vez que suelta el dedo
  }

  function draw(e) {
    if (!drawing) return;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#c0392b';

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
    e.preventDefault();

    // Almacena los puntos mientras se dibuja
    let vec2 = {"x" : pos.x, "y" : pos.y};
    //points.push({ x: pos.x, y: pos.y });
    points.push(vec2);
    console.log(points)
  }

  function setPosition(e) {
    var rect = canvas.getBoundingClientRect();
    if (e.touches) {
      pos.x = e.touches[0].clientX - rect.left;
      pos.y = e.touches[0].clientY - rect.top;
    } else {
      pos.x = e.clientX - rect.left;
      pos.y = e.clientY - rect.top;
    }
  }

  function resize() {
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
  }

  function isTriangle(points) {

    
    let firstPoint = {x : points[0].x, y : points[0].y};
    let secondPoint = {x : 0, y : 0};
    let thirdPoint = {x : 0, y : 0};
    if (points.length < 3) {
      return false;
    }

    let bajamos = false;
    let cagadon = false;
    for(let i = 1; i < points.length; i++){
      if(points[i].y <= points[i-1].y){
        // El de ahora es menor que el de antes, todo bien
        if(bajamos){
          // En este momento ya habiamos empezado a bajar, si se vuelve a dar el caso esque algo ha hecho mal
          cagadon = true;
          console.log("cagaste");
        }
      }else{
        // ha empezado a bajar
        if(!bajamos){
          bajamos = true;
          secondPoint = points[i];
        }
        
      }
    }
    
    // Checkeamos el ultimo punto
    let izquierda = false;
    let otro_cagadon = false;
    for(let i = 1; i < points.length; i++){
      // Si soy mayor al anterior es que estoy tirando hacia la derecha
      if(points[i].x >= points[i-1].x){
        
        if(izquierda){
          otro_cagadon = true;
          console.log("cagaste otra vez");
        }
        
      }else{
        // Aqui he empezado a dibujar hacia la izquierda
        if(!izquierda){
          izquierda = true;
          thirdPoint = points[i];
        }
      }
    }
    console.log("lenght: " , points.length);
    console.log("First-> " , firstPoint);
    console.log("Second-> " , secondPoint);
    console.log("Third-> ", thirdPoint);

    let angle1 = angleBetweenThreePoints(firstPoint, secondPoint, thirdPoint);
    let angle2 = angleBetweenThreePoints(secondPoint, thirdPoint, firstPoint);
    let angle3 = angleBetweenThreePoints(thirdPoint, firstPoint, secondPoint);

    console.log("First angle ", angle1);
    console.log("Second angle ", angle2);
    console.log("Third angle ", angle3);

    let isTriangle = true;

    if(isInRange(angle1, 45,75)){
      console.log("Primer angulo ok")
    }else{
      console.log("Es una cosa rara")
      isTriangle = false;
    }
    if(isInRange(angle2, 45,75)){
      console.log("Segundo angulo ok")
    }else{
      console.log("Es una cosa rara")
      isTriangle = false;
    }
    if(isInRange(angle3, 45,75)){
      console.log("Tercer angulo ok")
    }else{
      console.log("Es una cosa rara")
      isTriangle = false;
    }
  
   return isTriangle && MagnitudeRange(points[0],points[points.length-1], 10);
  }
  
 
}




