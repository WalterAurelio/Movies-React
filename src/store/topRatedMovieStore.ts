import { create } from 'zustand';
import { MovieDetails } from '../api/movies';

type TopMovieState = {
  movie: MovieDetails | undefined;
  setMovie: (movie: MovieDetails | undefined) => void;
};

export const useTopMovieStore = create<TopMovieState>(set => ({
  movie: undefined,
  setMovie: (movie: MovieDetails | undefined) =>
    set(() => ({
      movie: movie,
    })),
}));
