import { INPUT_FIRST_OPERAND, INPUT_SECOND_OPERAND, PLUS, MINUS } from '../actions';

const initialAppState = {
  firstOperandValue: 0,
  secondOperandValue: 0,
  result: 0,
  savedInfo: []
};

const calculator = (state = initialAppState, action) => {
    console.log(state);
    switch (action.type) {
        case INPUT_FIRST_OPERAND:
            return Object.assign({}, state, {
                firstOperandValue: +action.value
            })
        case INPUT_SECOND_OPERAND:
            return Object.assign({}, state, {
                secondOperandValue: +action.value
            })
        case PLUS:
            return Object.assign({}, state, {
                result: state.firstOperandValue + state.secondOperandValue,
                savedInfo: state.savedInfo.concat({
                    firstOperand: state.firstOperandValue,
                    secondOperand: state.secondOperandValue,
                    operationType: 'PLUS',
                    operationResult: state.firstOperandValue + state.secondOperandValue
                })
            })
        case MINUS:
            return Object.assign({}, state, {
                result: state.firstOperandValue - state.secondOperandValue,
                savedInfo: state.savedInfo.concat({
                    firstOperand: state.firstOperandValue,
                    secondOperand: state.secondOperandValue,
                    operationType: 'MINUS',
                    operationResult: state.firstOperandValue - state.secondOperandValue
                })
            })
        default:
        return state
    }
};

export default calculator;