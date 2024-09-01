import SelectedTopMovie from "../components/SelectedTopMovie";
import TopRatedMovies from "../components/TopRatedMovies";

function Hero() {
  return (
    <section>
      <div>
        <SelectedTopMovie />
        <h3>Top Rated</h3>
        <TopRatedMovies />

        <p>Find the latest and greatest movies and shows, all available on Movieto.</p>

        <button type='button'>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
