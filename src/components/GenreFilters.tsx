import { Link } from '@tanstack/react-router';
import { useGetGenres } from '../services/queries'

function GenreFilters() {
  const {data, error, isFetching} = useGetGenres();

  if (isFetching) return <p>Cargando géneros...</p>
  if (error) return <p>{JSON.stringify(error)}</p>

  return (
    <div>
      {
        data?.map(genre =>
          <Link
            key={genre.id}
            to='/movies/$genre'
            params={{
              genre: genre.name
            }}
          >
            {genre.name}
          </Link>
        )
      }
    </div>
  )
}

export default GenreFilters