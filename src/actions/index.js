export const INPUT_FIRST_OPERAND = 'INPUT_FIRST_OPERAND'
export const INPUT_SECOND_OPERAND = 'INPUT_SECOND_OPERAND';
export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export const onFirstOperandChange = (number) => ({
  type: INPUT_FIRST_OPERAND,
  value: number
});

export const onSecondOperandChange = (number) => ({
  type: INPUT_SECOND_OPERAND,
  value: number
});

export const onPlusClick = () => ({
  type: PLUS
});

export const onMinusClick = () => ({
  type: MINUS
});