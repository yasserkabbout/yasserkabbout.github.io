function userLogin(){

    var usernameFromInput= document.getElementById("usernameLoginField").value;
    var passwordFromInput = document.getElementById("passwordLoginField").value;

    var loginFlag=0;

    var request = new XMLHttpRequest();
    request.open('GET', 'http://recipefy-swe599.herokuapp.com/api/Users/', true);
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(usering => {
      if(usernameFromInput === usering.username && passwordFromInput==usering.password){
      
      var xhttp = new XMLHttpRequest();
xhttp.open("POST", "http://recipefy-swe599.herokuapp.com/api/Login_Logs/",true);
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var input = JSON.stringify(
  {
    "username": usernameFromInput
    
    
}


);
xhttp.send(input);
alert("Login Succses!");
      loginFlag=1;
      location.replace("file:///C:/Users/yasserkabbout/Desktop/Fall%202018-2019/SWE599-Final%20Project/webpages/homepage/index.html#home");

      }
      
      
    });
    if(loginFlag===0)
      alert("Password or Username mismatch! Please try again.");
  } else {
    Console.log("Failed to connect to API");
  }
}

request.send();




    

}