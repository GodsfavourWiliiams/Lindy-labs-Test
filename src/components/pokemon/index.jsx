import React from "react";

export default function Pokemon(props) {
 
  const { pokemon } = props;
 
  return (
    <div className="pokemon">
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>
    <div className="details">
        <h4 className=""> {pokemon.name}</h4>
        <div>id: {pokemon.id}</div>
    </div>
    </div>
  );
}
