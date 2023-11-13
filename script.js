const upperCaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseCharacter = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '~`!@#$%^&*()_-+={};:.,/?<>';

const password = document.getElementById('pass');
const userTotalNum = document.getElementById('total-num');
const userUpper = document.getElementById('uppercase');
const userLower = document.getElementById('lowercase');
const userNumber = document.getElementById('numbers');
const userSymbol = document.getElementById('symbols');


const getRandomData = (data) => {
    return data[Math.floor(Math.random() * data.length)]
}

const generatePassword = (password = " ") =>{
    if(userUpper.checked){
        password += getRandomData(upperCaseCharacter);
    }
    if(userLower.checked){
        password += getRandomData(lowerCaseCharacter);
    }
    if(userNumber.checked){
        password += getRandomData(numbers);
    }
    if(userSymbol.checked){
        password += getRandomData(symbols);
    }
    if(password.length < userTotalNum.value){
        return generatePassword(password);
    }
    document.getElementById('pass').value = truncate(password, userTotalNum.value);
}
generatePassword();


document.getElementById('btn').addEventListener("click", function(){
    generatePassword();
})

function truncate(str, num) {
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}