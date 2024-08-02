var input = document.getElementsByTagName("input");
var form = document.forms[0];
var errMsg = document.getElementsByTagName("div");
var genderInputs = document.getElementsByName("Gender");
var isvalid = false;

setTimeout(function () {
    if (input[0].value === "" || input[1].value === "" || input[2].value === "" || input[3].value === "" || input[4].value === "") {
        alert("Time out")
    }
}, 5000)

form.addEventListener("submit", function (e) {
    // name
    if (input[0].value === "") {
        e.preventDefault();
        errMsg[0].innerText = "This Feild is required";
    }
    else if (isFinite(input[0].value)) {
        e.preventDefault();
        errMsg[0].innerText = "Characters only";
    }
    else {
        errMsg[0].style.display = "none";
        input[0].value == "";
    }

    // Address
    if (input[1].value === "") {
        e.preventDefault();
        errMsg[1].innerText = "This Feild is required";
    }
    else if (isFinite(input[1].value)) {
        e.preventDefault();
        errMsg[1].innerText = "Characters only";
    }
    else {
        errMsg[1].style.display = "none";
        input[1].value == "";
    }

    //  mail
    if (input[2].value === "") {
        e.preventDefault();
        errMsg[2].innerText = "This Feild is required"
    }
    else if (!validEmail(input[2].value)) {
        e.preventDefault();
        errMsg[2].innerText = "Please Follow the rule ";
    }
    else {
        errMsg[2].style.display = "none";
    }
    //  gender
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            isvalid = true;
            break;
        }
    }
    if (!isvalid) {
        e.preventDefault();
        errMsg[3].innerText = "This Feild is required"
    }
    else {
        errMsg[3].innerText = "";
        errMsg[3].style.display = "none";
    }

})


function validEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return true;
    }
    else { return false; }
}