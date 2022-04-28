import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: 'The Vodafone CXX global hero featured as one of 25 under 25 amazing entrepreneurs in Cairo 2017'},
  { text: 'Global Cxx Hero: for quarter 2020 at _VOIS for starting a covid-bot initiative, which included me implementing and delivering a chatbot experience and it went live in 4 major countries', },
  { text: 'leading a team of FE developers to deliver a digital transofrmation core project for _VOIS ', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
