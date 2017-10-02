import calculator from '../calculator';
import { BUTTON_CLICK } from '../../actions';

describe('should handle MINUS_BUTTON_CLICK', () => {
    it('minus button click', () => {
        expect(
            calculator(
                {
                    firstOperandValue: 11,
                    secondOperandValue: 44,
                    result: 0,
                    savedInfo: []
                }, 
                {
                    type: BUTTON_CLICK,
                    operation: 'minus'
                }
            )
        ).toEqual(
        {
            firstOperandValue: 11,
            secondOperandValue: 44,
            result: -33,
                savedInfo: [{
                    firstOperand: 11,
                    secondOperand: 44,
                    operationType: 'MINUS',
                    operationResult: -33
                }]
            }
        )
    })       
})
