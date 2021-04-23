import React from 'react'

type Props = {
    label: string,
    color: string,
    classes?: string
}

const Title = ({
  label,
  color,
  classes = ''
}: Props) => <h1 className={`text-${color} ${classes}`}>{label}</h1>

export default Title
