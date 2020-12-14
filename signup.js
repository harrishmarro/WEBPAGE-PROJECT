function create(){
 var username=document.getElementById("username").Value;
 var email=document.getElementById("email").Value;
 var mobilenumber=document.getElementById("mobilenumber").Value;
 var password=document.getElementById("password").Value;
 
 if(username!='' && password!='')
 {
     console.log("assigned")
     alert("signup sucessful")
     alert(username)
     alert(email)
     alert(mobilenumber)
     alert(password)
 }
 else{
     alert("sign up failed")
 }


function validate(){
var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
console.log(pass,user);
if(user==username && pass==password)
{
    alert("login sucessful")
    console.log("New page loading")
    /*window.location.href="file:///Users/mac/Desktop/project/dummy.html";*/
    console.log("New page Redirected")
    console.log(pass,user)
}
else{
    alert("login failed")
    console.log(pass,user)
}

} 