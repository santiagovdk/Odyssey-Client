$(document).ready(function () {

    $('#publish-btn').click(function () {
        console.log("publishing m8");
        /*var request = require('request');
        request.get({
            url: 'http://localhost:9080/OdysseyCloud/api/v1/users/1/libraries/1/'
                // formData: formData
        }, function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            console.log('Upload successful!  Server responded with:', body);
        });*/
        
        var audio = document.getElementById('music-player');
        audio.pause();
        audio.setAttribute('src',"http://192.168.1.135:9080/OdysseyCloud/api/v1/users/1/libraries/1/songs/1")
        audio.play(); //call this to play the song right away
        
    });
    
});
