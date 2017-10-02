import React from 'react'

const SavedResults = ({ savedResults }) => {
    const tableItems = savedResults.map((result, index) =>
        <tr key={ index }>
            <td>{ result.firstOperand }</td>
            <td>{ result.secondOperand }</td> 
            <td>{ result.operationType }</td>
            <td>{ result.operationResult }</td>
        </tr>
    );
    
    return (tableItems.length > 0) ? (
        <table className="result-table">
            <tbody>
                <tr>
                    <th>First Operand</th>
                    <th>Second Operand</th> 
                    <th>Operation type</th>
                    <th>Result</th>
                </tr>
                { tableItems }
            </tbody>
        </table>
    ): null
}

export default SavedResults
