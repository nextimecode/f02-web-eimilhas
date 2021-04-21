import React from 'react'

type Props = {
    children: React.ReactNode
    title: string
    subtitle: string
}

const Counter = ({
  children,
  title,
  subtitle
}: Props) => {
  return (
    <div>
      <div>{children}</div>
      <div className="fs-1 fw-bolder text-uppercase card-title text-primary">{title}</div>
      <div className="text-primary fw-bold fs-6">{subtitle}</div>
    </div>
  )
}

export default Counter
