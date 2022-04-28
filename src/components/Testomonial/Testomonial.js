import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './TestomonialStyles';

// const data = [
//   { number:null , text: 'Vodafone CXX global hero'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];


const data ={
  name :['amin','minob'],
  job:["r2asa","ra2asa"],
  content :['kjgjhgjhgjhfhjfhgfhgf','jhfjhfjfjhfjfj']

}
const Testomonial = () => (
  <Section>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        width={'100%'}
        >
        
      <div>
        <img src="../../../public/images/chat1.png" />
        <myCarousel>
        <h3>{data.name[0]}</h3>
        <h4>{data.job[0]}</h4>
        <p>{data.content[0]}</p>
        </myCarousel>
      </div>
      <div>
        <img src="assets/1.jpeg" />
        <myCarousel>
        <h3>{data.name[0]}</h3>
        <h4>{data.job[0]}</h4>
        <p>{data.content[0]}</p>
        </myCarousel>
      </div>
      <div>
        <img src="assets/1.jpeg" />
        <myCarousel>
        <h3>{data.name[0]}</h3>
        <h4>{data.job[0]}</h4>
        <p>{data.content[0]}</p>
        </myCarousel>
      </div>
    </Carousel>
  </Section>
);

export default Testomonial;
