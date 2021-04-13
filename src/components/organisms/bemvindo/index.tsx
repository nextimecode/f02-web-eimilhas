import React from 'react'
import { CardProps } from '../../../types/types'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import Cards from '../cards'

type Props = {
  formasPagamento: Record<string, CardProps>[]
}

const BemVindo = ({
  formasPagamento
} : Props) => {
  return (
    <div className="row p-4 mx-0 bg-primary">

      <Title
        label="Bem vindos ao EiMilhas!"
        color="white"
      />
      <Subtitle
        label="Compre passagens aéreas com até 50% de desconto."
        color="orange"
      />
      <Cards cards={formasPagamento}/>
    </div>
  )
}

export default BemVindo
