function validation() {
  let user = document.getElementById("user").value;
  let pas = document.getElementById("pass").value;
  let conpass = document.getElementById("confirmpass").value;
  let number = document.getElementById("mobilenumber").value;
  let mail = document.getElementById("email").value;

  if (user == "") {
    document.getElementById("username").innerHTML = "** Please fill the Username.";
    return false;
  }

  if ((user.length <= 2) || (user.length > 20)) {
    document.getElementById("username").innerHTML = "** lenght must be between 3 and 20.";
    return false;
  }

  if (!isNaN(user)) {
    document.getElementById("username").innerHTML = "** Only characters are allowed.";
    return false;
  }


  if (pas == "") {
    document.getElementById("password").innerHTML = "** Please fill the Password";
    return false;
  }

  if ((pas.length <= 7) || (pas.length > 16)) {
    document.getElementById("password").innerHTML = "** lenght must be between 8 and 16.";
    return false;
  }

  // if (conpass == "") {
  //   document.getElementById("conpassword").innerHTML = "** Please fill it";
  //   return false;
  // }

  if (pas == conpass) {
    return true;
  } else {
    document.getElementById("conpassword").innerHTML = "**  both not Match.";
    return false;
  }

  if (number == "") {
    document.getElementById("number").innerHTML = "** Please fill the Mobile Number";
    return false;
  }
  if (isNaN(number)) {
    document.getElementById("number").innerHTML = "** not a number";
    return false;
  }

  if (number.length != 10) {
    document.getElementById("number").innerHTML = "**Number Incorrect";
    return false;
  }
  if ((number.charAt(0) != 9) && (number.charAt(0) != 8) && (number.charAt(0) != 7) && (number.charAt(0) != 6)) {
    document.getElementById('number').innerHTML = "**  Invalid number!";
    return false;
  }

  if (mail == "") {
    document.getElementById("emailid").innerHTML = "** Please fill Your Email";
    return false;
  }
  if (mail.indexOf('@') <= 0) {
    document.getElementById("emailid").innerHTML = "** @ at Invalid position";
    return false;
  }
  if((mail.charAt(mail.length-4)!='.')&&(mail.charAt(mail.length-3)!='.')){
    document.getElementById("emailid").innerHTML = "** . at incorrect position";
    return false;
  }
  if(mail.indexOf('@')== -1){
    document.getElementById("emailid").innerHTML = "** Invalid Email '@' missing";
    return false;
  }
}
