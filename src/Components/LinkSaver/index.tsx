import React, { FC } from "react";
import styled from "styled-components";

import { TextInput } from "../Inputs/TextInput";
import { Buttons } from "../Buttons";

import { useInput } from "../../Hooks/Input";

const LinkSaverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: max-content;
  margin: 50px auto 0 auto;
`;

export const LinkSaver: FC = () => {
  const link = useInput("");
  return (
    <LinkSaverWrapper>
      <TextInput {...link} placeholder={"Paste link..."} />
      <Buttons margin={"0 0 0 20px"} name={"SAVE"} size={"medium"} />
    </LinkSaverWrapper>
  );
};
