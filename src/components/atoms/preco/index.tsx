import React from 'react'

type Props = {
    value: number
    color?: string
}

const Preco = ({
  value,
  color = 'red'
}: Props) => <span className={`text-${color} fw-bold`}>R$ {value},00</span>

export default Preco
