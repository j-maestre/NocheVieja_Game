document.addEventListener("DOMContentLoaded", onLoad);

var global_number = -1;

function onLoad(){
  document.getElementById("check_passwd").addEventListener("click", checkPasswd);

  let random = -1;
  do{
    random = Math.floor(Math.random() * 21);
    console.log("Random-> ", random);
  }while(random == 8 || random == 14 || random == 18);

  let title = document.getElementById("text_principal").innerHTML = random;

  global_number = random;
}


function checkPasswd(){
  let value = document.getElementById("password").value;
  console.log("Valor introducido: ",value, "tipo del valor: ", typeof(value), "Numero del array: ", password_position[value]);
  if(password_position[global_number] == value){
    console.log("eres un genio de la lampara")
    document.body.classList.add("ocultar");
    localStorage.setItem("qr4", true);
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1800);
  }else{
    console.log("eres un palurdo");
    document.getElementById("password").value = "";
    onLoad();
  }

}

