export function setValueToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getValueFromLocalStorage(key) {
  const rawData = localStorage.getItem(key);
  return JSON.parse(rawData);
}

export function deleteValueFromLocalStorage(key) {
  localStorage.removeItem(key);
}
