import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  console.log('character', character);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const characterList = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.log('error', error);
        });
    }
    characterList();
  }, []);

  return (
    <section className="character-list">
      {character.map(characters => (
        <div>
          <CharacterCard key={characters.id} characters={characters} name={characters.name} image={characters.image} status={characters.status}/>
        </div>
      ))}
    </section>
  );
};

export default CharacterList;
