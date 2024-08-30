import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getGenres } from '../api/genres';
import { getMovieDetailsById, getMoviesDiscover, getMoviesDiscoverByGenre, getMoviesDiscoverByName, getMoviesDiscoverPaginated } from '../api/movies';

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: ({ signal }) => getGenres(signal),
  });
}

export function useGetMoviesDiscover() {
  return useQuery({
    queryKey: ['moviesDiscover'],
    queryFn: ({ signal }) => getMoviesDiscover(signal),
    placeholderData: keepPreviousData
  });
}

export function useGetMoviesDiscoverPaginated(page: string) {
  return useQuery({
    queryKey: ['moviesDiscoverPaginated', {page}],
    queryFn: ({ signal }) => getMoviesDiscoverPaginated(signal, page),
    placeholderData: keepPreviousData
  });
}

export function useGetMoviesDiscoverByGenre(genreId: string) {
  return useQuery({
    queryKey: ['moviesDiscoverByGenre', genreId],
    queryFn: async ({ signal }) => {
      const genres = await getGenres(signal);
      const genre = genres.find(genre => genre.id === Number(genreId));
      const genreName = genre?.name;
      const movies = await getMoviesDiscoverByGenre(Number(genreId), signal);
      return { genreName, movies };
    },
  });
}

export function useGetMoviesDiscoverByName(movieName: string) {
  return useQuery({
    queryKey: ['moviesDiscoverByName', movieName],
    queryFn: ({ signal }) => getMoviesDiscoverByName(movieName, signal),
  });
}

export function useGetMovieDetailsById(movieId: number | undefined) {
  return useQuery({
    queryKey: ['movieDetailsById', { movieId }],
    queryFn: ({ signal }) => getMovieDetailsById(movieId, signal),
  });
}
