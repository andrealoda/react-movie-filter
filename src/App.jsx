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
  const [searchTitles, setSearchTitles] = useState('')
  const [filteredList, setFilteredList] = useState(allTitles)
  // const [movies, setMovies] = useState(allTitles)



  useEffect(() => {

    let filterResults = allTitles

    if (selectedGenre && selectedGenre !== "all") {
      filterResults = filterResults.filter(item => item.genre.toLowerCase() === selectedGenre.toLowerCase())
    }

    if (searchTitles) {
      filterResults = filterResults.filter(item => item.title.toLowerCase().includes(searchTitles.toLowerCase()))
    }

    setFilteredList(filterResults)

  }, [selectedGenre, searchTitles])


  return (
    <>
      <div className="container">

        <header>
          <div className="title">
            <h1 className='flex'>React Movie Filter</h1>
          </div>
        </header>

        <main>
          <h2>Search a movie typing the name</h2>

          <input type="text" placeholder="type a title" value={searchTitles} onChange={(e) => setSearchTitles(e.target.value)} />


          <h2>Choose a genre to filter the following list: </h2>

          <select name="movie-genre-filter" id="movie-genre-filter" onChange={(e) => setSelectedGenre(e.target.value)}>

            <option value="">--Please choose an option--</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
            <option value="all">All titles</option>

          </select>

          <div>
            {filteredList.map(item =>
              <div key={item.title}>{item.title}</div>
            )}
          </div>

        </main>

      </div>
    </>
  )
}

export default App
