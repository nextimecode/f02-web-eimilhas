import React from 'react'

type Props = {
    label: string,
    color: string
}

const Subtitle = ({
  label,
  color
}: Props) => <h2 className={`text-${color}`}>{label}</h2>
export default Subtitle
