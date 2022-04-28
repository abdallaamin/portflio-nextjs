import React from 'react';
import { DiFirebase, DiReact, DiZend  } from 'react-icons/di';
import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a Wide range of technologies in the web development field.
     My Fav stack lately is: Nextjs/React Js ,TypeScript, and chakra ui for styling
   </SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListTitle>Front-End</ListTitle>
       <ListParagraph>
        +3 years hands on exprience on: <br/>
         <li>javascript</li>
         <li>typeScript </li>
         <li>React.js</li>
         <li>Next.js</li>
         <li>React Native</li>
         <li>ThreeJs</li> 
         <li>P5js</li>
       </ListParagraph>
     </ListItem>
     <ListItem>
       <DiFirebase size="3rem"/>
       <ListTitle>Back-End</ListTitle>
       <ListParagraph>
        hands on exprience on: <br/>
         <li>Node.js</li>
         <li>Microservice Arch</li>
         <li>express </li>
         <li>Django</li>
         <li>Flask </li>
         <li>FireBase</li>
         <li>AzureDevOps</li>
         <br></br>
       </ListParagraph>
     </ListItem>
     <ListItem>
       <DiZend size="3rem"/>
       <ListTitle>UI/UX and More</ListTitle>
       <ListParagraph>
         experience with:<br/>
         <li>Tailwind Css</li>
         <li>styled component </li>
         <li>Chakra Ui</li>
         <li>MaterialUi</li>
        <li>Css ,Scss</li>
         <li>invision</li>
         <li>fegma</li>
         <li>Framer UI</li>
         <li>git/Github version control</li>
         <li>CI/CD and deployment</li>
         <li>Docker and containers</li>
         <li>Agile Methodolgy(Jira/Azure Boards)/ scaled agile (Safe)Methodolgy</li>
       </ListParagraph>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
