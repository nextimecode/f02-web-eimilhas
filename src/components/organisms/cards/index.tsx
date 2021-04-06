import React from 'react'
import { CardProps } from '../../../types/types'
import Card from '../../molecules/card'

type Props = {
    cards: Record<string, CardProps>[]
}

const Cards = ({
  cards
}: Props) => {
  return (
    <div className="row p-4 mx-0 justify-content-center">
      {cards.map((c, index) => (
        <div
          key={index}
          className="col-xs-12 col-sm-6 col-md-3 py-2"
        >
          <Card
            title={c.card.title}
            image={c.card.imageIcon}
          >
            <div className="text-primary fw-bold fs-4">
              {c.card.subtitle}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Cards
