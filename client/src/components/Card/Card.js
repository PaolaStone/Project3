import React from "react";

export const Card = (props) => (
  <div className="card">
    
    <div className="card-body">
      {props.children}
    </div>
  </div>
);
