

function sendMail() {
    var params = {
        name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        tele : document.getElementById("tele").value,
        message : document.getElementById("message").value

    }



emailjs.send("service_ilw5onz","template_vb57wxh", params).then(function(res){
        alert("your message sent successfuly" + res.status);
    })
}