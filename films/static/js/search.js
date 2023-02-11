TOKEN = 'e599f1f6f2ecd77c39ab9f9b6aac1b28'

const input = document.querySelector('input');

input.addEventListener('input', searchEvent);

let find_section = document.getElementById("find-section");

let find_films = document.getElementById("find-films");


function addFilms(film){

    info = film.info
    find_films.innerHTML += 
    `<a style="transition: 0.2s;" href=../../film/` + parseInt(film.kinopoisk_id) + `/ class="col-6 col-lg-2 animate__animated animate__fadeIn films-link">
        <div class="card text-white bg-dark mb-3" style="max-width: 14rem; height: 23rem;">
            <img style="max-width: 14rem; max-height: 17rem;" src="`+ info.poster +`" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title card-text">` + info.rus +  `</h5>
            </div>
        </div>
    </a>`
}


function searchEvent(e){
    find_section.style.display = "block";

    let max_films = 15;
    
    title = e.target.value;
    let i = 0;
    $.ajax({
        url: "https://bazon.cc/api/search?token=" + TOKEN + "&title=" + title,
        processData: false,
        contentType: false,
        type: 'GET',
        success: function(data){
            try{
                if( data.results.length > max_films){
                    array = data.results.slice(0, max_films)
                }else{
                    array = data.results 
                }
            }
            catch{}

            find_films.innerHTML =  ``; 

            array_last_films = [];
            
            try{
                array.forEach((element) => {

                    if(!array_last_films.includes(element.kinopoisk_id)){
                        addFilms(element);
                    }

                    array_last_films.push(element.kinopoisk_id);

                    i++;
                    if (i > max_films){
                        return;
                    }
                })
            }

            catch{}

            if (data.error == "invalid kinopoisk id or title"){
                find_films.innerHTML =  ``; 
                find_section.style.display = "none";
            }

        }
    });
}




