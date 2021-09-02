const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const displayMessage = document.querySelector("#display-message");

checkButton.addEventListener("click", checkBirthdateLuckyOrNot );

function checkBirthdateLuckyOrNot(){
    const dob =dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum  &&  dob && luckyNumber.value){
            compareValues(sum,luckyNumber.value);
    }else{
        displayMessage.innerText="Please enter both the fields 😡";
    }
}
function compareValues(sum , luckyNumber)
  {  if (sum % luckyNumber === 0)
    {
            displayMessage.innerText = "Bravo!  Your birthdate is lucky 😻";
    }else{
        displayMessage.innerText = "Your birthdate is not lucky 🤐 ";
    }

}

function calculateSum(dob){
    dob= dob.replaceAll("-","0");
    let sum =0;
    for(let index=0;index<dob.length;index++){
      sum = sum + Number(dob.charAt(index));
    }
    return sum;
}