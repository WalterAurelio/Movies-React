import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import * as v from 'valibot'
import { useState } from 'react'
import { getMoviesByName } from '../../api/movies'

/* type Search = {
  userQuery: string
} */

const Search = v.object({
  userQuery: v.optional(v.string())
})

type Search = v.InferOutput<typeof Search>

export const Route = createFileRoute('/_search/_layout')({
  component: Layout,
  validateSearch: (search) => v.parse(Search, search)
})

function Layout() {
  const { userQuery } = Route.useSearch();
  const [busqueda, setBusqueda] = useState(userQuery);
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <div>
      <h2>Búsqueda:</h2>

      <input
        type='text'
        value={busqueda || ''}
        placeholder='Ingrese su búsqueda'
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button
        type='button'
        onClick={() => {
          getMoviesByName(busqueda || '');
          navigate({
            search: (prev) => ({ ...prev, userQuery: busqueda})
          })
        }}
      >
        Buscar
      </button>

      <pre>{JSON.stringify({ userQuery })}</pre>

      <Outlet />
    </div>
  );
}