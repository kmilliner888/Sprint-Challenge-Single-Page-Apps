import React from "react";

const CharacterCard = props => {
  // console.log('CharacterCard props', props);
  return <span>
    <h1>Name: {props.name}</h1><img src={props.image} alt="Rick and Morty Character"/><h2>Status: {props.status}</h2></span>;
}

export default CharacterCard;
