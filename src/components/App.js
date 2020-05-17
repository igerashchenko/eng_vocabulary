import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Word from "./Word";
import CreateArea from "./CreateArea";

function App() {
  const [words, setWords] = useState([]);

  function addWord(newWord) {
    setWords(prevWords => {
      return [...prevWords, newWord];
    });
  }

  function deleteWord(id) {
    setWords(prevWords => {
      return prevWords.filter((word, index) => {
        return index !== id;
      });
      
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addWord} />
      {words.map((word, index) => {
        return (
          <Word
            key={index}
            id={index}
            title={word.title}
            onDelete={deleteWord}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
