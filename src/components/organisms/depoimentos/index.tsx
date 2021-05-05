import React from 'react'
import { DepoimentoProps } from '../../../types/types'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import PlaneSeparator from '../../molecules/planeSeparator'
import Slider from '../slider'

type Props = {
  depoimentos: Record<string, DepoimentoProps>[]
}

const Depoimentos = ({
  depoimentos
}: Props) => {
  return (
    <div className="row p-4 text-center">
      <Title
        label="Depoimentos"
        color="white"
      />
      <Subtitle
        label="Veja o que nossos clientes dizem"
        color="yellow"
      />
      <PlaneSeparator/>
      <Slider content={depoimentos} type="depoimentos" />
    </div>
  )
}

export default Depoimentos
