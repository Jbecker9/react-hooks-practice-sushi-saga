import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const [sushis, setSushis] = useState([])

  function renderSushi(prop){
    setSushis(prop)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} renderSushi={(prop)=>renderSushi(prop)}/>
      <Table />
    </div>
  );
}

export default App;
