import React from "react";

function Word(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="word">
      <h1>{props.title}</h1>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Word;
