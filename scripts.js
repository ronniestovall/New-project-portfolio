function submitcontactform() {
    var x = document.forms["contactform"]["email"].value;
    if (x == "") {
        alert("email must be filled out");
        return false;
    } else {
        alert("Thank you for submittinng the form");
    }
}