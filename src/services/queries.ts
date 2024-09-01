import { keepPreviousData, useQuery, useInfiniteQuery } from '@tanstack/react-query';
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
    queryKey: ['moviesDiscover', { page, with_genres }],
    queryFn: ({ signal }) => getMoviesDiscover(signal, page, with_genres, sort_by),
    placeholderData: keepPreviousData,
  });
}

export function useGetMoviesDiscoverInfinite(sort_by: string | undefined) {
  return useInfiniteQuery({
    queryKey: ['mostViewedMovies'],
    queryFn: ({ pageParam, signal }) => getMoviesDiscover(signal, pageParam, undefined, sort_by),
    initialPageParam: 1,
    getNextPageParam: (_, __, lastPageParam) => lastPageParam + 1,
  });
}

export function useGetMovieDetails(movieId: number | undefined) {
  return useQuery({
    queryKey: ['movieDetails', { movieId }],
    queryFn: ({ signal }) => getMovieDetails(signal, movieId),
    placeholderData: keepPreviousData,
  });
}

export function useGetMoviesSearch(movieName: string, page: number) {
  return useQuery({
    queryKey: ['moviesSearch', { movieName, page }],
    queryFn: ({ signal }) => getMoviesSearch(signal, movieName, page),
    placeholderData: keepPreviousData,
  });
}
