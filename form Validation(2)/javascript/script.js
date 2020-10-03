const form = document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const number =document.getElementById("number");
const password =document.getElementById("password");
const cpassword =document.getElementById("cpassword");


// add evevt

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
})

const isEmail=(emailval) =>{
  var atsymbol=emailval.indexOf("@");
  if(atsymbol < -1) return false;
  var dot = emailval.lastIndexOf(".");
  if(dot <= atsymbol + 3) return false;
  if(dot===emailval.length -1) return false;
  if((emailval.charAt(emailval.length -4)!='.')&&(emailval.charAt(emailval.length-3)!='.')) return false;
  return true;
}

const validate = () => {
  const usernameval =username.value.trim();
  const emailval =email.value.trim();
  const numberval =number.value.trim();
  const passwordval =password.value.trim();
  const cpasswordval =cpassword.value.trim();

  if(usernameval=== ""){
    setErrorMsg(username,"username can't be black.");
  }else if (usernameval.length<=2) {
    setErrorMsg(username,"username name too sort.");
  }else if (usernameval.length>=20) {
    setErrorMsg(username,"username name too long.");
  }else {
    setSuccessMsg(username);
  }


  if(emailval=== ""){
    setErrorMsg(email,"email can't be black.");
  }else if (!isEmail(emailval)) {
    setErrorMsg(email,"Invalid email.");
  }else{
  setSuccessMsg(email);
  }

  if(numberval=== ""){
    setErrorMsg(number,"Phone Number can't be black.");
  }else if (numberval.length!=10) {
    setErrorMsg(number,"Invalid Mobile Number.");
  }else{
  setSuccessMsg(number);
  }

  if(passwordval=== ""){
    setErrorMsg(password,"Password can't be null.");
  }else if (passwordval.length<8) {
    setErrorMsg(password,"Minimum  8 character.");
  }else if (passwordval.length>17) {
    setErrorMsg(password,"Max 16 character.");
  }else{
  setSuccessMsg(password);
  }

  if(cpasswordval=== ""){
    setErrorMsg(cpassword,"Confirm Password can't be null.");
  }else if (cpasswordval !=passwordval) {
    setErrorMsg(cpassword,"Re-enter confirm password.");
  }else{
  setSuccessMsg(cpassword);
  }

}


function setErrorMsg(input,errorMessage){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small');
  formControl.className="form-control error";
  small.innerText=errorMessage;
}

function setSuccessMsg(input){
  const formControl=input.parentElement;
  formControl.className="form-control success";
}
