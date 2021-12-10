import React from "react";
import "./styles.css";
import { useState } from "react";

var gamesDB = {
  Action: [
    {
      name: "The Witcher 3: Wild Hunt",
      rating: "4.5/5",
      description:
        "The Witcher: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher, you play as professional monster hunter Geralt of Rivia tasked with finding a child of prophecy in a vast open world rich with merchant cities, pirate islands, dangerous mountain passes, and forgotten caverns to explore."
    },
    {
      name: "Grand Theft Auto V",
      rating: "5/5",
      description:
        "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other."
    },
    {
      name: "Batman: Arkham City",
      rating: "4.8/5",
      description:
        "Batman: Arkham City builds upon the intense, atmospheric foundation of Batman: Arkham Asylum, sending players flying through the expansive Arkham City - five times larger than the game world in Batman: Arkham Asylum."
    },
    {
      name: "Sekiro: Shadows Die Twice",
      rating: "4.5/5",
      description:
        "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously."
    }
  ],
  FPS: [
    {
      name: "Apex Legends",
      rating: "4.5/5",
      description:
        "Apex Legends is the award-winning, free-to-play Hero shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale."
    },
    {
      name: "DOOM Eternal",
      rating: "4.9/5",
      description:
        "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you."
    },
    {
      name: "Counter-Strike: Global Offensive",
      rating: "4/5",
      description:
        "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content."
    }
  ],
  Horror: [
    {
      name: "Amnesia: The Dark Descent",
      rating: "4.3/5",
      description:
        "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core."
    },
    {
      name: "The Evil Within",
      rating: "4/5",
      description:
        " The Evil Within embodies the meaning of pure survival horror. Highly-crafted environments, horrifying anxiety, and an intricate story are combined to create an immersive world that will bring you to the height of tension. With limited resources at your disposal, you’ll fight for survival and experience profound fear in this perfect blend of horror and action."
    },
    {
      name: "Resident Evil 7: Biohazard",
      rating: "4.5/5",
      description:
        "Resident Evil 7 biohazard is the next major entry in the renowned Resident Evil series and sets a new course for the franchise as it leverages its roots and opens the door to a truly terrifying horror experience. A dramatic new shift for the series to first person view in a photorealistic style powered by Capcom’s new RE Engine, Resident Evil 7 delivers an unprecedented level of immersion that brings the thrilling horror up close and personal."
    },
    {
      name: "Soma",
      rating: "4.7/5",
      description:
        "From the creators of Amnesia: The Dark Descent comes SOMA, a sci-fi horror game set below the waves of the Atlantic ocean. Struggle to survive a hostile world that will make you question your very existence."
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Horror");

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ fontFamily: "sans", fontSize: "3rem", color: "#9b2335" }}>
        Game Recommendation
      </h1>
      <p style={{ color: "#34D399" }}>
        Here are some of the Games that I have Played !
      </p>
      <p style={{ color: "#34D399" }}> Select a Genre to get Started!</p>
      <div>
        {Object.keys(gamesDB).map((genre) => (
          <button
            style={{
              fontSize: "2rem",
              color: "red",
              backgroundColor: "black",
              border: "1px solid red",
              borderRadius: "20px",
              padding: "1rem",
              marginInlineEnd: "3rem",
              cursor: "pointer"
            }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul style={{ listStyleType: "none" }}>
          {gamesDB[selectedGenre].map((game) => (
            <li key={game.name}>
              <div
                style={{
                  padding: "1rem",
                  color: "red",
                  backgroundColor: "black",
                  fontSize: "2rem",
                  fontFamily: "monospace",
                  fontWeight: "bolder"
                }}
              >
                {game.name}
              </div>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#374151",
                  fontFamily: "monospace",
                  fontSize: "1.5rem"
                }}
              >
                {game.description}
              </div>
              <div
                style={{
                  color: "red",
                  padding: "1rem",
                  fontSize: "large",
                  backgroundColor: "black",
                  fontFamily: "monospace"
                }}
              >
                {game.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
