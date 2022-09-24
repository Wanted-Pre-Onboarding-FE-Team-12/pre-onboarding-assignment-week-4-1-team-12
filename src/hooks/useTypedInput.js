import { useState } from 'react';

const useTypedInput = initValue => {
  const [value, setValue] = useState(initValue);

  // onChange
  const handleChange = e => {
    if (typeof initValue === 'number') {
      if (isNaN(+e.target.value)) {
        setValue(0);
      } else {
        setValue(+e.target.value);
      }
    }
    if (typeof initValue === 'string') {
      console.log('countS');
      setValue(e.target.value);
    }
    if (typeof initValue === 'boolean') {
      setValue(e.target.checked);
    }
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useTypedInput;
