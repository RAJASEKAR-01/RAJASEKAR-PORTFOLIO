$(document).ready(function(){
    $("#signup").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
            },
            number:{
                required:true,
                minlength:10,
            },
            email:{
                required:true,
            }

        }
    });
});