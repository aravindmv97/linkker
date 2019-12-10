import React, { FC } from "react";
import styled from "styled-components";

import Menu from "../Images/menu.png";
import Link from "../Images/link.png";
import DP from "../Images/dp.png";

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const AppLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImageWrapper = styled.div``;

const MenuIcon = styled.img``;

const Logo = styled.img``;

const AppName = styled.div`
  color: #58d68d;
`;

const Avatar = styled.img``;

const AddLinkWrapper = styled.div``;

const AddLink = styled.img``;

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <AppLinksWrapper>
        <ImageWrapper>
          <MenuIcon src={Menu} />
        </ImageWrapper>
        <ImageWrapper>
          <Logo />
        </ImageWrapper>
        <AppName />
      </AppLinksWrapper>
      <ProfileLinksWrapper>
        <AddLinkWrapper>
          <ImageWrapper>
            <MenuIcon />
          </ImageWrapper>
          <AddLink src={Link} />
        </AddLinkWrapper>
        <ImageWrapper>
          <Avatar src={DP} />
        </ImageWrapper>
      </ProfileLinksWrapper>
    </HeaderWrapper>
  );
};

// nav drawer trigger
// Logo
// Avatar
// Add link
