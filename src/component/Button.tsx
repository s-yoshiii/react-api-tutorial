import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
import { color } from "../utils/color";
import { media } from "../utils/media";
type Props = {
  children: ReactNode;
  type: "button" | "submit";
  // variant: "outlined" | "contained" | "text";
  outlined?: boolean;
  contained?: boolean;
  text?: boolean;
  onClick?: () => void;
};
const Button: FC<Props> = (props) => {
  const { children, type } = props;
  return <SButton type={type}>{children}</SButton>;
};

const SButton = styled.button`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.024em;
  ${(outlined) =>
    outlined &&
    css`
      padding: 14px;
      color: ${color.secondary};
      background: ${color.white};
      border: 2px solid ${color.secondary};
      min-width: 250px;
    `},
  ${(contained) =>
    contained &&
    css`
      padding: 14px;
      color: ${color.white};
      background: ${color.secondary};
      border: 2px solid ${color.secondary};
      min-width: 250px;
    `}
  ${media("sm")`
    background-color: green;
  `};
`;
export default Button;
