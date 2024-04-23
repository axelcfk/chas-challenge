"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

//const movieAPI_KEY = process.env.movieAPI_KEY;

export default function FirstPage() {

    
  const movieAPI_KEY = "" // INSERT YOUR API KEY
  const movieName = 'Fight Club';

  const [movieId, setMovieId] = useState("");

  useEffect(() => {

    if (movieAPI_KEY != null) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&api_key=${movieAPI_KEY}`)
    .then(response => response.json())
    .then(data => {
      // Extract movie ID from the response
      
      setMovieId(data.results[0].id); // Assuming we want the first result
    })
    .catch(error => console.error('Error fetching data:', error));
    }

  }, [movieAPI_KEY])
  console.log('Movie ID:', movieId);

  

  useEffect(() => {
    
    if (movieId != "") {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieAPI_KEY}`)
      .then(response => response.json())
      .then(data => {
        // Extract movie ID from the response
        const test = data; // Assuming we want the first result
        console.log('test:', test);
      })
      .catch(error => console.error('Error fetching data:', error));
    }
    
  }, [movieId])
  


  return (
    <div className="py-10 px-5 h-screen w-screen">
      <h1 className="text-3xl font-semibold mb-14 text-center">LOGO</h1>
      <div className="h-1/2 w-full flex justify-center">
        <img
          className="h-full w-full md:w-1/3  object-cover object-bottom  rounded-xl"
          src="/front-img.jpg"
          alt=""
        />
      </div>
      <div>
        <button className="text-xl h-16 w-full bg-orange-400 text-slate-50 rounded-full font-semibold mb-5 mt-16">
          <Link href="create-account">Create an account</Link>
        </button>
        <button
          style={{ border: "1px solid rgb(148, 163, 184, 0.5)" }}
          className="text-xl h-16 w-full bg-slate-100 rounded-full font-semibold"
        >
          <Link href="login">Log in</Link>
        </button>
      </div>
    </div>
  );
}
