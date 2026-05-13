import { useEffect, useState } from "react"


function App() {

  const initialMovies = [
    { id: 1, title: 'Inception', genre: 'Fantascienza' },
    { id: 2, title: 'Il Padrino', genre: 'Thriller' },
    { id: 3, title: 'Titanic', genre: 'Romantico' },
    { id: 4, title: 'Batman', genre: 'Azione' },
    { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
    { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const initialFormData = {
    title: "",
    genre: ""
  }

  const [movies, setMovies] = useState(initialMovies)
  const [genre, setGenre] = useState('')
  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  // Form Data
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    // console.log(genre);
    let filteredData = initialMovies

    if (genre) {
      // console.log('Filtered by genre');
      filteredData = initialMovies.filter(movie => movie.genre.toLowerCase() == genre.toLowerCase()
      )
    }

    if (search) {
      console.log('searched:', search);
      filteredData = filteredData.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    }

    // console.log(filteredData);
    setMovies(filteredData)

  }, [genre, search])


  function handleAddMovie(e) {
    e.preventDefault()

    console.log('form submitted');
    console.log(formData);

    const newMovie = {
      id: Date.now(),
      ...formData
    }
    console.log(newMovie);

    setMovies([...movies, newMovie])
  }


  return (
    <>

      {/* filter by title */}
      <div>
        <label htmlFor="title">Title</label><br />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search a movie by title" />
      </div>
      <hr />
      {/* filter by genre */}
      <div>
        <label htmlFor="genre">Genre</label><br />
        <select name="genre" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All</option>
          <option value="fantascienza">Fantascienza</option>
          <option value="thriller">Thriller</option>
          <option value="romantico">Romantico</option>
          <option value="azione">Azione</option>
        </select>
      </div>
      <hr />
      {/* form to add movies */}
      <h2>add a new movie</h2>
      <form onSubmit={handleAddMovie}>
        <label htmlFor="title">Title</label><br />
        <input type="text" placeholder="type the title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} /><br />
        <label htmlFor="genre">Genre</label><br />
        <input type="text" placeholder="type the genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} /><br />
        <button type="submit">ADD</button>
      </form>

      <h2>movies</h2>
      {filteredMovies.map(movie => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))}
    </>
  )
}

export default App
