import { MovieGenre } from './genres';

export type MovieDiscover = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  release_date: string;
};

export type MovieDetails = {
  id: number;
  title: string;
  original_title: string;
  genres: MovieGenre[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
};

export type DataResponse = {
  page: number;
  results: MovieDiscover[];
  total_pages: number;
  total_results: number;
};

export const simularDelay = (): Promise<void> => {
  return new Promise(res => setTimeout(res, 3000));
};

export const getMoviesDiscover = async (signal: AbortSignal, page: number, with_genres?: number[], sort_by?: string): Promise<DataResponse> => {
  await simularDelay();
  const givenGenres = with_genres && '&with_genres=' + with_genres.toString();
  const givenSortBy = sort_by && '&sort_by=' + sort_by;
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ebe4bcc4bf16f20559e272d19399574e&page=${page}${givenGenres}${givenSortBy}`, { signal });
  const data = (await res.json()) as DataResponse;
  return data;
};

export const getMovieDetails = async (signal: AbortSignal, movieId?: number): Promise<MovieDetails | undefined> => {
  await simularDelay();
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ebe4bcc4bf16f20559e272d19399574e`, { signal });
  const data = (await res.json()) as MovieDetails;
  return data;
};

export const getMoviesSearch = async (signal: AbortSignal, movieName: string, page: number): Promise<DataResponse> => {
  await simularDelay();
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&page=${page}&api_key=ebe4bcc4bf16f20559e272d19399574e`, {
    signal,
  });
  const data = (await res.json()) as DataResponse;
  return data;
};
