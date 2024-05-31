/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

export type TextareaProps = {
  name: string;
  control: Control<FieldValues>;
  errors: any;
  textaraProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const Textarea: React.FC<TextareaProps> = ({
  name,
  control,
  errors,
  textaraProps = {},
}: TextareaProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea id={name} {...field} {...textaraProps} />
        )}
      />
      {errors[name] && <p className="error-message">{errors[name].message}</p>}
    </div>
  );
};

export { Textarea };
