  $(document).ready(function()
    {   
        var searchWord = [];
    
        $("#submitButton").click(function(){
            var myExpression = $("#userInput").val();
            searchWord.push(myExpression);
            console.log(searchWord);
            $("#userInput").val("");
            //comment
    
            var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + myExpression + "&safeSearch=strict&key=AIzaSyBtTKhUd5u7vSo3QD8S0k7mIFbFJGd0ooQ";
            
            console.log(myExpression)
    
        $.ajax({
            url: queryURL, 
            method: "GET"
        
        }).then(function (response)
        {
            var results = response.videoId;

        console.log(results);

                $("#urbanDiv").html('<iframe id="youtubeFrame" width="560" height="315" src="https://www.youtube-nocookie.com/embed/"' + results + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            
        })
    })
    })

    