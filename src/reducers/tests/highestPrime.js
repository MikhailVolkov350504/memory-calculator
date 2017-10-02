import calculator from '../calculator';
import { BUTTON_CLICK } from '../../actions';

describe('should handle MINUS_BUTTON_CLICK', () => {
    it('max prime button click', () => {
        expect(
            calculator(
                {
                    firstOperandValue: 13,
                    secondOperandValue: 23,
                    result: 0,
                    savedInfo: []
                }, 
                {
                    type: BUTTON_CLICK,
                    operation: 'highest-prime'
                }
            )
        ).toEqual(
        {
            firstOperandValue: 13,
            secondOperandValue: 23,
            result: 23,
            savedInfo: [{
                firstOperand: 13,
                secondOperand: 23,
                operationType: 'HIGHEST_PRIME',
                operationResult: 23
            }]
        }
        )
    })
    it('max prime doesnt exist', () => {
        expect(
            calculator(
                {
                    firstOperandValue: 1,
                    secondOperandValue: 1,
                    result: 0,
                    savedInfo: []
                }, 
                {
                    type: BUTTON_CLICK,
                    operation: 'highest-prime'
                }
            )
        ).toEqual(
        {
            firstOperandValue: 1,
            secondOperandValue: 1,
            result: 0,
            savedInfo: [{
                firstOperand: 1,
                secondOperand: 1,
                operationType: 'HIGHEST_PRIME',
                operationResult: 0
            }]
        }
        )
    })
})
