import { createFileRoute, Link } from '@tanstack/react-router';
import { useGetGenres, useGetMovieDetails } from '../../services/queries';
import { movieRuntime, movieGenres, mainGenre } from '../../utils/utils';
import YouMayLike from '../../components/YouMayLike';

type MovieEssentials = {
  id: number;
  title: string;
};

export const Route = createFileRoute('/movies/watch/$movie')({
  component: WatchMovie,
});

function WatchMovie() {
  const { movie } = Route.useParams();
  const movieObject: MovieEssentials = JSON.parse(movie);
  const { data, isFetching, error } = useGetMovieDetails(movieObject.id);
  const { data: genres } = useGetGenres();

  if (isFetching) return <p>Cargando detalles de la película...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/'>{mainGenre(genres, data?.genres[0].id)}</Link>
      <Link to='/'>{data?.title}</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${data?.poster_path}`}
          alt={`Poster de ${data?.title}`}
        />
        <h2>{data?.title}</h2>
        <p>{data?.release_date.slice(0, 4)}</p>
        <p>{movieRuntime(data)}</p>
        {movieGenres(
          genres,
          data?.genres.map(genre => genre.id)
        )?.map(genre => (
          <Link
            key={genre.id}
            to='/movies/discover'
            search={{
              page: 1,
              with_genres: [genre.id],
            }}
          >
            {genre.name}
          </Link>
        ))}
        <p>{data?.vote_average}</p>
        <p>{data?.vote_count}</p>
        <p>{data?.overview}</p>
      </div>
      <YouMayLike />
    </div>
  );
}
