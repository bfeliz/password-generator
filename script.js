var generateBtn = document.querySelector('#generate');
var selectedList;

// user data

// array that will store the value of selected length and checkboxes
var userSelections = [];

// function to get the users selected length and add to array
function getSelectedLength() {
    var selectedLength = document.getElementById('lengthCheck');
    var selectedValue =
        selectedLength.options[selectedLength.selectedIndex].value;

    userSelections.push(selectedValue);
    return userSelections;
}

document.getElementById('submitLengthBtn').onclick = function() {
    getSelectedLength(this.form);
};

// function to get the users selected parameters from the checkboxes
function getSelectedChbox(from) {
    var checkboxItems = from.getElementsByTagName('input');
    var reviewCheckbox = checkboxItems.length;

    for (var i = 0; i < reviewCheckbox; i++) {
        if (
            checkboxItems[i].type == 'checkbox' &&
            checkboxItems[i].checked == true
        )
            userSelections.push(checkboxItems[i].value);
    }
    return userSelections;
}

// start processing user data and generate password on 'Show my password' button click
document.getElementById('submitBtn').onclick = function() {
    var selectedList = getSelectedChbox(this.form);

    // create password array using user parameters
    var passwordArray = [];
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '1234567890';
    var special = '!@#$%^&*()';

    if (selectedList.includes('lowercase')) {
        passwordArray.push(lowercase);
    }
    if (selectedList.includes('uppercase')) {
        passwordArray.push(uppercase);
    }
    if (selectedList.includes('numbers')) {
        passwordArray.push(numbers);
    }
    if (selectedList.includes('special')) {
        passwordArray.push(special);
    }

    var finalString = passwordArray.join('');

    // generate password by feeding in final password string
    function generatePassword(length) {
        var result = '';
        var parameters = finalString;
        var characterLength = parameters.length;
        for (var i = 0; i < length; i++) {
            result += parameters.charAt(
                Math.floor(Math.random() * characterLength)
            );
        }

        // output to user display with further instructions or generated password
        if (result === '') {
            return 'You did not give sufficient parameters. You either forgot to click the Select Length button, or you did not select any character types. Please refresh the page and try again.';
        } else {
            return result + '\n \n Refresh screen to start again';
        }
    }
    var password = generatePassword(userSelections[0]);
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
};
