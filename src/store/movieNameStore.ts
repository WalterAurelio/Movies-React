import { create } from "zustand";

type MovieNameState = {
  movieName: string,
  setMovieName: (name: string | undefined) => void
};

export const useMovieNameStore = create<MovieNameState>((set) => ({
  movieName: '',
  setMovieName: (name: string | undefined) => set(() => ({
    movieName: name
  }))
}));