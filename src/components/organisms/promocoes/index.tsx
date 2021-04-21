import React from 'react'
import { PromocaoProps } from '../../../types/types'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import PlaneSeparator from '../../molecules/planeSeparator'
import Slider from '../slider'

type Props = { promocoes: Record<string, PromocaoProps>[] }

const Promocoes = ({ promocoes }: Props) => {
  return (
    <div className="row p-4 mx-0 text-center">

      <Title
        label="Promoções"
        color="black"
      />
      <Subtitle
        label="Os destinos com maior desconto"
        color="primary"
      />
      <PlaneSeparator
        size={30}
        color="primary"
      />
      <Slider content={promocoes} type="promocoes" />
    </div>
  )
}

export default Promocoes
