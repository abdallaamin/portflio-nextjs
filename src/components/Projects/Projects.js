import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import SimpleImageSlider from "react-simple-image-slider";


//to adjust Image carousal width when colapse to mobile view 
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({id , image,title, description,tags,source,visit})=>(
          <BlogCard key={id}>
          <SimpleImageSlider
          style={{borderRadius:5}}
          width={400}
          height={300}
          images={image}
          showBullets={true}
          showNavs={false}
          loop
          autoPlay={true}
        />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent></TitleContent>
              <TagList>
                {tags.map((tag,i)=>(
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
              <CardInfo></CardInfo>
              
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target='_blank'>Visit website</ExternalLinks>
              <ExternalLinks href={source} target='_blank'>Check code on github</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;