
    $(document).ready(function()
    {   
        var searchWord = [];
    
        $("#submitButton").click(function(){
            var myExpression = $("#userInput").val();
            searchWord.push(myExpression);
            console.log(searchWord);
            $("#userInput").val("");
            //comment
    
            var queryURL = "www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + myExpression + "&safeSearch=strict&key=AIzaSyBtTKhUd5u7vSo3QD8S0k7mIFbFJGd0ooQ HTTP/1.1";
    
        $.ajax({
            url: queryURL, 
            method: "GET"
        
        }).then(function (response)
        {
                $("#urbanDiv").html(response);
            
        })
    })
    })
    