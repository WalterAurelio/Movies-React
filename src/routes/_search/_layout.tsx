import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import * as v from 'valibot'
import { useEffect } from 'react'
import SearchInput from '../../components/SearchInput'
import FilteredMovies from '../../components/FilteredMovies'
import { useMovieNameStore } from '../../store/movieNameStore'
import { useShallow } from 'zustand/react/shallow'

const Search = v.object({
  query: v.optional(v.string())
})

type Search = v.InferOutput<typeof Search>

export const Route = createFileRoute('/_search/_layout')({
  component: Layout,
  validateSearch: (search) => v.parse(Search, search),
})

function Layout() {
  const { query } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const { movieName } = useMovieNameStore(useShallow((state) => ({
    movieName: state.movieName
  })));
  const { setMovieName } = useMovieNameStore();

  useEffect(() => {
    if (query) {
      setMovieName(query);
    }

    return () => {
      setMovieName('');
    }
  }, [query, setMovieName]);

  return (
    <div>
      <h2>Búsqueda:</h2>

      {movieName || query}

      {/* <SearchInput query={query} navigate={navigate} /> */}
      <input
        type='text'
        value={movieName || ''}
        placeholder='Ingrese su búsqueda'
        onChange={(e) => {
          setMovieName(e.target.value)
        }}

      />
      <button
        type='button'
        onClick={() => {
          navigate({
            search: (prev) => ({ ...prev, query: movieName })
          })
        }}
      >
        Buscar
      </button>

      <pre>{JSON.stringify({ query })}</pre>

      <FilteredMovies query={query} />

      <Outlet />
    </div>
  );
}