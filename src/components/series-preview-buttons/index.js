import React from 'react'
import Button from '../button/index.js'
import * as S from './style'
import { playIcon, infoIcon } from '../index'

export default function SeriesPreviewButtons() {
  return (
    <S.WrapperButton>
      <Button
        backgroundColor={'#ffffff'}
        buttonText={'Assistir'}
        imgAlt={'Botão de assistir agora'}
        textColor={'black'}
        imgSrc={playIcon}
      >
        {' '}
        ASSISTIR{' '}
      </Button>
      <Button
        backgroundColor={'#6d6d6eb3'}
        buttonText={'Assistir'}
        imgAlt={'Botão de mais informações'}
        textColor={'white'}
        imgSrc={infoIcon}
      >
        {' '}
        MAIS INFORMAÇÕES{' '}
      </Button>
    </S.WrapperButton>
  )
}
