import React from 'react'

type Props = {
    value: number
    color?: string
}

const Preco = ({
  value,
  color = 'red'
}: Props) => <h2 className={`text-${color} fw-bold my-0`}>R$ {value},00</h2>

export default Preco
