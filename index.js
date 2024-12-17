let url = 'https://api.npoint.io/f8d1be198a18712d3f29/films/';
const listHolder = document.getElementById('films');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('film item')[0].remove();
    fetchMovies(url);
});

function fetchMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                displayMovie(movie);
            });
        })
        .catch(err => console.error('Error fetching movies:', err));
}

function displayMovie(movie) {
    const li = document.createElement('li');
    li.style.cursor = "pointer";
    li.textContent = movie.title.toUpperCase();
    
    li.addEventListener('click', () => {
        setUpMovieDetails(movie);
    });

    listHolder.appendChild(li);
}

function setUpMovieDetails(childMovie) {
    const preview = document.getElementById('poster');
    
    if (childMovie.poster) {
        preview.src = childMovie.poster;
    } else {
        preview.src = 'default-poster.jpg';  
    }

    const movieTitle = document.querySelector('#title');
    movieTitle.textContent = childMovie.title;

    const movieTime = document.querySelector('#runtime');
    movieTime.textContent = `${childMovie.runtime} minutes`;

    const movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = childMovie.description;

    const showTime = document.querySelector('#showtime');
    showTime.textContent = childMovie.showtime;

    const tickets = document.querySelector('#ticket-num');
    tickets.textContent = childMovie.capacity - childMovie.tickets_sold;
}

const btn = document.getElementById('buy-ticket')

        btn.addEventListener('click', function(e){
            let remTickets = document.querySelector('#ticket-num').textContent
            e.preventDefault()
            if(remTickets > 0){
                document.querySelector('#ticket-num').textContent  = remTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                alert("Tickets are now Sold Out !!")
            }
    })