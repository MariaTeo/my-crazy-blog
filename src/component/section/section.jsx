import React from 'react'
import * as S from './section.style'
import PropTypes from 'prop-types'


// un  functional component care primeste 2 props; apoi am definit tipul de prop
export const Section = ({children, hero}) => {
  return(
    <S.Wrapper hero={hero}>{children}</S.Wrapper>
  )}

Section.propTypes = {
  children: PropTypes.node.isRequired, //trebuie sa primeasa children ca sa mearga componentul
  hero: PropTypes.bool  //adevarat sau fals
}

Section.defaultProps = {
  hero: false  //default
}
