
function simpleDeezerApiRequest(){
    // The following won't work because of cross-domain access
    // $.getJSON(apiUrl + 'artist/27', function(data){
    //     console.log(data);
    // });

    $.ajax({
        dataType: "jsonp",
        url :"http://api.deezer.com/2.0/artist/27?output=jsonp",
        data : {},
        jsonp : 'callback',
        success : function(data) { console.log(data); }
    });

};

function callback(data){
    console.log(data);
};