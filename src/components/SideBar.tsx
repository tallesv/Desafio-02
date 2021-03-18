import React, { useState } from "react";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  onSelectedGenre: (id: number) => void;
}

export function SideBar({ genres, onSelectedGenre }: SideBarProps) {
  // Complete aqui
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    onSelectedGenre(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={genre.id}
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}