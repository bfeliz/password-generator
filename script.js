// Assignment Code
var generateBtn = document.querySelector('#generate');
var selectedList;
// user data
// array that will store the value of selected length and checkboxes
var userSelections = [];

function getSelectedLength() {
    var selectedLength = document.getElementById('lengthCheck');
    var selectedValue =
        selectedLength.options[selectedLength.selectedIndex].value;

    userSelections.push(selectedValue);
    return userSelections;
}

document.getElementById('submitLengthBtn').onclick = function() {
    var selectedList = getSelectedLength(this.form);
};

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

document.getElementById('submitBtn').onclick = function() {
    var selectedList = getSelectedChbox(this.form);

    // create password
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
    var password = generatePassword(userSelections[0]);
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
};
