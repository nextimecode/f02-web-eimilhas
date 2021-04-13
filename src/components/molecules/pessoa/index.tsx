import React from 'react'

type Props = {
    foto: string
    nome: string
    profissao?: string
}

const Pessoa = ({ foto, nome, profissao = '' }: Props) => (
  <div className="d-flex justify-content-center">
    <div className="m-auto text-center">
      <img
        className="p-0 rounded-circle fit-cover w-50"
        src={foto}
      />
      <p className="profile mt-3 mb-0 text-center fw-bold">{nome}</p>
      <p className="profile mt-0 text-gray text-center">
        {profissao}
      </p>
    </div>
  </div>
)

export default Pessoa
