
    function Button(){
        var z = { 
                "email" : $("#email").val(), 
                 "comment" : $("#comment").val() 
                };
        
        $.ajax({
            type: "GET",
            data: z,
            url: 'http://localhost//test//save.php?',
            
            cache: false,
            success: function(result){
            alert(result);
            }
        });
    return false;
    }