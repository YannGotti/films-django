function selectFilm() {

    token = 'e599f1f6f2ecd77c39ab9f9b6aac1b28'
    kp = '1227803'

    $.ajax({
        url: "https://bazon.cc/api/search?" + token + "&kp" + kp,
        processData: false,
        contentType: false,
        type: 'GET',
        success: function(data){
            console.log(data)
        }
    });
}

selectFilm()