


function cal_bmi(){  
    
    var a = document.getElementById("weight").value;
    var b = document.getElementById("height").value;  
    
    var res =a/(b*b);

document.getElementById("result").innerText = "Calculated BMI = " + res;
 
if(res<18.5)
  document.getElementById("health").innerText = "Underweight";
else if(res>=18.5||res<24.9)
  document.getElementById("health").innerText = "Healthy";

else if(res>=25.0||res<29.9)
  document.getElementById("health").innerText = "Overweight";

else if(res>30.0)
  document.getElementById("health").innerText = "Obesity";

 }
 alert("Hello..");  