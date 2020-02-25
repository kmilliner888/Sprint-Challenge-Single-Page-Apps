import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";


export default function SearchForm(props) {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchResults, setSearchResults] = useState(props.characterData);
  console.log('SearchForm props', props);
  // console.log('searchResults', searchResults);

  useEffect(()=> {
    const results= props.characterData.filter(character => {
      return character.name.toLowerCase().includes(searchCharacter.toLowerCase());
    });

    setSearchResults(results);
  }, [searchCharacter]);

  const handleChange =  event => {
    setSearchCharacter(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="character">Search:</label>
       <input 
          id="character"
          type="text"
          name="textfield"
          placeholder="Search for Character"
          value={searchCharacter}
          onChange={handleChange}
        />
     </form>
     <div className="character-search">
       
         {searchResults.map(character => {
           return <CharacterCard key={character.id} name={character.name} image={character.image} status={character.status} />;
         })}
       
     </div>
    </section>
  );
}
