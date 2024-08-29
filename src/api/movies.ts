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

export const simularDelay = (): Promise<void> => {
  return new Promise(res => setTimeout(res, 3000));
};

export const getMoviesDiscover = async (signal: AbortSignal): Promise<MovieDiscover[]> => {
  await simularDelay();
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ebe4bcc4bf16f20559e272d19399574e', { signal });
  const data = (await res.json()) as {
    results: MovieDiscover[];
  };
  return data.results;
};

export const getMoviesDiscoverByGenre = async (genreId: number, signal: AbortSignal): Promise<MovieDiscover[]> => {
  const movies = await getMoviesDiscover(signal);
  const filteredMovies = movies.filter(movie => {
    if (movie.genre_ids.includes(genreId)) {
      return movie;
    }
  });
  return filteredMovies;
};

export const getMoviesDiscoverByName = async (movieName: string, signal: AbortSignal): Promise<MovieDiscover[]> => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=ebe4bcc4bf16f20559e272d19399574e`, {
    signal,
  });
  const data = (await res.json()) as {
    results: MovieDiscover[];
  };
  return data.results;
};

export const getMovieDetailsByName = async (movieName: string, signal: AbortSignal): Promise<MovieDiscover | undefined> => {
  const movies = await getMoviesDiscover(signal);
  const filteredMovie = movies.find(movie => movie.title === movieName);
  return filteredMovie;
};

export const getMovieDetailsById = async (movieId: number | undefined, signal: AbortSignal): Promise<MovieDetails | undefined> => {
  await simularDelay();
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ebe4bcc4bf16f20559e272d19399574e`, { signal });
  const data = await res.json() as MovieDetails;
  return data;
};