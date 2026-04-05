function goNext(){

let name = document.getElementById("name").value;
let dob = document.getElementById("dob").value;

if(name=="" || dob==""){
alert("Please enter name and date of birth");
return;
}

localStorage.setItem("username",name);
localStorage.setItem("userdob",dob);

document.getElementById("message").innerHTML="Hey "+name+" click GO to see your age";

window.location="Result.html";
}


if(window.location.pathname.includes("Result.html")){

let name = localStorage.getItem("username");
let dob = localStorage.getItem("userdob");

document.getElementById("username").innerHTML="Hey "+name+"!! <br> Your Age is";

let birthDate = new Date(dob);
let today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();

if(days < 0){
months--;
days += 30;
}

if(months < 0){
years--;
months += 12;
}

document.getElementById("years").innerHTML=years;
document.getElementById("months").innerHTML=months;
document.getElementById("days").innerHTML=days;

}