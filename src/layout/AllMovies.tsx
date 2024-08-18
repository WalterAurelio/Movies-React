import { MovieDetails } from "../api/movies"
import GenreFilters from "../components/GenreFilters"

function AllMovies({ movies }: { movies: MovieDetails[] }) {
  return (
    <div>
      <h3>Todas las películas</h3>
      <GenreFilters />
      <div>
        {
          movies.map(movie =>
            <div key={movie.id}>
              <img 
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={`Poster de ${movie.title}`}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default AllMovies