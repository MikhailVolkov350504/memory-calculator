import React from 'react';

const OperationButton = ({ type, onClick }) => {
  let button;

  switch (type) {
    case "minus":
      button =  (<button className="button" onClick={ onClick }>-</button>);
      break;
    case "plus":
      button =  <button className="button" onClick={ onClick }>+</button>
      break;
    case "divide":
      button =  <button className="button" onClick={ onClick }>/</button>
      break;
    case "multiply":
      button =  <button className="button" onClick={ onClick }>*</button>
      break;
    case "remainder":
      button =  <button className="button"onClick={ onClick }>%</button>
      break;
    case "highest-prime":
      button =  <button className="button" id="max-prime-button" onClick={ onClick }>max prime</button>
      break;
    default:
      button =  null;
  }
    return button;
}

export default OperationButton
