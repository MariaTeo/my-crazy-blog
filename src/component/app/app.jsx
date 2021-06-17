import React from 'react';
import CatWomanHero from '../../constants/images';
import { HomePopover } from '../home-popover/home-popover';
import { Section } from '../section/section';
import { Section2 } from '../section2/section2';

export const App = () => {
  return (
    <div>
      <Section hero>   
        <img src={CatWomanHero} alt="pisicuta" width="100%" />
      </Section>
      <HomePopover/>
      {/* <AS.HomeText>
        <div>Welcome to CatWoman's Blog</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
          culpa dicta, labore accusamus placeat odio et, officiis voluptatem
          delectus voluptate magni sit sint enim reprehenderit praesentium
          deserunt eaque nam?
        </div>
      </AS.HomeText> */}
      <Section2 />
    </div>
  );
};

export default App;
