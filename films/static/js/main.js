let row = document.getElementById("film-list");

function addFilmPage(film) {
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

function selectFilm(page=1) {
    $.ajax({
        url: "api?method=movies&page=" + page,
        type: "GET",
        success: function(responce){
            var data = JSON.parse(responce.data);

            array = data.data;
            row.innerHTML = ``;

            array.forEach((element) => {
                addFilmPage(element);
            })

        }
    });
}


function pagination(page = 1){
    let pagination = document.getElementById("pagination");

    if (page == 1){
        pagination.innerHTML = 
        `
        <li class="page-item disabled"><a class="page-link" href="#">Прошлая</a></li>
        <li class="page-item active"><a class="page-link" href="#" onclick="pagination(1)">1</a></li>
        <li class="page-item "><a class="page-link" href="#" onclick="pagination(2)">2</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="pagination(3)">3</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="pagination(2)">Следующая</a></li>
        `
    }

    else{
        pagination.innerHTML = 
        `
        <li class="page-item"><a class="page-link" href="#" onclick="pagination(` + (page - 1) +  `)">Прошлая</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="pagination(` + (page - 1) +  `)">` + (page - 1) +  `</a></li>
        <li class="page-item active"><a class="page-link" href="#" onclick="pagination(` + page +  `)">` + page + `</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="pagination(` + (page + 1) + `)">` + (page + 1) + `</a></li>
        <li class="page-item"><a class="page-link" href="#" onclick="pagination(` + (page + 1) + `)">Следующая</a></li>
        `
    }

    selectFilm(page)

}

pagination();

selectFilm();