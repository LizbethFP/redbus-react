export const actionTypes = {
  INSTRUCTIONS_INTERNET_BANK: 'INSTRUCTIONS_INTERNET_BANK',
  INSTRUCTIONS_CASH_PAY: 'INSTRUCTIONS_CASH_PAY'
};

export const showInstructionsIntBank = text => ({
  type: actionTypes.INSTRUCTIONS_INTERNET_BANK,
  text
});

export const showInstructionsCashPay = value => ({
  type: actionTypes.INSTRUCTIONS_CASH_PAY,
  value
});