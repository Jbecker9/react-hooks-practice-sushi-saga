import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
      .then((r)=>r.json())
      .then((sushiData)=>{
        setFourSushis(sushiData.splice(0,4))
        setSushis(sushiData)
      })
    }, [])

  function getNextFour(){
    // debugger
    const allSushis = sushis
    const sushiSplice = allSushis.splice(0,4)
    setFourSushis(sushiSplice)
    setSushis(allSushis)
  }
  

  return (
    <div className="app">
      <SushiContainer sushis={fourSushis} getNextFour={getNextFour} />
      <Table />
    </div>
  );
}

export default App;
