import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, logo, id,  release_date }) => {
  const imagepath = "https://image.tmdb.org/t/p/original/";
  return (
    <div >
      <Link href={`/${id}`}>
        <Image src={imagepath + logo} alt={title} width={200} height={200} />
      </Link>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
    </div>
  );
};
export default Movie;
