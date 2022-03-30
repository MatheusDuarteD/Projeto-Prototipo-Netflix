import React from 'react'
import * as S from './style'

export default function NavBar() {
  return (
    <>
      <S.WrapperNavBar>
        <S.WrapperNavBarImage>
          <img
            src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png"
            alt="Logo do site"
          />
        </S.WrapperNavBarImage>
        <S.WrapperNavBarButtons>
          <a href="/">Início</a>
          <a href="/">Séries</a>
          <a href="/">Filmes</a>
          <a href="/">Documentários</a>
        </S.WrapperNavBarButtons>
      </S.WrapperNavBar>
    </>
  )
}
