import React from 'react';
import { CatCarousel } from '../carousel/carousel';
import { Section } from '../section/section';
import { Steps } from './config';

export const MainPage = () => {
  return (
    <Section>
      <CatCarousel Steps={Steps}/>
      {/* trimitem steps ca prop din main-page; carousel e reusable */}
    </Section>
  );
};
