import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const [toggleCard, setToggleCard] = useState(false)

  function handleToggle(){
    setToggleCard(toggleCard => !toggleCard)
  }

  return (
    <Card>
      <div onClick={handleToggle}>
        <div className="image">
           {!toggleCard ?<img src={props.sprites.front} alt="oh no!" /> :<img src={props.sprites.back} alt="oh no!" />} 
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
