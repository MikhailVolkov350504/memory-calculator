import calculator from '../calculator';
import { INPUT_OPERAND } from '../../actions';

describe('should handle INPUT_OPERAND', () => {
    it('normal input for first operand', () => {
        expect(
            calculator(
                {
                    firstOperandValue: 0,
                    secondOperandValue: 0,
                    result: 0,
                    savedInfo: []
                }, 
                {
                    type: INPUT_OPERAND,
                    id: 1,
                    value: '123'
                }
            )
        ).toEqual(
            {
                firstOperandValue: 123,
                secondOperandValue: 0,
                result: 0,
                savedInfo: []
            }
        )
    })
    it('normal input for second operand', () => {
        expect(
            calculator(
                {
                    firstOperandValue: 0,
                    secondOperandValue: 0,
                    result: 0,
                    savedInfo: []
                }, 
                {
                    type: INPUT_OPERAND,
                    id: 1,
                    value: '456'
                }
            )
        ).toEqual(
            {
                firstOperandValue: 456,
                secondOperandValue: 0,
                result: 0,
                savedInfo: []
            }
        )
    })
    it('invalid id', () => {
        expect(
            calculator(
                {
                    firstOperandValue: 0,
                    secondOperandValue: 0,
                    result: 0,
                    savedInfo: []
                }, 
                {
                    type: INPUT_OPERAND,
                    id: 3,
                    value: '123'
                }
            )
        ).toEqual(
            {
                firstOperandValue: 0,
                secondOperandValue: 0,
                result: 0,
                savedInfo: []
            }
        )
    })        
})
