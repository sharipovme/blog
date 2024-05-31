/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

export type InputProps = {
  name: string;
  control: Control<FieldValues>;
  errors: any;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  name,
  control,
  errors,
  inputProps = {},
}: InputProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input id={name} {...field} {...inputProps} />}
      />
      {errors[name] && <p className="error-message">{errors[name].message}</p>}
    </div>
  );
};

export { Input };
