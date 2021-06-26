import React from 'react';
import { Navigation } from '../navigation';
import { HomePage } from '../../pages/home-page';
import {ABOUT, HOME} from '../../constants/routes'
import { AboutMe } from '../about-me/about-me';
import { StyledRouter } from './app.style';

export const App = () => {  
  return (
    <div>
      <Navigation />
      <StyledRouter >
        <HomePage path={HOME}/>
        <AboutMe path={ABOUT}/>
      </StyledRouter>
      {/* <Footer> */}
    </div>
  );
};

export default App;
