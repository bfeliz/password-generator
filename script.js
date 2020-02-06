// Assignment Code
var generateBtn = document.querySelector('#generate');

// user data
var userInput = [];

function writePassword() {
    // user input
    for (let i = 0; i < 1; i++) {
        var userLength = prompt('Pick a number between 8 and 128');
        userInput.push(userLength);
        if (userLength < 8 || userLength > 128) {
            alert(
                'That is not a valid choice, please refresh page to try again'
            );
            i--;
            return;
        }

        var userLowercase = confirm('Do you want to use lowercase letters?');
        userInput.push(userLowercase);

        var userUppercase = confirm('Do you want to use uppercase letters?');
        userInput.push(userUppercase);

        var userNumbers = confirm('Do you want to use numbers?');
        userInput.push(userNumbers);

        var userSpecial = confirm('Do you want to use special characters?');
        userInput.push(userSpecial);
    }

    // create password
    var passwordArray = [];
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '1234567890';
    var special = '!@#$%^&*()';

    if (userLowercase) {
        passwordArray.push(lowercase);
    }
    if (userUppercase) {
        passwordArray.push(uppercase);
    }
    if (userNumbers) {
        passwordArray.push(numbers);
    }
    if (userSpecial) {
        passwordArray.push(special);
    }

    var finalString = passwordArray.join('');

    function generatePassword(length) {
        var result = '';
        var parameters = finalString;
        var characterLength = parameters.length;
        for (var i = 0; i < length; i++) {
            result += parameters.charAt(
                Math.floor(Math.random() * characterLength)
            );
        }
        return result;
    }

    console.log(generatePassword(userInput[0]));
    var password = generatePassword(userInput[0]);
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// if (generateBtn.addEventListener('click')) {
//     function reloadPage() {
//         location.reload();
// }
// }
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
