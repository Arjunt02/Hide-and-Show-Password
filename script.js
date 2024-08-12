


let eyeicon=document.getElementById("eyeicon")
let password=document.getElementById("password")

eyeicon.onclick=function(){
    if(password.type=="password"){
        password.type="text";
        eyeicon.src="hide-eye.png"
    }
    else{
         password.type="password"
         eyeicon.src="eye.png"
    }
}