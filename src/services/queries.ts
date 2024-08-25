import { useQuery } from "@tanstack/react-query";
import { getGenres } from '../api/genres'
import { getMoviesSearchByName } from "../api/movies";

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: getGenres
  });
}

export function useGetMoviesSearchByName(movieName: string) {
  return useQuery({
    queryKey: ['moviesSearchByName'],
    queryFn: () => getMoviesSearchByName(movieName)
  });
}