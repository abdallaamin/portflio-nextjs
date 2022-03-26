import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a range of technologies in the web development world.
     from back-end To design
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListTitle>Front-End</ListTitle>
       <ListParagraph>
         experience with <br/>
         React.js
       </ListParagraph>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
       <ListTitle>Back-End</ListTitle>
       <ListParagraph>
         experience with <br/>
         Node.js<br></br>express 
       </ListParagraph>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
       <ListTitle>UI/UX</ListTitle>
       <ListParagraph>
         experience with <br/>
         invision<br></br>fegma
       </ListParagraph>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
