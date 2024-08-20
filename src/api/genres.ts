export type Genre = {
  id: number,
  name: string
}

export const getGenres = async (): Promise<Genre[]> => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=ebe4bcc4bf16f20559e272d19399574e`);
  const data = await res.json() as {
    genres: Genre[]
  };
  return data.genres;
}