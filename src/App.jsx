import { useState, useEffect } from 'react'


function App() {

  const allTitles = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [selectedGenre, setSelectedGenre] = useState("")
  const [filteredList, setFilteredList] = useState(allTitles)


  return (
    <>
      <div className="container">

        <header>
          <div className="title">
            <h1 className='flex'>React Movie Filter</h1>
          </div>
        </header>

        <main>
          <label for="pet-select">Choose a genre to filter the following list: </label>

          <select name="movie-genre-filter" id="movie-genre-filter">
            <option value="">--Please choose an option--</option>
            <option value="all">All titles</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </main>

      </div>
    </>
  )
}

export default App
