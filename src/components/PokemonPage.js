import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonArray, setPokemonArray] = useState([])
  const [search, setSearch] = useState("")
  const [form, setForm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemonArray(data))
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemonArray([...pokemonArray, newPokemon]);
  }


  const filteredPokes = pokemonArray.filter(pokemon =>  (
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon} form={form} setForm={setForm} setPokemonArray={setPokemonArray}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection filteredPokes={filteredPokes}/>
    </Container>
  );
}

export default PokemonPage;
