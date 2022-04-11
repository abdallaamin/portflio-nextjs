import React from 'react';

import { Section, SectionText, SectionTitle ,SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Abdallaaaa Aminoo <br/>
      </SectionTitle>
      <SectionSubText>
        Fullstack web developer
      </SectionSubText>
        <SectionText>
            Hi there My name is Abdalla Amin but you can call me Amin , I am a fullstack engineer and UI/UX designer ,<br/>
            When i am not coding you can find me chilling mostly <br/>
            I love working on projects that includes different form of art like music or draweing with web technology <br/>
            so if you are looking for building your next creative website lets get in touch and build it toghter
        </SectionText>
        <Button onClick={()=>window.location ="mailto:amin@meenamin.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;