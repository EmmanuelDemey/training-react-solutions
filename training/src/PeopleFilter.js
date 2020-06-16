import React from "react";

export default ({ onChangeHandler }) => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-info"
          type="text"
          onChange={(event) => onChangeHandler(event.target.value)}
        />
      </div>
    </div>
  );
};
