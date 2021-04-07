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
    <label htmlFor={`${inputName}`} className="form-label mb-0 mt-1">{label}</label>
  )
}

export default FormularioLabel
