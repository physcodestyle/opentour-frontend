import { ButtonHTMLAttributes, FC } from "react";
import "./RegularButton.css";

interface RegularButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: "default" | "focus" | "hover" | "pressed" | "disabled";
}

export const RegularButton: FC<RegularButtonProps> = ({ ...props }) => {
  return (
    <div className="button__wrapper">
      <button className="button__element" {...props}>
        Caption
      </button>
    </div>
  );
};
