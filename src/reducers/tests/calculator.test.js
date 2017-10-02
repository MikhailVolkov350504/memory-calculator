import calculator from '../calculator';

describe('calculator reducer', () => {
    it('should return the initial state', () => {
        expect(calculator(undefined, {})).toEqual(
        {
            firstOperandValue: 0,
            secondOperandValue: 0,
            result: 0,
            savedInfo: []
        })
    })
})
