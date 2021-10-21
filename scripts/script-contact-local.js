
//Evento para inicializar el evento de registro de usuarios1

document.getElementById("sign-up-btn").addEventListener("click", registerUser);

//Funcion de registro de usuario
function registerUser() {
    // obtener valores del register
    let fullName = document.getElementById("full-name"). value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("username1").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password2 != password1) {
        alert("Passwords not match");
    } if (password1.length < 8) {
        alert("Password must have at least 8 characters");
    } else {
        //Encriptacion de la contrasena
        password1 = btoa(password1);
        // objeto con los datos que se obtuvieron del registerUser
        var user = new Object();
        user.name = name;
        user.mail = email;
        user.password = password1;
        user.fullname = fullName;
        //Guarda las variables en formato JSON en una nueva variable llamada local
        var local = JSON.stringify(user);
        localStorage.setItem(`user data`, local);
        // alert que se creo la cuenta
        alert("You have sucesfully created a account");
    }
}

//Validacion al hacer login
var attempt = 3; // Variable para contar los intentos restantes
//Evento para inicializar el evento de ingreso de usuarios
document.getElementById("sign-in-btn").addEventListener("click", validate);
//Funcion para hacer login
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
password = btoa(password);
let usuario = JSON.parse(localStorage.getItem(`user data`));
if (username == usuario.name && password == usuario.password){ 
alert ("You sign in successfully");
//window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementa en uno la cantidad de intentos
alert("You have " + attempt +" attempts left");
// Desabilita los campos tras tres intentos fallidos de login
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}