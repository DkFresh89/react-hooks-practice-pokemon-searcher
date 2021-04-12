import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({filteredPokes}) {
 

  const pokemons = filteredPokes.map((pokemon) => 
    (
      <PokemonCard
      key={pokemon.name}
      name={pokemon.name}
      hp={pokemon.hp}
      sprites={pokemon.sprites}
      />
    )
  )

  return (
    <Card.Group itemsPerRow={6}>
      {pokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
