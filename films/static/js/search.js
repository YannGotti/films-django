const input = document.querySelector('input');

input.addEventListener('input', searchEvent);

let find_section = document.getElementById("find-section");

let find_films = document.getElementById("find-films");


function addFilms(film){
    find_films.innerHTML += 
    `<a href=/film/` + parseInt(film.kp_id) + `/ class="col-6 col-lg-2 animate__animated animate__fadeIn films-link">
        <div class="card text-white bg-dark mb-3" style="max-width: 14rem; height: 23rem;">
            <img style="max-width: 14rem; max-height: 17rem;" src="https://st.kp.yandex.net/images/film_iphone/iphone360_` + parseInt(film.kp_id) +  `.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title card-text">` + film.title + `</h5>
            </div>
        </div>
    </a>`
}


function searchEvent(e){
    find_section.style.display = "block";
    
    title = e.target.value;
    $.ajax({
        url: "api?method=search&title=" + title,
        type: "GET",
        success: function(responce){
            var data = JSON.parse(responce.data)

            if (data.data.length == 0 || title == '') {
                find_section.style.display = "none";
                find_films.innerHTML =  ``; 
                return;
            }

            array = data.data
            find_films.innerHTML =  ``; 
            array.forEach((element) => {
                addFilms(element)
            })
            
            if (data == null){
                find_films.innerHTML =  ``; 
                find_section.style.display = "none";
            }

        }

    });
}




