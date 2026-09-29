const form = document.getElementById("registrationForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
const course = document.getElementById("course");
const year = document.getElementById("year");
const terms = document.getElementById("terms");

const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");
const courseError = document.getElementById("courseError");
const yearError = document.getElementById("yearError");
const genderError = document.getElementById("genderError");
const termsError = document.getElementById("termsError");

const successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;

    fullnameError.textContent = "";
    emailError.textContent = "";
    mobileError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    courseError.textContent = "";
    yearError.textContent = "";
    genderError.textContent = "";
    termsError.textContent = "";
    successMessage.textContent = "";


    // Name validation
    const namePattern = /^[A-Za-z][A-Za-z\s.'-]{2,49}$/;

    if (fullname.value.trim() === "") {

        fullnameError.textContent = "Please enter your full name.";
        valid = false;

    } else if (!namePattern.test(fullname.value.trim())) {

        fullnameError.textContent = "Name should contain only letters and spaces.";
        valid = false;

    }


    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Please enter your email address.";
        valid = false;

    } else if (!emailPattern.test(email.value.trim())) {

        emailError.textContent = "Please enter a valid email address.";
        valid = false;

    }


    // Mobile validation
    const mobilePattern = /^[6-9]\d{9}$/;

    if (mobile.value.trim() === "") {

        mobileError.textContent = "Please enter your mobile number.";
        valid = false;

    } else if (!mobilePattern.test(mobile.value.trim())) {

        mobileError.textContent = "Enter a valid 10-digit mobile number.";
        valid = false;

    }


    // Password validation
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.value === "") {

        passwordError.textContent = "Please enter a password.";
        valid = false;

    } else if (!passwordPattern.test(password.value)) {

        passwordError.textContent =
            "Password must contain 8+ characters, uppercase, lowercase, number and special character.";

        valid = false;

    }


    // Confirm password validation
    if (confirmPassword.value === "") {

        confirmError.textContent = "Please confirm your password.";
        valid = false;

    } else if (confirmPassword.value !== password.value) {

        confirmError.textContent = "Passwords do not match.";
        valid = false;

    }


    // Course validation
    if (course.value === "") {

        courseError.textContent = "Please select your course.";
        valid = false;

    }


    // Year validation
    if (year.value === "") {

        yearError.textContent = "Please select your year of study.";
        valid = false;

    }


    // Gender validation
    const genderSelected =
        document.querySelector('input[name="gender"]:checked');

    if (!genderSelected) {

        genderError.textContent = "Please select your gender.";
        valid = false;

    }


    // Terms validation
    if (!terms.checked) {

        termsError.textContent =
            "You must accept the Terms and Conditions.";

        valid = false;

    }


    // Final result
    if (valid) {

        successMessage.textContent =
            "Registration successful! Your details have been validated.";

    }

});