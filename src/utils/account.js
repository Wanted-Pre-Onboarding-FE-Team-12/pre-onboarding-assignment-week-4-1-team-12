export const makeThousandSeparator = value => {
  if (!value) return value;
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',').split('.')[0];
};

export const makeAccountNumberMasking = value => {
  if (!value) return value;

  return value.replace(/(?=(\d{3}))[0-9](?<=(\d{3}))/g, '*');
};

export const makeDataFormatTheYearMonthDay = value => {
  if (!value) return value;
  return value.split('T')[0];
};

export const makeDataFormatTheYearMonthDayToSlash = value => {
  if (!value) return value;
  return value.split('T')[0].replace(/-/g, ' / ');
};
