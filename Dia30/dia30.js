document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

  document.getElementById("btn_send").addEventListener("click", checkEmail);
  document.getElementById("check_laberinto").addEventListener("click", CheckLaberinto);
  document.getElementById("check_laberinto").addEventListener("click", CheckSpotyWord);
  document.getElementById("check_laberinto").style.display = "none";
  CreateCanvas();
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
        CreateCanvas();
      }, 1000);
    }, 1100);
  }else{
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }
}

function CreateCanvas() {
  var canvas = document.createElement('canvas');
  var canvasContainer = document.getElementById('canvas_container');
  canvasContainer.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  resize();

  var pos = { x: 0, y: 0 };

  window.addEventListener('resize', resize);
  document.addEventListener('mousedown', setPosition);
  document.addEventListener('mousemove', draw);
  document.addEventListener('mouseenter', setPosition);

  // Agregar eventos táctiles
  canvas.addEventListener('touchstart', handleTouchStart, false);
  canvas.addEventListener('touchmove', handleTouchMove, false);

  function setPosition(e) {
    var rect = canvas.getBoundingClientRect();
    pos.x = e.clientX - rect.left;
    pos.y = e.clientY - rect.top;
  }

  function handleTouchStart(e) {
    if (e.touches.length === 1) {
      var touch = e.touches[0];
      setPosition(touch);
    }
  }

  function handleTouchMove(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
      var touch = e.touches[0];
      setPosition(touch);
      draw(e);
    }
  }

  function resize() {
    canvas.width = canvasContainer.clientWidth;
    canvas.height = canvasContainer.clientHeight;
  }

  function draw(e) {
    if (e.buttons !== 1 && e.type !== 'touchmove') return;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#c0392b';

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
  }
}


