import React from "react";
import styled from "styled-components";

import HomePage from "./Containers/HomePage";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
};

export default App;
