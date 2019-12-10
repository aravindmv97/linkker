import React from "react";

import { LinkSaver } from "../Components/LinkSaver";
import { LinksCollection } from "../Components/LinksCollection";

export default function HomePage() {
  return (
    <>
      <LinkSaver />
      <LinksCollection />
    </>
  );
}
