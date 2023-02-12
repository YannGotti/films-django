function addFilmPage(film) {
    let row = document.getElementById("film-list");

    row.innerHTML += 
    `<a href=/film/` + parseInt(film.kinopoisk_id) + `/ class="col-6 col-lg-2 animate__animated animate__fadeIn films-link">
        <div class="card text-white bg-dark mb-3" style="max-width: 14rem; height: 23rem;">
            <img style="max-width: 14rem; max-height: 17rem;" src="https://st.kp.yandex.net/images/film_iphone/iphone360_` + parseInt(film.kinopoisk_id) +  `.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title card-text">` + film.ru_title +  `</h5>
            </div>
        </div>
    </a>`

}

function selectFilm() {
    $.ajax({
        url: "api?method=movies",
        type: "GET",
        success: function(responce){
            var data = JSON.parse(responce.data)

            array = data.data

            array.forEach((element) => {
                addFilmPage(element)
            })

        }
    });
}

selectFilm()