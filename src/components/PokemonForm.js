import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({form, setForm, handleAddPokemon}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setfrontUrl] = useState("")
  const [backUrl, setbackUrl] = useState("")

  

  function submitPoke(e){
    e.preventDefault()

    const formObj = {
        name: name,
        hp: hp,
        sprites: { front: frontUrl,
          back: backUrl
      }}




    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(formObj)
    })
    .then(resp => resp.json())
    .then(handleAddPokemon)

  }

  function handleName(e){
    setName(e.target.value)
  }

  function handleHp(e){
    setHp(e.target.value)
  }

  function handleFront(e){
    setfrontUrl(e.target.value)
  }

  function handleBack(e){
    setbackUrl(e.target.value)
  }





  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={submitPoke}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleName} fluid label="Name" placeholder="Name" name="name" value={name}/>
          <Form.Input onChange={handleHp} fluid label="hp" value={hp} placeholder="hp" name="hp" />
          <Form.Input onChange={handleFront} value={frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input onChange={handleBack} value={backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
