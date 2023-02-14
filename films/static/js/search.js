const input = document.querySelector('#form_search');

input.addEventListener('input', searchEvent);

let find_section = document.getElementById("find-section");

let find_films = document.getElementById("find-films");


function addFilms(film){
    find_films.innerHTML += 
    `<a href=/film/` + parseInt(film.kp_id) + `/ class="col-3 col-lg-1 animate__animated animate__fadeIn films-link">
        <div class="card text-white bg-dark mb-3" style="width: 6rem; height: 15rem;">
            <img style="max-width: 6rem; max-height: 15rem;" src="https://st.kp.yandex.net/images/film_iphone/iphone360_` + parseInt(film.kp_id) +  `.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title card-text">` + film.title + `</h5>
            </div>
        </div>
    </a>`
}

time = 0

function searchEvent(e){
    find_section.style.display = "block";
    
    title = e.target.value;

    time += 0.1

    if (time < 0.5) { return }
    else ( time = 0 )

    array_last_films = []


    $.ajax({
        url: "\\api?method=search&title=" + title,
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


            for (let element of array){
                if (!array_last_films.includes(element.kp_id)){
                    array_last_films.push(element.kp_id)
                    addFilms(element)
                }
            }
            
            if (data == null){
                find_films.innerHTML =  ``; 
                find_section.style.display = "none";
            }

        }

    });
}




