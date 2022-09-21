export const makeThousandSeparator = value => {
  if (!value) {
    return value;
  }
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0];
};
