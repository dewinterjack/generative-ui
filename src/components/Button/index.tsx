import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="text-blue-500" {...props}>
      {children}
    </button>
  );
};
