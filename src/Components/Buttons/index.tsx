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
      ? "gray"
      : props => (props.size === "secondary" ? "#eee" : "#000")};
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
  onCLickProps
}) => {
  return (
    <ButtonWrapper margin={margin}>
      <Button onClick={onCLickProps} size={size}>
        {name}
      </Button>
    </ButtonWrapper>
  );
};
