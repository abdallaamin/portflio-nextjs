import React from 'react';

import { Section, SectionText, SectionTitle ,SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Abdalla Amin <br/>
      </SectionTitle>
      <SectionSubText>
      Hello, I'm a Full-stack Software Engineer based in Cairo,Egypt!
      </SectionSubText>
        <SectionText>
            I have +3 years of hands on Experience from launching my own startup to working in a small/medium size startups, currently working for big corporate.<br/>
            I have a passion for working on artistic/technical projects. <br/>
            When I am not coding you can find me chilling mostly or playing my Bass Guitar.<br/>
            So if you are looking for building your next creative website lets get in touch and build it togther.<br/>
        </SectionText>
        <Button onClick={()=>window.location ="mailto:amin@meenamin.com"}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;