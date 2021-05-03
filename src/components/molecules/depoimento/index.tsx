import React from 'react'
import { DepoimentoProps } from '../../../types/types'
import Pessoa from '../pessoa'

type Props = {
    depoimento: DepoimentoProps
}

const Depoimento = ({ depoimento }: Props) => {
  return (
    <div className="d-flex h-100 container-fluid mb-5">
      <div className="depoimento rounded-15 border-gray row justify-content-center mb-2">
        <div className="text-white rounded position-relative p-4 pb-0">
          <p className="post text-justify font-primary m-0">
            {depoimento.texto}
          </p>
        </div>
        <hr className="depoimento-separator w-75 align-self-end"/>
        <Pessoa
          foto={depoimento.foto}
          nome={depoimento.nome}
          profissao={depoimento.profissao}
        />
      </div>
    </div>
  )
}

export default Depoimento
