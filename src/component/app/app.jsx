import React from 'react'
import CatWomanHero from '../../constants/images'
import { Section } from '../section/section'
import { Section2 } from '../section2/section2'



export const App = () => {
  return(
    <>
    <Section hero><img src={CatWomanHero} alt='pisicuta' width='100%'/></Section>
    <Section>
      <div>Welcome to my crazy Blog</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod culpa dicta, labore accusamus placeat odio et, officiis voluptatem delectus voluptate magni sit sint enim reprehenderit praesentium deserunt eaque nam?</p>
    </Section>
    <Section2/>
    </>
  )
}


// export default App
