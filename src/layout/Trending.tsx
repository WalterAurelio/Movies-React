import { MovieDetails } from '../api/movies';
import TrendingMovie from '../components/TrendingMovie';

function Trending({ movies }: { movies: MovieDetails[] }) {
  console.log(movies);

  return (
    <section>
      <h3>Trending Movies</h3>

      <ul>
        {
          movies.map((movie, index) => {
            if (index < 10) {
              return <TrendingMovie 
                key={movie.id} 
                movie={movie}
              />
            }
          })
        }
      </ul>
    </section>
  )
}

export default Trending