import { MovieGenre } from './genres';

export type MovieDiscover = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
};

export type MovieDetails = {
  id: number;
  title: string;
  original_title: string;
  genres: MovieGenre[];
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
};

export type SearchData = {
  page: number;
  results: MovieDiscover[];
  total_pages: number;
  total_results: number;
};

export const simularDelay = (): Promise<void> => {
  return new Promise(res => setTimeout(res, 3000));
};

export const getMoviesDiscover = async (signal: AbortSignal, page: number, with_genres: number[] | undefined): Promise<SearchData> => {
  await simularDelay();
  const givenGenres = with_genres && '&with_genres=' + with_genres.toString();
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ebe4bcc4bf16f20559e272d19399574e&page=${page}${givenGenres}`, { signal });
  const data = (await res.json()) as SearchData;
  return data;
};

export const getMovieDetails = async (signal: AbortSignal, movieId: number | undefined): Promise<MovieDetails | undefined> => {
  await simularDelay();
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ebe4bcc4bf16f20559e272d19399574e`, { signal });
  const data = (await res.json()) as MovieDetails;
  return data;
};

export const getMoviesSearch = async (signal: AbortSignal, movieName: string, page: number): Promise<SearchData> => {
  await simularDelay();
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&page=${page}&api_key=ebe4bcc4bf16f20559e272d19399574e`, {
    signal,
  });
  const data = (await res.json()) as SearchData;
  return data;
};
