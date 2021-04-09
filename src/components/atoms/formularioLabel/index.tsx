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
    <label htmlFor={`${inputName}`} className="text-uppercase fw-bold mb-0 mt-1">{label}</label>
  )
}

export default FormularioLabel
