$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var mobile = $("#mobile").val();
    var subject = $("#subject").val() || "";
    var Dtype = $("#Dtype").val() || "";

    $("#form-submit").prop("disabled", true);

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: {
            name: name,
            email: email,
            message: message,
            mobile: mobile,
            subject: subject,
            Dtype: Dtype
        },
        success: function(text){
            if ($.trim(text) === "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        },
        error: function(){
            formError();
            submitMSG(false, "Unable to send right now. Please email admin@elancier.com.");
        },
        complete: function(){
            $("#form-submit").prop("disabled", false);
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
}

function formError(){
    $("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    var msgClasses = valid ? "h3 text-center tada animated text-success" : "h3 text-center text-danger";
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg).show();
}
