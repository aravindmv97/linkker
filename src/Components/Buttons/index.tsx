import React, { FC } from "react";
import styled from "styled-components";

import { ButtonProps } from "./Types";

const ButtonWrapper = styled.div<Pick<ButtonProps, "margin">>`
  margin: ${props => props.margin || 0};
`;

const Button = styled.div<Pick<ButtonProps, "size">>`
  height: ${props =>
    props.size === "small"
      ? "30px"
      : props => (props.size === "medium" ? "50px" : "60px")};
  width: ${props =>
    props.size === "small"
      ? "100px"
      : props => (props.size === "medium" ? "130px" : "150px")};
  border-radius: 5px;
  color: #fff;
  background: ${props =>
    props.size === "primary"
      ? "#36BEA1"
      : props => (props.size === "secondary" ? "#eee" : "#36BEA1")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Buttons: FC<ButtonProps> = ({
  margin,
  name,
  size,
  onClickProps
}) => {
  return (
    <ButtonWrapper margin={margin} onClick={onClickProps}>
      <Button size={size}>{name}</Button>
    </ButtonWrapper>
  );
};
