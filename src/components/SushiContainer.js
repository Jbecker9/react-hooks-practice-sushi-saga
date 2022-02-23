import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, getNextFour }) {


  return (
    <div className="belt">
      {sushis.map((sushiMap)=><Sushi key={sushiMap.id} sushiMap={sushiMap}/>)}
      <MoreButton getNextFour={getNextFour}/>
    </div>
  );
}

export default SushiContainer;
