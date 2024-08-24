import { useQuery } from "@tanstack/react-query";
import { getGenres } from '../api/genres'
import { getMoviesByName } from "../api/movies";

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: getGenres
  });
}

export function useGetMoviesByName(movieName: string | undefined) {
  return useQuery({
    queryKey: ['moviesByName'],
    queryFn: () => {
      // console.log(`Soy la busqueda ${movieName}`);
      if (movieName) {
        return getMoviesByName(movieName);
      } else {
        return [];
      }
    }
  })
}