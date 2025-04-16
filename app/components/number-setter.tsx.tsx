import { useState } from "react";

interface Props {
  onNumberChange: (number: string) => void;
  disabled?: boolean;
}

export function Numbers({ onNumberChange }: Props) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const validate = (value: string) => {
    if (value.length > 4) return false;
    if (value.startsWith("0")) return false;
    if (new Set(value).size != value.length) return false;
    return /^[0-9]*$/.test(value);
  };
  const values = value.split("");
  const length = values.length;
  const onBlur = () => setFocused(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = validate(e.target.value);
    if (!validationResult) {
      e.preventDefault();
      return;
    }
    setValue(e.target.value);
    onNumberChange(e.target.value);
  };
  return (
    <label className="relative grid grid-cols-4 gap-2 max-w-full w-xs text-xl font-bold text-primary">
      <input
        type="text"
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        className="opacity-0 absolute"
        minLength={4}
        maxLength={4}
        autoFocus
        required
      />
      <div className="flex items-center justify-center aspect-square border-2 border-primary/70 rounded-md">
        {values[0] && values[0]}
        {length == 0 && focused && <Caret />}
      </div>
      <div className="flex items-center justify-center aspect-square border-2 border-primary/70 rounded-md">
        {values[1] && values[1]}
        {length == 1 && focused && <Caret />}
      </div>
      <div className="flex items-center justify-center aspect-square border-2 border-primary/70 rounded-md">
        {values[2] && values[2]}
        {length == 2 && focused && <Caret />}
      </div>
      <div className="flex items-center justify-center aspect-square border-2 border-primary/70 rounded-md">
        {values[3] && values[3]}
        {length >= 3 && focused && <Caret />}
      </div>
    </label>
  );
}

function Caret() {
  return <div className="h-[70%] w-[2px] bg-base-content animate-pulse"></div>;
}
