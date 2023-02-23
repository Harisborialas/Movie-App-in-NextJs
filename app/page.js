import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=0ac4d9b3642537298471b5fdbc1e81ef&language=en-US&page=1`
  );
  const movies = await data.json();
  console.log(movies);
  return (
    <main>
      <h1 className="text-slate-300 mb-10 mt-4 text-6xl">Movies.Com</h1>
      <div className="grid gap-16 grid-cols-fluid">
         {movies.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          logo={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
      </div>
     
    </main>
  );
}
