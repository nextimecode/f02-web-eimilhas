import React from 'react'

type Props = {
  label: string
  inputName: string
}

const FormularioLabel = ({
  label,
  inputName
}: Props) => {
  return (
    <label htmlFor={`${inputName}`} className="text-uppercase fw-bold">{label}</label>
  )
}

export default FormularioLabel
