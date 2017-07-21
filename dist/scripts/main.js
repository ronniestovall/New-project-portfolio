
$(document).ready(function() {

    $("#contactform").on('submit', submitContactForm);

});

function submitContactForm() {

    event.preventDefault();
    var x=document.forms["contactform"]["email"].value;

    if (x=="") {
        alert("email must be filled out");
        return false;

    }else{
        $(this).slideUp();
        $("#success").slideDown();
        //alert('Thank you for submitting the form');
    }
}
