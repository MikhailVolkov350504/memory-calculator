import { INPUT_OPERAND, BUTTON_CLICK } from '../actions';

const initialAppState = {
  firstOperandValue: 0,
  secondOperandValue: 0,
  result: 0,
  savedInfo: []
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const isPrime = (number) => {
    if (number < 2) return false;
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

const getHighestPrime = (a, b) => {
    let highestPrime;
    let maxOperand = Math.max(a, b);
    let minOperand = Math.min(a, b);

    for (let i = maxOperand; i >= minOperand; i--) {
        if(isPrime(i)) {
            highestPrime = i;
            break;
        }
    }
    return highestPrime;
}

const calculator = (state = initialAppState, action) => {
    switch (action.type) {
        case INPUT_OPERAND:
            if(action.id === 1) {
                return Object.assign({}, state, {
                    firstOperandValue: +action.value
                })
            } else if( action.id === 2) {
                return Object.assign({}, state, {
                    secondOperandValue: +action.value
                })
            }
        case BUTTON_CLICK:
            if (action.operation === 'plus') {
                if(isNumeric(state.firstOperandValue) && isNumeric(state.secondOperandValue)) {
                    let result = state.firstOperandValue + state.secondOperandValue;
                    return Object.assign({}, state, {
                        result: result,
                        savedInfo: state.savedInfo.concat({
                            firstOperand: state.firstOperandValue,
                            secondOperand: state.secondOperandValue,
                            operationType: 'PLUS',
                            operationResult: result
                        })
                    })
                }
            } else if(action.operation === 'minus') {
                if(isNumeric(state.firstOperandValue) && isNumeric(state.secondOperandValue)) {
                    let result = state.firstOperandValue - state.secondOperandValue;
                    return Object.assign({}, state, {
                        result: state.firstOperandValue - state.secondOperandValue,
                        savedInfo: state.savedInfo.concat({
                            firstOperand: state.firstOperandValue,
                            secondOperand: state.secondOperandValue,
                            operationType: 'MINUS',
                            operationResult: result
                        })
                    })
                }
            } else if(action.operation === 'divide') {
                if(isNumeric(state.firstOperandValue) && isNumeric(state.secondOperandValue)) {
                    let result = state.firstOperandValue / state.secondOperandValue;
                    return Object.assign({}, state, {
                        result: state.firstOperandValue / state.secondOperandValue,
                        savedInfo: state.savedInfo.concat({
                            firstOperand: state.firstOperandValue,
                            secondOperand: state.secondOperandValue,
                            operationType: 'DIVIDE',
                            operationResult: result
                        })
                    })
                }
            } else if(action.operation === 'multiply') {
                if(isNumeric(state.firstOperandValue) && isNumeric(state.secondOperandValue)) {
                    let result = state.firstOperandValue * state.secondOperandValue;
                    return Object.assign({}, state, {
                        result: state.firstOperandValue * state.secondOperandValue,
                        savedInfo: state.savedInfo.concat({
                            firstOperand: state.firstOperandValue,
                            secondOperand: state.secondOperandValue,
                            operationType: 'MULTIPLY',
                            operationResult: result
                        })
                    })
                }
            } else if(action.operation === 'remainder') {
                if(isNumeric(state.firstOperandValue) && isNumeric(state.secondOperandValue)) {
                    let result = state.firstOperandValue % state.secondOperandValue;
                    return Object.assign({}, state, {
                        result: state.firstOperandValue % state.secondOperandValue,
                        savedInfo: state.savedInfo.concat({
                            firstOperand: state.firstOperandValue,
                            secondOperand: state.secondOperandValue,
                            operationType: 'REMAINDER',
                            operationResult: result
                        })
                    })
                }
            } else if(action.operation === 'highest-prime') {
                if(isNumeric(state.firstOperandValue) && isNumeric(state.secondOperandValue)) {
                    let maxPrime = getHighestPrime(state.firstOperandValue, state.secondOperandValue);
                    if(typeof maxPrime !== 'undefined') {
                        return Object.assign({}, state, {
                            result: maxPrime,
                            savedInfo: state.savedInfo.concat({
                                firstOperand: state.firstOperandValue,
                                secondOperand: state.secondOperandValue,
                                operationType: 'HIGHEST_PRIME',
                                operationResult: maxPrime
                            })
                        })
                    }
                }
            }
        default:
            return state
    }
};

export default calculator;