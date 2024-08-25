import { useEffect } from 'react'
import { useMovieNameStore } from '../store/movieNameStore'
import { useShallow } from 'zustand/react/shallow'

function SearchInput({ query, navigate }: { query: string | undefined, navigate: (arg: object) => void }) {
  const {movieName} = useMovieNameStore(useShallow((state) => ({
    movieName: state.movieName
  })));
  const {setMovieName} = useMovieNameStore();

  useEffect(() => {
    if (query) {
      setMovieName(query);
    }

    return () => {
      setMovieName('');
    }
  }, [query, setMovieName]);

  return (
    <>
      <input
        type='text'
        value={movieName || ''}
        placeholder='Ingrese su búsqueda'
        onChange={(e) => setMovieName(e.target.value)}
      />
      <button
        type='button'
        onClick={() => {
          navigate({
            search: (prev: object) => ({ ...prev, query: movieName })
          });
        }}
      >
        Buscar
      </button>
    </>
  )
}

export default SearchInput