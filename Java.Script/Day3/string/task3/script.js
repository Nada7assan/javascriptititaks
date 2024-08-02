function validName (name) {
    var nameRegex =  /^[a-zA-Z]+$/;
    if (nameRegex.test(name)) {
return true;
    }
    else { return false;}
}

function validMobile (mobile) {
    var mobileRegex =  /^(010|011|012)\d{8}$/;
    if (mobileRegex.test(mobile)) {
return true;
    }
    else { return false;}
}

function validEmail (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
return true;
    }
    else { return false;}
}

do {var userName = prompt ("What's Your name?")}
while (!validName(userName));

do {var userPhone = prompt ("What's Your phone number (8) numbers?")}
while (isNaN(userPhone) || userPhone.length !== 8);

do {var userMobile = prompt ("What's Your Mobile number?")}
while (!validMobile(userMobile));

do {var userEmail = prompt ("What's Your E-mail address?")}
while (!validEmail(userEmail));

    document.write("Welcome " + userName + "<br>");
    document.write("Your phone number is: " + userPhone + "<br>");
    document.write("Your mobile number is: " + userMobile + "<br>");
    document.write("Your email is: " + userEmail + "<br>");





