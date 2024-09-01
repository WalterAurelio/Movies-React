import { create } from 'zustand';
import { MovieDiscover } from '../api/movies';

type TopMovieState = {
  movie: MovieDiscover | undefined;
  setMovie: (movie: MovieDiscover) => void;
};

export const useTopMovieStore = create<TopMovieState>(set => ({
  movie: undefined,
  setMovie: (movie: MovieDiscover) =>
    set(() => ({
      movie: movie,
    })),
}));
