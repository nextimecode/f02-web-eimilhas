import React from 'react'
import { PromocaoProps } from '../../../types/types'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Slider from '../slider'

type Props = { promocoes: Record<string, PromocaoProps>[] }

const Promocoes = ({ promocoes }: Props) => {
  return (
    <div className="row p-4 mx-0 bg-red">

      <Title
        label="Promoções"
        color="white"
      />
      <Subtitle
        label="Os destinos com maior desconto"
        color="yellow"
      />
      <Slider content={promocoes} type="promocoes" />
    </div>
  )
}

export default Promocoes
