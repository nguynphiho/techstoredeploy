import { useEffect, useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(''),
    onChange: (event) => {
      setValue(event.target.value);
    },
  };
};

export const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(false),
    onChange: (event) => {
      setValue(event.target.checked);
    },
  };
};

export const useAvatar = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: useEffect(() => (value && URL.revokeObjectURL(value))),
    onChange: (event) => {
      const file = event.target.files[0];
      file.preview = URL.createObjectURL(file);
      setValue(file);
    },
  };
};

export default useInput;
