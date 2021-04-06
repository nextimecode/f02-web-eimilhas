import React from 'react'

import './style.scss'

type Props = {
    children: React.ReactNode
    title: string
    image: string
}

const Card = ({
  children,
  title,
  image
}: Props) => {
  return (
    <div
      className="card-pagamento rounded overflow-hidden h-100 py-2 text-center bg-white"
    >
      <img src={image} className="card-img-top m-auto p-4"/>

      <div className="card-body">
        <div className="fs-1 fw-bolder text-uppercase card-title text-red">{title}</div>
        {children}
      </div>
    </div>
  )
}

export default Card
