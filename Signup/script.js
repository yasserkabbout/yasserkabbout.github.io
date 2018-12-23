function UserSignup(){

var usernameField = document.getElementById("usernameField").value;
var emailField = document.getElementById("emailField").value;
var passwordField = document.getElementById("passwordField").value;


var xhttp = new XMLHttpRequest();
xhttp.open("POST", "http://recipefy-swe599.herokuapp.com/api/Users/",true);
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var input = JSON.stringify(
  {
    "username": usernameField,
    "email": emailField,
    "password": passwordField
    
}


);
xhttp.send(input);
alert("Signup is successful. you will be redirected to the Login Screen");


location.replace("file:///C:/Users/yasserkabbout/Desktop/Fall%202018-2019/SWE599-Final%20Project/webpages/Login/index.html");



}