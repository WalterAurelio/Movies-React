export type MovieSearch = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
};

export const getMoviesSearch = async (signal: AbortSignal): Promise<MovieSearch[]> => {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ebe4bcc4bf16f20559e272d19399574e', { signal });
  const data = (await res.json()) as {
    results: MovieSearch[];
  };
  return data.results;
};

export const getMoviesSearchByGenre = async (genreId: number, signal: AbortSignal): Promise<MovieSearch[]> => {
  const movies = await getMoviesSearch(signal);
  const filteredMovies = movies.filter(movie => {
    if (movie.genre_ids.includes(genreId)) {
      return movie;
    }
  });
  return filteredMovies;
};

export const getMoviesSearchByName = async (movieName: string, signal: AbortSignal): Promise<MovieSearch[]> => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=ebe4bcc4bf16f20559e272d19399574e`, {
    signal,
  });
  const data = (await res.json()) as {
    results: MovieSearch[];
  };
  return data.results;
};

export const getMovieDetailsByName = async (movieName: string, signal: AbortSignal): Promise<MovieSearch | undefined> => {
  const movies = await getMoviesSearch(signal);
  const filteredMovie = movies.find(movie => movie.title === movieName);
  return filteredMovie;
};
