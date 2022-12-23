import { ReactNode } from "react";
import "./style.scss";

export interface IHeaderProps {
  children: ReactNode;
}

export default function Header({ children }: IHeaderProps) {
  return <div className="header">{children}</div>;
}
