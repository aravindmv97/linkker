import React, { FC } from "react";
import styled from "styled-components";

import { LinkCardProps } from "./Types.d";

const LinkCardWrapper = styled.div`
  height: auto;
  width: auto;
  word-break: break-all;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  padding: 15px;
  margin: 30px 0 40px 0;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  color: gray;
  text-align: left;
  margin: 20px 0;
  line-height: 18px;
`;

const LinkDomainName = styled.div`
  font-weight: bold;
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: gray;
  padding: 4px;
  background: #eee;
  border-radius: 5px;
  text-align: center;
  margin: 20px 0;
`;

const Link = styled.div`
  font-size: 12px;
`;

const Description = styled.div`
  color: gray;
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 20px;
  margin-bottom: 15px;
`;

const DateWrapper = styled.div`
  font-weight: bold;
  letter-spacing: 0.5px;
  font-weight: bold;
  font-size: 9px;
  text-align: right;
`;

export const LinkCard: FC<LinkCardProps> = ({
  title,
  link,
  linkDescription,
  date
}) => {
  function getHostname(link: string): string {
    return new URL(link).hostname;
  }

  return (
    <LinkCardWrapper>
      <Title>{title}</Title>
      <LinkDomainName>{getHostname(link)}</LinkDomainName>
      {/* <Link>{link}</Link> */}
      <Description>
        {linkDescription && linkDescription.substr(1, 220)}
        {linkDescription && linkDescription.length >= 201 ? "..." : ""}
      </Description>
      <DateWrapper>SAVED ON {date}</DateWrapper>
    </LinkCardWrapper>
  );
};
