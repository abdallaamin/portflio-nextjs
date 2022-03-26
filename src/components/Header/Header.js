import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiInternalInjury } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
  
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex" , alignItems:"center",color:"white"}}>
            <GiInternalInjury size="3rem" style={{padding:"0 4px 0 0",marginBotom:"20;"}}/><Span>portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2 >
      <li>
        <Link href="#projects">
        <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/abdallaamin" target="_blank" rel="github">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/abdalla-amin-2548ba122/" target="_blank" rel="linkedin">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/theaminoz/" target="_blank" rel="instagram">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
