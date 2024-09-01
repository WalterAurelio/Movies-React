import { useShallow } from 'zustand/react/shallow';
import { useTopMovieStore } from '../store/topRatedMovieStore';
import { useGetGenres, useGetMovieDetails } from '../services/queries';

function SelectedTopMovie() {
  const { data: genres } = useGetGenres();
  const { movie } = useTopMovieStore(
    useShallow(state => ({
      movie: state.movie,
    }))
  );
  const { data } = useGetMovieDetails(movie?.id || 533535);

  const ubicarGenero = (id: number | undefined) => {
    if (id) {
      const filteredGenre = genres?.find(genre => genre.id === id);
      return filteredGenre?.name;
    }
  };

  return (
    <div>
      <h2>{data?.title}</h2>
      <div>
        <p>{data?.release_date.slice(0, 4)}</p>
        <p>{ubicarGenero(data?.genres[0].id)}</p>
        <p>{data?.runtime}</p>
      </div>
      <button type='button'>Watch Now</button>
      <button>Add to Playlist</button>
    </div>
  );
}
export default SelectedTopMovie;
