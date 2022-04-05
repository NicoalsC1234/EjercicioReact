import React, { useState } from "react";

function CardMuseum({museum}) {
  const [museo] = useState(museum);
  return (
      <div>
      <img src={museo.image} alt={museo.description} />
      <h3>{museo.name}</h3>
      <h6>{museo.city}</h6>
    </div>
  );
}

export default CardMuseum;