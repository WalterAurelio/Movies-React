export type MovieDetails = {
  id: number,
  title: string,
  overview: string,
  vote_average: number,
  vote_count: number,
  poster_path: string,
  genre_ids: number[]
}

export const getMovies = async (): Promise<MovieDetails[]> => {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ebe4bcc4bf16f20559e272d19399574e');
  const data = await res.json() as {
    results: MovieDetails[]
  };
  return data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    poster_path: movie.poster_path,
    genre_ids: movie.genre_ids
  }))
};