import React from 'react'
import * as S from './style'
import SeriesPreviewButtons from '../series-preview-buttons'
import { useState } from 'react'

export default function SeriesPreview() {
  const [isVisible, setIsVisible] = useState(0)

  const seriesPreviewItem = {
    title: 'HOUSE OF CARDS',
    description:
      'Nada pode impedir o político sem escrúpulos Frank Underwood de conquistar Washington. Assista agora a nova temporada de House of Cards que está imperdível.',
    imageUrl:
      'url(https://jpimg.com.br/uploads/2017/04/3710272366-house-cards-tera-sua-quinta-temporada-em-2017.jpg)',
    trailerUrl:
      'https://www.youtube.com/embed/8QnMmpfKWvo/?controls=0&autoplay=1&modestbranding=1&showinfo=0&disablekb=0&fs=0&rel=0&iv_load_policy=3&mute=1'
  }

  const handleMouseEnter = () => {
    return setIsVisible(1)
  }

  const handleMouseLeave = () => {
    return setIsVisible(0)
  }

  return (
    <>
      {isVisible === 1 ? (
        <S.WrapperVideoPreviewDiv onMouseLeave={handleMouseLeave}>
          <iframe
            width="100%"
            height="100%"
            src={seriesPreviewItem.trailerUrl}
            title="Series Trailer"
          ></iframe>
          <S.WrapperSeriesDescriptionDiv onMouseEnter={handleMouseEnter}>
            <S.WrapperText>
              <h1>{seriesPreviewItem.title}</h1>
              <p>{seriesPreviewItem.description}</p>
            </S.WrapperText>
            <SeriesPreviewButtons />
          </S.WrapperSeriesDescriptionDiv>
        </S.WrapperVideoPreviewDiv>
      ) : (
        <S.WrapperBackgroundImageDiv imageUrl={seriesPreviewItem.imageUrl}>
          <S.WrapperSeriesDescriptionDiv onMouseEnter={handleMouseEnter}>
            <S.WrapperText>
              <h1>{seriesPreviewItem.title}</h1>
              <p>{seriesPreviewItem.description}</p>
            </S.WrapperText>
            <SeriesPreviewButtons />
          </S.WrapperSeriesDescriptionDiv>
        </S.WrapperBackgroundImageDiv>
      )}
    </>
  )
}
