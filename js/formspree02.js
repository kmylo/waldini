var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/kmylo6@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Gracias por el mensaje, Estaremos en contacto en cuanto podamos');
    return false;
});