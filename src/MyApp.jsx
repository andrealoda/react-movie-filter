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

  // aggiungere all'array la key id : { id: 1, title: 'xx', genre: 'xx'}

  const [selectedGenre, setSelectedGenre] = useState("")


  const [filteredList, setFilteredList] = useState(allTitles)
// const [movies, setMovies] = useState(allTitles)

  function handleSelection(userSelection) {
    setSelectedGenre(userSelection)
  }

  useEffect(() => {

    if (selectedGenre === "" || selectedGenre === "all") {
      setFilteredList(allTitles)
    } else {
      setFilteredList(allTitles.filter(item => item.genre === selectedGenre))
    }
  }, [selectedGenre])


  return (
    <>
      <div className="container">

        <header>
          <div className="title">
            <h1 className='flex'>React Movie Filter</h1>
          </div>
        </header>

        <main>
          <h2>Choose a genre to filter the following list: </h2>

          <select name="movie-genre-filter" id="movie-genre-filter" onChange={e => handleSelection(e.target.value)}>
         {/* <select name="movie-genre-filter" id="movie-genre-filter" value={} onChange={e => handleSelection(e.target.value)}></select> */}
            
            <option value="">--Please choose an option--</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
            <option value="all">All titles</option>

          </select>

          <ul>
            {filteredList.map(item =>
              <li key={item.title}>{item.title}</li>
            )}
          </ul>
        </main>

      </div>
    </>
  )
}

export default App
