import React, { FC, ReactNode } from "react";
import styled from "styled-components";
type Props = {
  children: ReactNode;
  type: "button" | "submit";
};
const Button: FC<Props> = (props) => {
  const { children, type } = props;
  return <SButton type={type}>{children}</SButton>;
};

const SButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export default Button;
