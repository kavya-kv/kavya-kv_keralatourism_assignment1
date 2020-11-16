var email = document.getElementById("email");
var error = document.getElementById("error");
var password=document.getElementById("password");
var error2 = document.getElementById("error2");

function validate(){
    var regxp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if(regxp.test(email.value)){
        error.innerHTML = "Email address is valid";
        error.style.color= "green";
        return true;
    }
    else{
        error.innerHTML = "Please Enter Valid Email address";
        error.style.color = "red";
        return false;
    }
}

function validatepass(password){
    if(password.length == 0){
        document.getElementById("error2").innerHTML ="";
        return false;
    }

    var matchedcase = new Array();
    matchedcase.push("[$@$!%*#?&]");
    matchedcase.push("[A-Z]");
    matchedcase.push("[0-9]");
    matchedcase.push("[a-z]");

    var ctr =0;
    for(var i=0;i<matchedcase.length;i++){
        if(new RegExp(matchedcase[i]).test(password)){
            ctr++;
        }
    }

    var color ="";
    var strength = "";
    switch(ctr){
        case 0:
        case 1:
        case 2:
            strength ="very weak";
            
            color= "red";
            break;
        case 3:
            strength ="medium";
            color= "orange";
            break;
    

        case 4:
            strength ="strong";
            color= "green";
            break;
}
     
document.getElementById("error2").innerHTML =strength;
document.getElementById("error2").style.color = color;



}    
