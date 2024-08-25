import { createFileRoute } from '@tanstack/react-router'
import { getMovies } from '../../../../api/movies';
import SingleMovie from '../../../../components/SingleMovie';

export const Route = createFileRoute('/_movies/_layout/movies/')({
  component: Movies,
  loader: getMovies
})

function Movies() {
  const movies = Route.useLoaderData();

  return (
    <div>
      <h2>Todas las películas</h2>
      <ul>
        {
          movies?.map(movie =>
            <li
              key={movie.id}  
            >
              <SingleMovie
                movie={movie}
              />
            </li>
          )
        }
      </ul>
    </div>
  );
}