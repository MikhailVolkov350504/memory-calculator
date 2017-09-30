import React from 'react'



const SavedResults = ({ savedResults }) => {
    const listItems = savedResults.map((result, index) =>
        <li key={ index }>
            {`${result.firstOperand} ${result.operationType} ${result.firstOperand} = ${result.operationResult}`}
        </li>
    );
    
    return (<ul>{listItems}</ul>)
}

export default SavedResults
