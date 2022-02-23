import React from "react";

function MoreButton({ getNextFour }) {

  function clickFour(){
    getNextFour()
  }


  return <button onClick={clickFour}>More sushi!</button>;
}

export default MoreButton;
