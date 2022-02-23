import React from "react";

function Sushi({ sushiMap }) {

  return (
    <div className="sushi">
      <div className="plate" onClick={}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={sushiMap.img_url}
            alt={sushiMap.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiMap.name} - ${sushiMap.price}
      </h4>
    </div>
  );
}

export default Sushi;
