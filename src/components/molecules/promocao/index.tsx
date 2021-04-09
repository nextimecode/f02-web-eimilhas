import React from 'react'
import { PromocaoProps } from '../../../types/types'
import Preco from '../../atoms/preco'
import Title from '../../atoms/title'

import { whatsappUrl } from '../../../pages/index'

type Props = {
    promocao: PromocaoProps
}

const Promocao = ({
  promocao
}: Props) => {
  const mensagem = `Olá, EiMilhas!
    %0AGostaria de solicitar propostas de passagens.
    %0ADestino: *${promocao.pais}*`
  const linkMensagem = `${whatsappUrl}&text=${mensagem}`

  return (
    <a
      href={linkMensagem}
      className="div-link"
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="rounded h-100 py-4 text-center m-4 bg-black bg-image opacity-1 card-promocao"
        style={{ backgroundImage: `url("${promocao.foto}")` }}
      >
        <div className="card-body">
          <span className="text-uppercase"><Title label={promocao.pais} color="yellow"/></span>
          <div className="card-preco">
            <p className="fw-5 text-white my-0">A partir de </p>
            <Preco value={promocao.preco} color="white"/>
            <p className="fw-5 text-white my-0">{promocao.trecho}</p>
          </div>
        </div>
        <div className="card-middle position-absolute opacity-0 top-50 start-50 mt-5">
          <button
            className="rounded-3 text-primary bg-orange py-2 px-3"
          >
            Reserve Agora
          </button>
        </div>

      </div>
    </a>
  )
}

export default Promocao
