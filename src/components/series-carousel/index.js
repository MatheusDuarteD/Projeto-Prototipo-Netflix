import * as S from './style'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import { carouselItems } from '../index.js'

export default function SeriesCarousel() {
  const carouselBreakPoints = [
    {
      width: 1,
      itemsToShow: 3,
      itemsToScroll: 3
    },
    {
      width: 480,
      itemsToShow: 4,
      itemsToScroll: 4
    }
  ]

  return (
    <S.WrapperCarousel>
      <Carousel
        showArrows={false}
        pagination={false}
        breakPoints={carouselBreakPoints}
      >
        {carouselItems.slides.map(carouselItem => {
          return (
            <S.CarouselSeriesCoverImage
              key={carouselItem.id}
              src={carouselItem.source}
              alt={carouselItem.title}
              onDragStart={e => {
                e.preventDefault()
              }}
            />
          )
        })}
      </Carousel>
    </S.WrapperCarousel>
  )
}
