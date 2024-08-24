import { useGetMoviesByName } from "../services/queries"
import SingleMovie from "./SingleMovie";
import { useEffect } from "react";

function FilteredMovies({ query }: { query: string | undefined }) {
  const { data, isFetching, error, refetch } = useGetMoviesByName(query);

  useEffect(() => {
    // console.log('Me rendericé FilteredMovies!');
    // console.log(query);
    refetch();
  }, [query, refetch]);

  if (isFetching) return <p>Cargando películas...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      {
        data?.map(movie =>
          <SingleMovie 
            key={movie.id}
            movie={movie}
          />
        )
      }
    </div>
  )
}

/* function FilteredMovies() {
  const movieName = useMovieNameStore(useShallow((state) => state.movieName));
  const { data, isFetching, error, refetch } = useGetMoviesByName(movieName);

  useEffect(() => {

  })

  useEffect(() => {
    console.log('Me renderizé FilteredMovies.');
    refetch();
  }, [movieName, refetch]);

  if (isFetching) return <p>Cargando películas...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      {
        data?.map(movie =>
          <SingleMovie 
            key={movie.id}
            movie={movie}
          />
        )
      }
    </div>
  )
} */

export default FilteredMovies