export const validateEmail = email => {
  const emailRegex = /@/g;
  return emailRegex.test(email);
};

export const validatePassword = password => {
  const passwdRegex = /.{8,}/;
  return passwdRegex.test(password);
};
