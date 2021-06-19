import React from 'react';
import { CatCarousel } from '../carousel/carousel';
import { Section } from '../section/section';
import { Steps } from './config';

export const Section2 = () => {
  return (
    <Section>
      <CatCarousel Steps={Steps}/>
      {/* trimitem steps ca prop din section2; carousel e reusable */}
    </Section>
  );
};
