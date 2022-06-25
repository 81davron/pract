$("form").on("submit", function (event){
    event.preventDefault()

    $.ajax({
        url : "https://reqres.in/api/register",
        type : "POST",
        data : {
            "email" : $(".email").val(),
            "password" : $(".password").val(),
        },
        success: function(ress){
            $(".statusText").html('Successful <i class="fa-solid fa-spin fa-spinner"></i>')
            $(".statustext").removeClass("text-danger")
            console.log(ress);
        },
        error : function(err){
            if (err.statusText = "error") {
                console.log("xatooooo");
                $(".statustext").removeClass("d-none")
                let card = `
                <h6 class="text-center">Login or Password is invalid</h6>
                `
                $(".statustext").append(card)
            }

        }
    })
})





