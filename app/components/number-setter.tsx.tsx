import { useState } from "react";

interface Props {
  onNumberChange: (number: string) => void;
  disabled?: boolean;
}

export function NumberInput({ onNumberChange }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => setIsFocused(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const isValid = validateNumber(newValue);
    if (!isValid) {
      event.preventDefault();
      return;
    }
    setInputValue(newValue);
    onNumberChange(newValue);
  };

  const inputValues = inputValue.split("");
  const inputLength = inputValues.length;

  return (
    <label className="relative grid grid-cols-4 gap-2 max-w-full w-xs text-xl font-bold text-primary">
      <input
        type="text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        className="opacity-0 absolute"
        minLength={4}
        maxLength={4}
        autoFocus
        required
      />
      {inputValue.length === 0 &&
        Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="border-1 border-secondary/60 rounded-md aspect-square animate-pulse"
            ></div>
          ))}
      {inputValues.map((value, index) => (
        <div
          key={index}
          className="flex items-center justify-center aspect-square border-2 border-primary/70 rounded-md"
        >
          {value}
          {inputLength === index && isFocused && <Caret />}
        </div>
      ))}
    </label>
  );
}

function validateNumber(value: string) {
  if (value.length > 4) return false;
  if (value.startsWith("0")) return false;
  if (new Set(value).size !== value.length) return false;
  return /^[0-9]*$/.test(value);
}

function Caret() {
  return <div className="h-[70%] w-[2px] bg-base-content animate-pulse"></div>;
}
