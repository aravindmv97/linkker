import React, { FC, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { TextInput } from "../Inputs/TextInput";
import { Buttons } from "../Buttons";

import { useInput } from "../../Hooks/Input";

var getFavicons = require("get-website-favicon");

const LinkSaverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: max-content;
  margin: 50px auto;
`;

export const LinkSaver: FC = () => {
  const link = useInput(
    "https://www.typescriptlang.org/docs/handbook/utility-types.html"
  );
  const [siteName, setSiteName] = useState("");

  function getFavSiteName() {
    if (link.value) {
      setSiteName(link.value);
    }
  }

  return (
    <LinkSaverWrapper>
      <TextInput {...link} placeholder={"Paste link..."} />
      <Buttons
        onClickProps={getFavSiteName}
        margin={"0 0 0 20px"}
        name={"SAVE"}
        size={"medium"}
      />
    </LinkSaverWrapper>
  );
};
