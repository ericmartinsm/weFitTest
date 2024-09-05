import { Inter } from "next/font/google";
import Navbar from "../components/navBar";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/spinner";
import CardItem from "../components/cardItem";
const API_URL = "https://wefit-movies.vercel.app/api/movies";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6">
        <Navbar />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {movies.map((movie) => (
              <CardItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                price={movie.price}
                image={movie.image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
