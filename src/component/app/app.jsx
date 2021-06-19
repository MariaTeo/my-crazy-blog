import React from 'react';
import CatWomanHero from '../../constants/images';
import { HomePopover } from '../home-popover/home-popover';
import { Section } from '../section/section';
import { Section2 } from '../section2/section2';

export const App = () => {
  return (
    <div>
     
        <Section hero>
          <HomePopover />
          <img src={CatWomanHero} alt="pisicuta" width="100%" />
          <Section2 />
        </Section>
      {/* <Footer> */}
        
       
    </div>
  );
};

export default App;
