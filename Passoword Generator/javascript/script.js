const characterRange = document.getElementById("characterRange");
const characterRangeNumber = document.getElementById("characterRangeNumber");
const form = document.querySelector("#form");
const passwordDissplay = document.querySelector("#passwordDissplay");

const includeUppercaseElement = document.querySelector("#includeUppercase").checked;
const includeNumberElement = document.querySelector("#includeNumber").checked;
const includeSymbolElement = document.querySelector("#includeSymbol").checked;
const uppercase_char = arrayFromLowToHigh(65,90);
const lower_char = arrayFromLowToHigh(97,122);
const include_number = arrayFromLowToHigh(48,57);
const include_symbol = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));





characterRange.addEventListener("input",syncCharacterRange);
characterRangeNumber.addEventListener("input",syncCharacterRange);

function syncCharacterRange(e){
  const value = e.target.value
  // console.log(value);
  characterRange.value = value;
  characterRangeNumber.value =value;
}



form.addEventListener('submit',function(e){
  e.preventDefault();
  const characterAmount = characterRange.value;
  const password = generatePassword(characterAmount,includeUppercaseElement,includeNumberElement,includeSymbolElement);
  passwordDissplay.innerText = password;
})


function generatePassword(characterAmount,includeUppercaseElement,includeNumberElement,includeSymbolElement){
  let charCodes = lower_char;
  if(includeUppercaseElement) {charCodes.concat(uppercase_char)}
  if(includeNumberElement) charCodes.concat(include_number)
  if(includeSymbolElement) charCodes.concat(include_symbol)
  const passwordCharacter = [];
  for (var i = 0; i < characterAmount; i++) {
    const character = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacter.push(String.fromCharCode(character))
  }
  return passwordCharacter.join('');
}

function arrayFromLowToHigh(low,high){
  const arr =[];
  for (var i = low; i <= high; i++) {
      arr.push(i);
  }
  return arr;
}
























// comment
