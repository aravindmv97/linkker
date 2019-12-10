import { useState, ChangeEvent } from "react";

// Inputs => text, number
export function useInput(initialValue: string): any {
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: onChangeHandler
  };
}
