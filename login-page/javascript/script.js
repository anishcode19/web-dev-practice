const form =document.getElementById("form");
const username= document.getElementById("username");
const password = document.getElementById("password");


// adding event to formate

form.addEventListener('submit',(event) =>{
  event.preventDefault();
  validation();
})


// validation function

const validation = () =>{
  const usernameval= username.value.trim();
  const passwordval=password.value.trim();

  // username checking

  if(usernameval ===""){
    setErrorMsg(username);
  }else if(usernameval.length<=2){
    setErrorMsg(username);
  }else if (usernameval.length>16) {
    setErrorMsg(username);
  }else if (!isNaN(usernameval)) {
    setErrorMsg(username);
  }else{
    setSuccessMsg(username);
  }

  // password checking
  if (passwordval=="") {
    setErrorMsg(password);
  }else if(passwordval.length<8){
    setErrorMsg(password);
  }else if(passwordval.length>17){
    setErrorMsg(password);
  }else{
    setSuccessMsg(password);
  }
}

// setErrorMsg function

function setErrorMsg(input){
  const formControl = input.parentElement;
  formControl.className="form_control error";
}

// set setSuccessMsg function

function setSuccessMsg(input){
  const formControl =input.parentElement;
  formControl.className="form_control success";
}
