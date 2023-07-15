import React from "react";
import "../Calculator.css";

const OutputScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input className={props.Name} type="text" readOnly value={props.value} />
    </div>
  );
};

export default OutputScreenRow;
