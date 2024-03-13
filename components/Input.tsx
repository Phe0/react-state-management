import { FormEvent } from "react";

interface InputProps {
  id: string;
  label: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

export default function Input({ id, label, onChange }: InputProps) {
  return (
    <div className="flex flex-col w-64">
      <label
        htmlFor={id}
        className="font-mono text-l font-bold text-white pb-1"
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        onChange={onChange}
        className="h-8 rounded-md mb-4 pl-2 pr-2 font-mono"
      />
    </div>
  );
}
