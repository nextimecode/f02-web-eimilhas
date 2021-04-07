import React from 'react'
import { Button } from 'react-bootstrap'
import { PromocaoProps } from '../../../types/types'
import Preco from '../../atoms/preco'
import Title from '../../atoms/title'

import './style.scss'

type Props = {
    promocao: PromocaoProps
}

const Promocao = ({
  promocao
}: Props) => {
  return (
    <div
      className="rounded overflow-hidden h-100 py-4 text-center bg-white m-4 card-promocao"
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
      <div className="card-middle mt-5">
        <Button className="btn-reservar">Reserve Agora</Button>
      </div>

    </div>
  )
}

export default Promocao
