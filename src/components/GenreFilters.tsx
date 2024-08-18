import { useGetGenres } from '../services/queries'

function GenreFilters() {
  const {data, error, isFetching} = useGetGenres();

  if (isFetching) return <p>Cargando géneros...</p>
  if (error) return <p>{JSON.stringify(error)}</p>

  return (
    <div>
      {
        data?.map(genre =>
          <button
            key={genre.id}
            type='button'
            onClick={() => {}}
          >
            {genre.name}
          </button>
        )
      }
    </div>
  )
}

export default GenreFilters