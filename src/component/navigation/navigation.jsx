import { Link } from "@reach/router"
import React from "react"
import {
  ABOUT,
  CONTACT,
  HOME,
  LOGIN,
  MY_PROJECTS,
  REGISTER,
} from "../../constants/routes"
import { useStyles } from "./navigation.style"
import { NavLogo } from "../../constants/images"
import * as S from "./navigation.style"

export const Navigation = () => {
  return (
    <S.Root>
      <S.NavLogo>
        <S.Logo src={NavLogo} alt="logo catwoman"></S.Logo>
      </S.NavLogo>
      <S.Nav>
        <S.Nav2>
          <S.Linkn>
            <Link to={HOME}>Home</Link>
          </S.Linkn>

          <S.Linkn>
            <Link to={LOGIN}>Login</Link>
          </S.Linkn>
          
          <S.Linkn>
            <Link to={REGISTER}>Register</Link>
          </S.Linkn>
        </S.Nav2>

        <S.Nav2>
          <S.Linkn>
            <Link to={ABOUT}>About me</Link>
          </S.Linkn>

          <S.Linkn>
            <Link to={CONTACT}>Contact</Link>
          </S.Linkn>

          <S.Linkn>
            <Link to={MY_PROJECTS}>My projects</Link>
          </S.Linkn>
        </S.Nav2>
      </S.Nav>
    </S.Root>
  )
}
