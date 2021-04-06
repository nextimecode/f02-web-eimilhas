import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Depoimento from '../../molecules/depoimento'
import Promocao from '../../molecules/promocao'

import './style.scss'

type Props = {
    content: any
    type: string
}

const Slider = ({
  content,
  type
}: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1301 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1300, min: 1001 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      keyBoardControl={true}
      containerClass="carousel-container m-1 px-2"
      dotListClass="custom-dot-list-style"
      transitionDuration={300}
      arrows={true}
      slidesToSlide={1}
    >
      {
        type === 'depoimentos' &&
                    content.map((d, index) => (
                      <Depoimento key={index} depoimento={d.depoimento} />
                    ))
      }
      {
        type === 'promocoes' &&
                    content.map((p, index) => (
                      <Promocao key={index} promocao={p.promocao} />
                    ))
      }

    </Carousel>
  )
}

export default Slider
