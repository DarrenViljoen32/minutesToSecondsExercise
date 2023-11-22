//MinutesToSeconds

//function to calculate how many seconds there are
function minutesToSeconds(){
    let enterMinutes = document.getElementsByTagName(`input`)[0].value;

    //validation. must be a number
    let text;
     if(isNaN(enterMinutes)){
         text = `Input not valid. Please enter a number.`;
     }else{
         text = ``;
     }
     document.getElementsByTagName(`p`)[1].innerText = text;

     //calculation
    let result = enterMinutes * 60;
    return document.getElementsByTagName(`input`)[1].value = `${result.toFixed(2)} seconds`;
    
}
