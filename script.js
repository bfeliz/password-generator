var generateBtn = document.querySelector('#generate');
var selectedList;

// user data

// array that will store the value of selected length and checkboxes
var userSelections = [];

// start processing user data and generate password on 'Show my password' button click
document.getElementById('submitBtn').onclick = function() {
    getSelectedLength();
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
            return 'You did not give sufficient parameters. You must select at least one character type. Please try again.';
        } else {
            return result;
        }
    }
    var password = generatePassword(userSelections[0]);
    var passwordText = document.querySelector('#password');
    passwordText.value = password;

    reset();
};

// function to get the users selected length and add to array
function getSelectedLength() {
    var selectedLength = document.getElementById('lengthCheck');
    var selectedValue =
        selectedLength.options[selectedLength.selectedIndex].value;

    userSelections.push(selectedValue);
    return userSelections;
}

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
// reset the arrays
function reset() {
    userSelections = [];
    passwordArray = [];
}
