import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getGenres } from '../api/genres';
import { getMovieDetails, getMoviesSearch, getMoviesDiscover } from '../api/movies';

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: ({ signal }) => getGenres(signal),
    placeholderData: keepPreviousData,
  });
}

export function useGetMoviesDiscover(page: number, with_genres: number[] | undefined, sort_by: string | undefined) {
  return useQuery({
    queryKey: ['moviesDiscover', { page, with_genres, sort_by }],
    queryFn: ({ signal }) => getMoviesDiscover(signal, page, with_genres, sort_by),
    placeholderData: keepPreviousData,
  });
}

export function useGetMovieDetails(movieId: number | undefined) {
  return useQuery({
    queryKey: ['movieDetails', { movieId }],
    queryFn: ({ signal }) => getMovieDetails(signal, movieId),
    placeholderData: keepPreviousData
  });
}

export function useGetMoviesSearch(movieName: string, page: number) {
  return useQuery({
    queryKey: ['moviesSearch', { movieName, page }],
    queryFn: ({ signal }) => getMoviesSearch(signal, movieName, page),
    placeholderData: keepPreviousData
  });
}
