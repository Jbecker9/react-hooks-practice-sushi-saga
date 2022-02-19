import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, renderSushi }) {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
      .then((r)=>r.json())
      .then((sushiData)=>renderSushi(sushiData.slice(count,4)))
  }, [])

  console.log(count)

  return (
    <div className="belt">
      {sushis.map((sushiMap)=><Sushi key={sushiMap.id} sushiMap={sushiMap}/>)}
      <MoreButton count={count} />
    </div>
  );
}

export default SushiContainer;
