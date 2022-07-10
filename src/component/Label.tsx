import React, { FC, ReactNode } from "react";
import { color } from "../utils/color";
import styled from "styled-components";
type Props = {
  children: ReactNode;
};
const Label: FC<Props> = (props) => {
  const { children } = props;
  return <SLabel>{children}</SLabel>;
};
const SLabel = styled.div`
  display: inline-block;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  background: ${color.labelcolor};
  padding: 3px 20px;
  margin: 0 3px 6px;
`;
export default Label;
