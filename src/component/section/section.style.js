import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 70vh;
  width: 100%;
  margin: ${({ hero }) => hero ? '0' : '4rem'}
`;
