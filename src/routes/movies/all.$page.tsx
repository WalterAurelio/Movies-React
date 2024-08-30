import { createFileRoute, Link } from '@tanstack/react-router'
import { useGetMoviesDiscoverPaginated } from '../../services/queries'
import { useEffect } from 'react';

export const Route = createFileRoute('/movies/all/$page')({
  component: AllMovies
})

function AllMovies() {
  const { page } = Route.useParams();
  const {data, error, isFetching} = useGetMoviesDiscoverPaginated(page);

/*   useEffect(() => {
    refetch()
  }, [refetch]) */

  if (isFetching) return <p>Cargando películas página {page}...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  console.log(data);
  
  return (
    <div>
      
      <button
        type='button'
      >
        <Link
          to={`/movies/all/${Number(page) - 1}`}
        >
          Anterior
        </Link>
      </button>
      <button
        type='button'
      >
        <Link
          to={`/movies/all/${Number(page) + 1}`}
        >
          Siguiente
        </Link>
      </button>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}