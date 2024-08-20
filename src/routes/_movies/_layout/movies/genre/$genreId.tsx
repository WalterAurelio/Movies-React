import { createFileRoute } from '@tanstack/react-router'
import { getMoviesByGenre } from '../../../../../api/movies';
import SingleMovie from '../../../../../components/SingleMovie';
import { getGenres } from '../../../../../api/genres';

export const Route = createFileRoute('/_movies/_layout/movies/genre/$genreId')({
  component: Movies,
  loader: async ({params}) => {
    const genres = await getGenres();
    const genre = genres.find(genre => genre.id == Number(params.genreId))
    const genreName = genre?.name;
    const movies = await getMoviesByGenre(Number(params.genreId));
    return { genreName, movies }
  }
});

function Movies() {
  const { genreName, movies } = Route.useLoaderData();

  return (
    <>
      <h3>{genreName}</h3>
      <ul>
        {
          movies?.map(movie =>
            <SingleMovie
              key={movie.id}
              movie={movie}
            />
          )
        }
      </ul>
    </>
  );  
}