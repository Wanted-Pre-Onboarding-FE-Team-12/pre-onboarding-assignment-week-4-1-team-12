export const makeThousandSeparator = value => {
  if (!value) {
    return value;
  }
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0];
};

export const makeAccountNumberMasking = value => {
  if (!value) {
    return value;
  }
  const firstNumber = value.substring(0, 2);
  const lastNumber = value.substring(value.length - 2, value.length);
  const maskingNumber = value.substring(1, value.length - 1).replace(/[0-9]/g, '*');
  return `${firstNumber}${maskingNumber}${lastNumber}`;
};
