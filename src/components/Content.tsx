import React from "react";
import { MovieCard } from "./MovieCard";

interface Movie {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContenProps {
  movies: Movie[]
}

export function Content({ movies }: ContenProps) {
  // Complete aqui

  return (

    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  );
}