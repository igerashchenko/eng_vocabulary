import React, { useState } from "react";

function CreateArea(props) {
  const [word, setWord] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setWord(prevWord => {
      return {
        ...prevWord,
        [name]: value
      };
    });
  }

  function submitWord(event) {
    props.onAdd(word);
    setWord({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={word.title}
          placeholder="Enter the word"
        />
        <button onClick={submitWord}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
