import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Reach Me on Mobile/(Whatsapp)</LinkTitle>
        <LinkItem href="tel:+201145572259" >+201145572259</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:abdo.faozy@gmail.com" target="_blank">abdo.faozy@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          Made @cairo With Love ❤️ By Abdalla Amin.
          <br/>
          ©2022 All Rights Reserved.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/abdallaamin" target="_blank" rel="github">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/abdalla-amin-2548ba122/" target="_blank" rel="linkedin">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/theaminoz/" target="_blank" rel="instagram">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
