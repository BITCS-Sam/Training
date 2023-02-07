const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const sexSelect = document.getElementById("sex");
const adminRadio = document.getElementById("admin");
const userRadio = document.getElementById("user");
const perm1Checkbox = document.getElementById("perm1");
const perm2Checkbox = document.getElementById("perm2");
const perm3Checkbox = document.getElementById("perm3");
const perm4Checkbox = document.getElementById("perm4");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const sexError = document.getElementById("sexError");
const roleError = document.getElementById("roleError");
const permissionError = document.getElementById("permissionError");
const confirmation = document.getElementById("confirmation");
const emailDisplay = document.getElementById("emailDisplay");
const passwordDisplay = document.getElementById("passwordDisplay");
const sexDisplay = document.getElementById("sexDisplay");
const roleDisplay = document.getElementById("roleDisplay");
const permissionDisplay = document.getElementById("permissionDisplay");
const confirmButton = document.getElementById("confirmButton");

form.addEventListener("submit", event => {
    event.preventDefault();

    let isValid = true;
    let permissions = [];

    if (!emailInput.value) {
        isValid = false;
        emailError.textContent = "Email is required";
    } else {
        emailError.textContent = "";
    }

    if (!passwordInput.value) {
        isValid = false;
        passwordError.textContent = "Password is required";
    } else if (
        passwordInput.value.length < 6 ||
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/g.test(passwordInput.value)
    ) {
        isValid = false;
        passwordError.textContent =
            "Password should be min 6 characters with mix of uppercase, lowercase, and digits";
    } else {
        passwordError.textContent = "";
    }

    if (!sexSelect.value) {
        isValid = false;
        sexError.textContent = "Sex is required";
    } else {
        sexError.textContent = "";
    }

    if (!adminRadio.checked && !userRadio.checked) {
        isValid = false;
        roleError.textContent = "Role is required";
    } else {
        roleError.textContent = "";
    }

    if (perm1Checkbox.checked) {
        permissions.push(perm1Checkbox.value);
    }

    if (perm2Checkbox.checked) {
        permissions.push(perm2Checkbox.value);
    }

    if (perm3Checkbox.checked) {
        permissions.push(perm3Checkbox.value);
    }

    if (perm4Checkbox.checked) {
        permissions.push(perm4Checkbox.value);
    }

    if (permissions.length < 2) {
        isValid = false;
        permissionError.textContent = "At least 2 permissions should be ticked";
    } else {
        permissionError.textContent = "";
    }

    if (isValid) {
        form.style.display = "none";
        emailDisplay.textContent = `Email: ${emailInput.value}`;
        passwordDisplay.textContent = `Password: ${passwordInput.value}`;
        sexDisplay.textContent = `Sex: ${sexSelect.value}`;
        roleDisplay.textContent = `Role: ${adminRadio.checked ? "Admin" : "User"
            }`;
        permissionDisplay.textContent = `Permissions: ${permissions.join(", ")}`;
        confirmation.style.display = "block";
    }
});

confirmButton.addEventListener("click", event => {
    event.preventDefault();
    confirmation.style.display = "none";
    form.style.display = "block";
    form.reset();
});