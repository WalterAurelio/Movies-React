import humanizeDuration from 'humanize-duration';
import { MovieDetails } from '../api/movies';
import { MovieGenre } from '../api/genres';

const shortHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => 'y',
      mo: () => 'mo',
      w: () => 'w',
      d: () => 'd',
      h: () => 'hr',
      m: () => 'mins',
      s: () => 's',
      ms: () => 'ms',
    },
  },
});

export const movieRuntime = (movie: MovieDetails | undefined, data?: MovieDetails | undefined): string => {
  const runtime = movie ? movie?.runtime : data?.runtime;
  return shortHumanizer(runtime! * 60 * 1000);
};

export const movieGenres = (data: MovieGenre[] | undefined, genresIds: number[] | undefined): MovieGenre[] | undefined => {
  if (genresIds && data) {
    const genreMatches: MovieGenre[] = [];
    for (let i = 0; i < genresIds.length; i++) {
      const foundGenre = data.find(genre => genre.id === genresIds[i]);
      if (foundGenre) {
        genreMatches.push(foundGenre);
      }
    }
    return genreMatches;
  }
};

export const mainGenre = (genres: MovieGenre[] | undefined, genreId: number | undefined) => {
  if (genreId) {
    const filteredGenre = genres?.find(genre => genre.id === genreId);
    return filteredGenre?.name;
  }
};
