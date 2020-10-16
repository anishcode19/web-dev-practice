var x= document.getElementById("signin");
var y= document.getElementById("signup");
var z= document.getElementById("btn");

function signup(){
  x.style.left="-40rem";
  y.style.left="5rem";
  z.style.left="11rem";
}

function signin(){
  x.style.left="5rem";
  y.style.left="45rem";
  z.style.left="0";
}

//  validation
const signinval = document.getElementById("signin");
const signupval = document.getElementById("signup");

const username = document.getElementsByClassName("username");
const password = document.getElementsByClassName("password");
const email = document.getElementsByClassName("email");

signinval.addEventListener('submit', (event)=>{
  event.preventDefault();
  validate();
})

signupval.addEventListener('submit',function(event){
  event.preventDefault();
  validate();
})

// email validation checking
const isEmail=(emailval)=>{
  var atsymbol=emailval.indexOf("@");
  var dot= emailval.lastIndexOf(".");
  if(atsymbol == -1) return false;
  if(atsymbol == 0) return false;
  if(dot== -1) return false;
  if(dot== 0) return false;
  if(dot<= atsymbol +3) return false;
  if(dot===emailval.length-1) return false;
  if((emailval.charAt(emailval.length-4)!=".")&&(emailval.length-3!=".")) return false;
  if(emailval.indexOf(" ")> 0 & emailval.indexOf(" ") < (emailval.length -1)) return false;
  return true;
}


const validate = () => {
  const usernameval =username.value.trim();
  const passwordval =password.value.trim();
  const emaival =email.value.trim();

  // first username checking
  if(usernameval===""){
    setErrorMsg(username);
  }else if(usernameval.length<=2){
    setErrorMsg(username);
  }else if(usernameval.length>16){
    setErrorMsg(username);
  }else if(!isNaN(usernameval)){
    setErrorMsg(username);
  }else{
    setSuccessMsg(username);
  }

  // Email checking

  if(emailval===""){
    setErrorMsg(email);
  }else if(!isEmail(emailval)){
    setErrorMsg(email);
  }else{
    setSuccessMsg(email);
  }

  // password validation

  if(passwordval=== ""){
    setErrorMsg(password);
  }else if (passwordval.length<8) {
    setErrorMsg(password);
  }else if (passwordval.length>17) {
    setErrorMsg(password);
  }else{
    setSuccessMsg(password);
  }

}

// setErrorMsg function

function setErrorMsg(input){
  const formControl = input.parentElement;
  formControl.className="input error;"
}

function setSuccessMsg(input){
  const formControl=input.parentElement;
  formControl.className="form_control success";
}
