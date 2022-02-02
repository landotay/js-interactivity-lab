document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.addEventListener('click', crossOffMovie)


    movieTitle.textContent = inputField.value

    movie.appendChild(movieTitle)
    let ul = document.querySelector('ul')
    ul.appendChild(movie)

   let deleteBtn = document.createElement('button')
   deleteBtn.textContent = 'X'
   deleteBtn.addEventListener('click', deleteMovie)
   movie.appendChild(deleteBtn)

    inputField.value = ''
}

let form = document.querySelector('form')
form.addEventListener('submit', addMovie)

const  deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    }else{
        message.textContent = 'Movie re-added'
    }
}

