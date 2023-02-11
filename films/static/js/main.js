TOKEN = 'e599f1f6f2ecd77c39ab9f9b6aac1b28'


function addFilmPage(film) {
    info = film.info

    let row = document.getElementById("film-list");

    row.innerHTML += 
    `<a href=film/` + parseInt(film.kinopoisk_id) + `/ class="col-6 col-lg-2 animate__animated animate__fadeIn films-link">
        <div class="card text-white bg-dark mb-3" style="max-width: 14rem; height: 23rem;">
            <img style="max-width: 14rem; max-height: 17rem;" src="`+ info.poster +`" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title card-text">` + info.rus +  `</h5>
            </div>
        </div>
    </a>`

}

function selectFilm(token) {
    $.ajax({
        url: "https://bazon.cc/api/json?token=" + token + "&type=film&page=1&cat=аниме",
        processData: false,
        contentType: false,
        type: 'GET',
        success: function(data){
            array = data.results

            array.forEach((element) => {
                addFilmPage(element)
            })

        }
    });
}

selectFilm(TOKEN)