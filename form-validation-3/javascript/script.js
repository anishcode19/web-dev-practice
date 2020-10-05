

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const number=document.getElementById("number");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");


// Add event to form

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
})

// Defining isEmail function

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


// defining validate function

const validate = () =>{
  const usernameval=username.value.trim();
  const emailval= email.value.trim();
  const numberval=number.value.trim();
  const passwordval=password.value.trim();
  const cpasswordval=cpassword.value.trim();

// username checking

  if(usernameval===""){
    setErrorMsg(username,"Username should not be Blank.");
  }else if (usernameval.length<=2) {
    setErrorMsg(username,"Username must have atleast 3 character.");
  }else if (usernameval.length>16) {
    setErrorMsg(username,"Username have atmost 16 character.");
  }else if (!isNaN(usernameval)) {
    setErrorMsg(username,"wrong formate.");
  }else{
    setSuccessMsg(username);
  }

// email checking

  if(emailval===""){
    setErrorMsg(email,"Email must not blank.");
  }else if (!isEmail(emailval)) {
    setErrorMsg(email, "Invalid email.");
  }else{
    setSuccessMsg(email);
  }

// number validation

if(numberval=== ""){
  setErrorMsg(number,"Phone Number can't be black.");
}else if (numberval.length!=10) {
  setErrorMsg(number,"Invalid Mobile Number.");
}else if(isNaN(numberval)){
  setErrorMsg(number,"Invalid Mobile Number.");
}else if((numberval.charAt(0)!=9) && (numberval.charAt(0)!=8) && (numberval.charAt(0)!=7) && (numberval.charAt(0)!=6)){
  setErrorMsg(number,"Invalid Mobile Number.");
}else{
  setSuccessMsg(number)
}

  // password Validation
  if(passwordval=== ""){
    setErrorMsg(password,"Password can't be null.");
  }else if (passwordval.length<8) {
    setErrorMsg(password,"Minimum  8 character.");
  }else if (passwordval.length>17) {
    setErrorMsg(password,"Max 16 character.");
  }else{
    setSuccessMsg(password);
  }

  // confirm password Validation

  if(cpasswordval=== ""){
    setErrorMsg(cpassword,"Confirm Password can't be null.");
  }else if (cpasswordval !=passwordval) {
    setErrorMsg(cpassword,"Re-enter confirm password.");
  }else{
  setSuccessMsg(cpassword);
  }

  // end of validate function
}

// setErrorMsg function

function setErrorMsg(input,errorMessage){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small');
  formControl.className="form_control error";
  small.innerText=errorMessage;
}

// setSuccessMsg function
function setSuccessMsg(input){
  const formControl=input.parentElement;
  formControl.className="form_control success";
}
