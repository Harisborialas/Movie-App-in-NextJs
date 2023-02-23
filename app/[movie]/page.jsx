import Image from "next/image";

export default async function MovieDetails({ params }) {
  const { movie } = params;
  const imagepath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=0ac4d9b3642537298471b5fdbc1e81ef&language=en-US&page=1`, {next: {revalidate:60}}
  );
  const res = await data.json();
  return (
    <div>
      <h3 className="text-5xl my-5 bg-slate-300 font-bold center p-4">{res.title}</h3>
      <p className="text-slate-400">Release Date: {res.release_date}</p>
      <div className="grid grid-cols-fluid w-full">
        <Image src={imagepath + res.poster_path} alt={res.title} width={550} height={500}/>
        <h5><h2 className="mb-5 text-2xl bg-green-500 text-white ">Description</h2>{res.overview} <br />
        <button className="inline-block p-3 my-6 text-black bg-slate-300 rounded-md hover:bg-green-700 hover:text-white">Download</button>
        </h5>
        
      </div>
       
    </div>
  );
}
