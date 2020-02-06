// Assignment Code
var generateBtn = document.querySelector('#generate');

// user data
var userInput = [];

function writePassword() {
    // user input
    for (let i = 0; i < 1; i++) {
        var userLength = prompt('Pick a number between 8 and 128');
        userInput.push(userLength);
        console.log(userInput);
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
        console.log(userInput);
    }

    // create password
    if (!userUppercase && !userNumbers && !userSpecial) {
        function generatePassword(length) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz';
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
            var characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
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
