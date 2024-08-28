import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../api/genres';
import { getMoviesSearch, getMoviesSearchByGenre, getMoviesSearchByName } from '../api/movies';

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: ({ signal }) => getGenres(signal),
  });
}

export function useGetMoviesSearchByName(movieName: string) {
  return useQuery({
    queryKey: ['moviesSearchByName'],
    queryFn: ({ signal }) => getMoviesSearchByName(movieName, signal),
  });
}

export function useGetMoviesSearch() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: ({ signal }) => getMoviesSearch(signal),
  });
}

export function useGetMoviesSearchByGenre(genreId: string) {
  return useQuery({
    queryKey: ['moviesSearchByGenre', genreId],
    queryFn: async ({ signal }) => {
      const genres = await getGenres(signal);
      const genre = genres.find(genre => genre.id === Number(genreId));
      const genreName = genre?.name;
      const movies = await getMoviesSearchByGenre(Number(genreId), signal);
      return { genreName, movies };
    },
    staleTime: 600000
  });
}
