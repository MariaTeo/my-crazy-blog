import React from 'react';
import { Navigation } from '../navigation';
import { HomePage } from '../../pages/home-page';
import {HOME} from '../../constants/routes'

export const App = () => {
  return (
    <div>
      <Navigation />
      <HomePage path={HOME}/>
      {/* <Footer> */}
    </div>
  );
};

export default App;
