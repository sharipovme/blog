import { MouseEventHandler, ReactNode } from "react";

const colorSchemes = {
  green: "button button__green",
  blue: "button button__blue",
  grey: "button button__grey",
};

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  colorScheme?: keyof typeof colorSchemes;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  colorScheme = "blue",
  children,
  isDisabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={colorSchemes[colorScheme]}
    >
      {children}
    </button>
  );
};
