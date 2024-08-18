import { MovieDetails } from "../api/movies"

function SingleMovie({ movie }: { movie: MovieDetails }) {
  return (
    <div>
      <img 
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`Poster de ${movie.title}`}
      />
    </div>
  )
}

export default SingleMovie