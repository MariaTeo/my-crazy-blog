import styled from "styled-components"

export const Nav = styled.nav`
  align-self: center;
  display: flex;
  justify-content: flex-end;
  right: 20px;
  position: relative;
  flex-direction: column;
  gap: 1px;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1040px) {
    flex-direction: row;
  }
`

export const Root = styled.div`
  position: fixed;
  padding: 10px;
  height: 40px;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  background: linear-gradient(
    158deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(4, 4, 47, 1) 0%,
    rgba(4, 4, 47, 1) 24%,
    rgba(4, 17, 60, 1) 55%,
    rgba(0, 212, 255, 1) 100%
  );
  transition: opacity 0.5s ease-in;
`

export const Nav2 = styled.div`
  display: flex;
  gap: 4px;
`
export const Logo = styled.img`
  left: 20px;
  top: 0;
  height: 50px;
  width: 150px;
`
export const Linkn = styled.div`
  font-size: 12px;
  text-decoration: none;
  border: 2px solid grey;
  border-radius: 13px;
  width: auto;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: white;

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    font-size: 16px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1040px) {
    padding: 8px 20px;
    margin-right: 20px;
    font-size: 18px;
  }

  &&:hover {
    transition: 250ms;
    background-color: black;
    a {
      color: #fff;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`

export const NavLogo = styled.div`
  width: 100%;
  height: 100%;
`
