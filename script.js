const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input, message) {

    // outline input border with red- error class in CSS
    // Gets parent element, div with class form-control
    // input is the child
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    // query selector can take in a tag, class itself, etc
    const small = formControl.querySelector('small')
    // message is being passed in 
    small.innerText = message

}

// Show success outline - if I type something in and submit, it's green bc it passes
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Check email is valid with regex
// Matches an email address into a variable called re
// Test method takes in w/e we pass in to see if it matches - if it does return True else return False
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArr) {
    // Loop through array and do the check on each one

    // Once we submit, we run checkRequired and console.log all inputs
    inputArr.forEach(input => {
        console.log(input.value)
        // trim() trims whitespace
        // input is the actual el, input el has an id property which gives us w/e the id is
        if (input.value.trim() === '') {
            console.log(input.id)
            //template literal {input.id} vs getFieldName
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// Get fieldname
function getFieldName(input) {
    // Get 1st letter, make uppercase, add rest of word
    return input.id[0].toUpperCase() + input.id.slice(1)
}


// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(username.value)
    checkRequired([username, email, password, password2])

    // // Do this for every field
    // if (username.value === '') {
    //     showError(username, 'Username is required')  //show red error message 
    // } else {
    //     showSuccess(username) // show green outline for success
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is required')  //show red error message 
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid')
    // } else {
    //     showSuccess(email) // show green outline for success
    // }


    // if (password.value === '') {
    //     showError(password, 'Password is required')  //show red error message 
    // } else {
    //     showSuccess(password) // show green outline for success
    // }



    // if (password2.value === '') {
    //     showError(password2, 'Confirm password is required')  //show red error message 
    // } else {
    //     showSuccess(password2) // show green outline for success
    // }
})