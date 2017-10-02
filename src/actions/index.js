export const INPUT_OPERAND = 'INPUT_OPERAND';
export const BUTTON_CLICK = 'BUTTON_CLICK';

export const onOperandChange = (number, id) => ({
  type: INPUT_OPERAND,
  id: id,
  value: number
});

export const onButtonClick = (operation) => ({
  type: BUTTON_CLICK,
  operation
});
