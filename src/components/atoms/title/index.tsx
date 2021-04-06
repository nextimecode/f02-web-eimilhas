import React from 'react'

type Props = {
    label: string,
    color: string
}

const Title = ({
  label,
  color
}: Props) => <h1 className={`text-${color}`}>{label}</h1>

export default Title
