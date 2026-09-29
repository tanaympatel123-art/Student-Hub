const password = document.getElementById("password");

password.addEventListener("input", function() {

    const value = password.value;

    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialRegex = /[@$!%*?&]/;


    if (lengthRegex.test(value)) {
        document.getElementById("lengthRequirement").textContent =
            "✅ At least 8 characters";
    } else {
        document.getElementById("lengthRequirement").textContent =
            "❌ At least 8 characters";
    }


    if (uppercaseRegex.test(value)) {
        document.getElementById("uppercaseRequirement").textContent =
            "✅ At least one uppercase letter";
    } else {
        document.getElementById("uppercaseRequirement").textContent =
            "❌ At least one uppercase letter";
    }


    if (lowercaseRegex.test(value)) {
        document.getElementById("lowercaseRequirement").textContent =
            "✅ At least one lowercase letter";
    } else {
        document.getElementById("lowercaseRequirement").textContent =
            "❌ At least one lowercase letter";
    }


    if (numberRegex.test(value)) {
        document.getElementById("numberRequirement").textContent =
            "✅ At least one number";
    } else {
        document.getElementById("numberRequirement").textContent =
            "❌ At least one number";
    }


    if (specialRegex.test(value)) {
        document.getElementById("specialRequirement").textContent =
            "✅ At least one special character";
    } else {
        document.getElementById("specialRequirement").textContent =
            "❌ At least one special character";
    }

});