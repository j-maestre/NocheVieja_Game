document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

  document.getElementById("btn_send").addEventListener("click", checkEmail);
  document.getElementById("check_laberinto").addEventListener("click", CheckLaberinto);
  document.getElementById("check_laberinto").addEventListener("click", CheckSpotyWord);
  document.getElementById("check_laberinto").style.display = "none";
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

  if(value == 25){
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
  }else{
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }
}