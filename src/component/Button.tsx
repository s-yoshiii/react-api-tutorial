import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../utils/color";
import { media } from "../utils/media";
type Props = {
  children: ReactNode;
  type: "button" | "submit";
  variant?: "outlined" | "contained";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: FC<Props> = (props) => {
  const { children, type, variant, onClick } = props;
  return (
    <SButton type={type} className={variant} onClick={onClick}>
      {children}
    </SButton>
  );
};

const SButton = styled.button`
  letter-spacing: 0.024em;
  transition: .3s ease;
  cursor: pointer;
  font-size: 18px;
  font-weight:400;
  color: ${color.secondary};
  &.outlined {
    font-size: 24px;
    font-weight: 700;
    padding: 14px;
    background: ${color.white};
    border: 2px solid ${color.secondary};
    min-width: 250px;
    &:hover{
      background: ${color.secondary};
      color: ${color.white};
    }
  }
  &.contained{
      font-weight: 700;
      padding: 14px;
      color: ${color.white};
      background: ${color.secondary};
      border: 2px solid ${color.secondary};
      min-width: 250px;
      &:hover{
        background: ${color.white};
        color: ${color.secondary};
      }
    }
  }
`;

export default Button;
