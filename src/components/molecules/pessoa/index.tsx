import React from 'react'

type Props = {
    foto?: string
    nome: string
    profissao?: string
}

const Pessoa = ({
  foto = 'assets/img/avatars/user.png',
  nome,
  profissao
}: Props) => (
  <div className="d-flex justify-content-center">
    <div className="m-auto text-center">
      <img
        className="p-0 rounded-circle fit-cover img-avatar"
        src={foto}
      />
      {profissao
        ? <>
          <p className="mt-3 mb-0 text-orange text-center fw-bold font-primary">{nome}</p>
          <p className="mt-0 text-white text-center font-primary">{profissao}</p>
        </>
        : <p className="mt-3 text-orange text-center fw-bold font-primary">{nome}</p>
      }
    </div>
  </div>
)

export default Pessoa
