import React from 'react';
import { Navigation } from '../navigation';
import { HomePage } from '../../pages/home-page';
import {ABOUT, HOME, LOGIN, REGISTER} from '../../constants/routes'
import { AboutMe } from '../about-me/about-me';
import { StyledRouter } from './app.style';
import { LoginForm } from '../login-form/login-form';
import { RegisterForm } from '../register-form/register-form';

export const App = () => {  
  return (
    <div>
      <Navigation />
      <StyledRouter >
        <HomePage path={HOME}/>
        <AboutMe path={ABOUT}/>
        <LoginForm path={LOGIN}/>
        <RegisterForm path={REGISTER}/>
      </StyledRouter>
      {/* <Footer> */}
    </div>
  );
};

export default App;
