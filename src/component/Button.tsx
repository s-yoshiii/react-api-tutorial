import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";
type Props = {
  children: ReactNode;
  type: "button" | "submit";
  // variant: "outlined" | "contained" | "text";
  outlined?: boolean;
  contained?: boolean;
  text?: boolean;
};
const Button: FC<Props> = (props) => {
  const { children, type } = props;
  return <SButton type={type}>{children}</SButton>;
};

const SButton = styled.button`
  ${(outlined) =>
    outlined &&
    css`
      padding: 14px;
      color: #54bab9;
    `}
`;
export default Button;
