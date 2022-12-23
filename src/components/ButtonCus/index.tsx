import { ReactNode } from "react";
export interface IButtonCusProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  title?: string;
}

export default function ButtonCus({
  iconLeft,
  iconRight,
  title,
}: IButtonCusProps) {
  return (
    <div className="buttonCus">
      {iconLeft}
      {title && <p className="title">{title}</p>}
      {iconRight}
    </div>
  );
}
