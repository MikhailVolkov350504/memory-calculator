import calculator from '../calculator';
import { INPUT_OPERAND, BUTTON_CLICK } from '../../actions';

describe('should handle PLUS_BUTTON_CLICK', () => {
    it('invalid type should return state', () => {
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
                    operation: 'invalid'
                }
            )
        ).toEqual(
            {
                firstOperandValue: 13,
                secondOperandValue: 23,
                result: 0,
                savedInfo: []
            }
        )
    })
        it('plus button click', () => {
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
                        operation: 'plus'
                    }
                )
            ).toEqual(
            {
                firstOperandValue: 13,
                secondOperandValue: 23,
                result: 36,
                savedInfo: [{
                    firstOperand: 13,
                    secondOperand: 23,
                    operationType: 'PLUS',
                    operationResult: 36
                }]
            }
            )
        })
    })
