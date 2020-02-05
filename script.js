// probably will need to reassign to my modal show password button
// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}
// Probably will need to reassign to my modal show password button
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// function generatePassword() {
//     return 'SuperSecretPassword1098';
// }

// user data
var userInput = [];

for (let i = 0; i < 1; i++) {
    var userLength = prompt('Pick a number between 8 and 128');
    userInput.push(userLength);
    console.log(userInput);
    if (userLength < 8 || userLength > 128) {
        alert('That is not a valid choice');
        i--;
        continue;
    }

    var userLowercase = confirm('Do you want to use lowercase letters?');
    userInput.push(userLowercase);
    console.log(userInput);

    var userUppercase = confirm('Do you want to use uppercase letters?');
    userInput.push(userUppercase);
    console.log(userInput);

    var userNumbers = confirm('Do you want to use numbers?');
    userInput.push(userNumbers);
    console.log(userInput);

    var userSpecial = confirm('Do you want to use special characters?');
    userInput.push(userSpecial);
    console.log(userInput);
}

// create password

if (!userUppercase && !userNumbers && !userSpecial) {
    function generatePassword(length) {
        var result = '';
        var characters = 'bcdefghijklmnopqrstuvwxyz';
        // 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
} else if (!userNumbers && !userSpecial) {
    function generatePassword(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
} else if (!userSpecial) {
    function generatePassword(length) {
        var result = '';
        var characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
} else {
    function generatePassword(length) {
        var result = '';
        var characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
}

console.log(generatePassword(userInput[0]));
