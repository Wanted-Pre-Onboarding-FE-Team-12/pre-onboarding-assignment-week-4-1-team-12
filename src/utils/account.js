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
  return value.replace(/(?=(\d{3}))[0-9](?<=(\d{3}))/g, '*');
};
