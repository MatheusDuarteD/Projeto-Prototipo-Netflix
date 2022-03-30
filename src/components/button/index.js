import React from 'react'
import * as S from './style'

export default function Button({
  backgroundColor,
  children,
  textColor,
  imgSrc,
  imgAlt
}) {
  return (
    <>
      <S.Button backgroundColor={backgroundColor} textColor={textColor}>
        <img src={imgSrc} alt={imgAlt} />
        <span>{children}</span>
      </S.Button>
    </>
  )
}
