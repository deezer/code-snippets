function callback(data) {
    console.log(data);
};

function simpleDeezerApiRequest() {
    // The following won't work because of cross-domain access
    // $.getJSON(apiUrl + 'artist/27', callback);

    $.ajax({
        dataType: 'jsonp',
        url: 'http://api.deezer.com/2.0/artist/27?output=jsonp',
        data: {},
        jsonp: 'callback',
        success: callback
    });

};
