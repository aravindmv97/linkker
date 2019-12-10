import React, { SFC } from "react";
import styled from "styled-components";

import { InputProps } from "./Types.d";

const InputWrapper = styled.div``;

const InputBox = styled.input`
  height: ${props => props.height || "40px"};
  width: ${props => props.width || "400px"};
  border-radius: 5px;
  border: 1px solid #eee;
  font-size: 16px;
  padding: 10px;
  outline: none;

  &:focus {
    border: 1px solid gray;
    outline: 0;
  }
`;

export const TextInput: SFC<InputProps> = ({ placeholder, utils }) => {
  return (
    <InputWrapper>
      <InputBox placeholder={placeholder} {...utils} />
    </InputWrapper>
  );
};
