document.addEventListener("DOMContentLoaded", onLoad);

function onLoad(){

  document.getElementById("btn_send").addEventListener("click", checkEmail);
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
    });

  }else{
    let audio = new Audio("../assets/error1.ogg");
    audio.play();
  }
}