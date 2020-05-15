import React from 'react';
import Option from './Option';


function Input() {

function drawOptionsList(optionsAmount=5){
    let optionsList = [];
    for (let i=0; i < optionsAmount; i++){
        optionsList.push(<Option />);
    }
    return optionsList;
}
  return (
        <div>{drawOptionsList}</div>
  );
}

export default Input;
