function submitcontactform() {
    var x = document.forms["contactform"]["email"].value;
    if (x == "") {
        alert("email must be filled out");
        return false;
    } else {
        alert("Thank you for submittinng the form");
    }
}
$(Document).ready(function() {



$(contactform).on('submit',submitcontactform);


});

Function submitContactform() {

    Event.preventDefault();
    var x=document.forms["contactform"]["email"].value;

    if (x=="") {
        alert("email must be filled out");
        return false;

    }else{
        $(this),slideUp();
        $("#success").slidedown();
        //alert('Thank you for submitting the form');
