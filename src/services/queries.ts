import { useQuery } from "@tanstack/react-query";
import { getGenres } from '../api/genres'

export function useGetGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: getGenres
  });
}