import React from 'react'

type Props = {
    value: string
    color?: string
}

const Preco = ({
  value,
  color = 'red'
}: Props) => <h2 className={`text-${color} fw-bold my-0`}>{value}</h2>

export default Preco
