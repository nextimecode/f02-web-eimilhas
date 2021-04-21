import React from 'react'

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
      className="card-pagamento font-primary position-relative overflow-hidden h-100 text-center bg-white rounded-15 bg-image"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        minHeight: '200px'
      }}
    >
      <div
        className="d-flex h-100"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}
      >

        {/* <img src={image} className="card-img-top m-auto p-4"/> */}

        <div className="card-body m-auto">
          <div className="fs-1 fw-bolder text-uppercase card-title text-primary">{title}</div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
