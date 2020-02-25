import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const ListCardStyle = styled.section `
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;


const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  

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
    <div>
      <Link to='/'>Home</Link>
      <SearchForm key={character.id} characterData={character}/>
      <ListCardStyle>
        {character.map(characters => (
          <div>
            <CharacterCard key={characters.id} characters={characters} name={characters.name} image={characters.image} status={characters.status}/>
          </div>
        ))}
      </ListCardStyle>
    </div>
  );
};

export default CharacterList;
