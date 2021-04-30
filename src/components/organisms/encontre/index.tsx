import React, { useEffect, useState } from 'react'
import Title from '../../atoms/title'
import DatePicker from 'react-datepicker'
import FormularioLabel from '../../atoms/formularioLabel'

import 'react-datepicker/dist/react-datepicker.css'
import PlaneSeparator from '../../molecules/planeSeparator'
import { Collapsible } from '../../molecules/collabsible'
import { whatsappUrl } from '../../../pages/index'

const Encontre = () => {
  const urlWallpaper = 'assets/img/plane3.jpg'
  const now = new Date()

  const initialData= {
    adultos: 1,
    criancas: 0,
    bebes: 0,
    origem: '',
    destino: '',
    ida: now,
    volta: undefined,
    soIda: false
  }

  const [formReady, setFormReady] = useState(false)

  const [formData, setFormData] = useState({...initialData})

  const estaPronto = () => {
    (formData.origem === '' || formData.destino === '' || formData.ida === null || formData.ida === undefined)
    ? setFormReady(false)
    : (!formData.soIda && (formData.volta === null || formData.volta === undefined) ? setFormReady(false) : setFormReady(true)) 
  }

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleDataChange = (event, trecho) => {
    if (trecho === 'ida') {
      setFormData({
        ...formData,
        ida: event
      })
    }
    if (trecho === 'volta') {
      setFormData({
        ...formData,
        volta: event
      })
    }
  }

  const decrementarPessoa = (event, field) => {
    event.preventDefault()
    switch (field) {
    case 'adultos':
      if (formData.adultos > 1) {
        setFormData({ ...formData, adultos: formData.adultos - 1 })
      }
      break
    case 'criancas':
      if (formData.criancas > 0) {
        setFormData({ ...formData, criancas: formData.criancas - 1 })
      }
      break
    case 'bebes':
      if (formData.bebes > 0) {
        setFormData({ ...formData, bebes: formData.bebes - 1 })
      }
      break
    default:
      break
    }
  }

  const incrementarPessoa = (event, field) => {
    event.preventDefault()
    switch (field) {
    case 'adultos':
      setFormData({ ...formData, adultos: formData.adultos + 1 })
      break
    case 'criancas':
      setFormData({ ...formData, criancas: formData.criancas + 1 })
      break
    case 'bebes':
      setFormData({ ...formData, bebes: formData.bebes + 1 })
      break
    default:
      break
    }
  }

  const trocarRota = (event) => {
    event.preventDefault()
    const aux = formData.origem
    setFormData({ ...formData, origem: formData.destino, destino: aux })
  }

  const btnDecrementarPessoa = (tipo) => {
    return (
      <div className="col-3 px-0 m-auto">
        <button
          className="btn-increment rounded-circle"
          onClick={(e) => decrementarPessoa(e, tipo)}
        >−</button>
      </div>
    )
  }

  const btnIncrementarPessoa = (tipo) => {
    return (
      <div className="col-3 px-0 m-auto">
        <button
          className="btn-increment rounded-circle"
          onClick={(e) => incrementarPessoa(e, tipo)}
        >✚</button>
      </div>
    )
  }

  let origem = `%0AOrigem: *${formData.origem}*`
  let destino = `%0ADestino: *${formData.destino}*`
  let ida = `%0AIda: *${formData.ida.toLocaleDateString('pt-Br')}*`
  let volta = formData.soIda ? '' : `%0AVolta: *${formData.volta.toLocaleDateString('pt-Br')}*`
  let adultos = `%0APassageiros: *${formData.adultos} adulto(s)*`
  let criancas = formData.criancas > 0 ? `, *${formData.criancas} criança(s)*` : ''
  let bebes = formData.bebes > 0 ? `, *${formData.bebes} criança(s)*` : ''

  let mensagem = `Olá, EiMilhas!
    %0AGostaria de solicitar propostas de passagens.
    ${origem}
    ${destino}
    ${ida}
    ${volta}
    ${adultos}
    ${criancas}
    ${bebes}
  `
  let linkMensagem = `${whatsappUrl}&text=${mensagem}`

  const btnTrocarRota =
  (
    <button
      className="btn-trocar btn-std my-1 bg-red text-white rounded-circle position-absolute"
      onClick={(e) => trocarRota(e)}
    >⇋</button>
  )

  const btnBuscarPassagens =
  (
    <button
      className="btn-std py-1 px-2 rounded bg-red text-white w-100"
      id="btn-buscar-passagem"
      disabled={!formReady}
      onClick={
        (e) => {
          e.preventDefault()
          window.open(linkMensagem, "_blank")
        }
      }
    >Buscar passagens</button>
  )

  useEffect(() => {console.log(formData)}, [formData])

  return (
  
    <div className="container my-5">
      <div className="row mx-0 bg-image form-passagem rounded-15 font-primary"
        style={{
          backgroundImage: `url(${urlWallpaper})`,
          minHeight: '120px'
        }}>

        <div
          className="rounded-15 p-4"
          style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
        >

          <Title
            label="Encontre sua passagem ideal com o maior desconto!"
            color="primary"
          />
          <PlaneSeparator
            size={30}
            color="primary"
            widthPercentage={100}
            gridColPlane={1}
          />
          <div className="col-md-9 col-sm-12">
            <form id="form-encontrar-passagem">
              <div className="container p-1">

              <div className="row mb-3">

                <div className="col-sm-12 col-md-2 text-center">
                  <div className="row">
                    <FormularioLabel
                      label="Só ida?"
                      inputName="cbSoIda"
                    />
                  </div>
                  <div className="row m-auto" style={{ display: 'inherit' }}>
                    <input
                      type="checkbox"
                      name="soIda"
                      checked={formData.soIda}
                      onChange={
                        (e) => {
                          handleInputChange(e)
                          estaPronto()
                        }
                      }
                      className="m-auto"
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 text-center">
                  <DatePicker
                    name="ida"
                    placeholderText="Ida"
                    selected={formData.ida}
                    dateFormat="dd/MM/yyyy"
                    onChange={
                      (e) => {
                        handleDataChange(e, 'ida')
                        estaPronto()
                      }
                    }
                    minDate={now}
                    className="m-auto w-100 my-1 text-center d-block"
                  />
                </div>

                {!formData.soIda &&
                <div className="col-sm-12 col-md-5 text-center">
                  <DatePicker
                    name="volta"
                    placeholderText="Volta"
                    selected={formData.volta}
                    dateFormat="dd/MM/yyyy"
                    onChange={
                      (e) => {
                        handleDataChange(e, 'volta')
                        estaPronto()
                      }
                    }
                    minDate={now}
                    className="m-auto w-100 my-1 text-center"
                  />
                </div>
                }

                </div>

                <div className="row mb-3 position-relative">

                  <div className="col-sm-12 col-md-6 text-center">
                    <input
                      name="origem"
                      type="text"
                      placeholder="Origem"
                      className="txt-airport m-auto w-100 my-1"
                      value={formData.origem}
                      onChange={
                        (e) => {
                          handleInputChange(e)
                          estaPronto()
                        }
                      }
                    />
                  </div>

                  <div className="col-sm-12 col-md-6 text-center">
                    <input
                      name="destino"
                      type="text"
                      placeholder="Destino"
                      className="txt-airport m-auto w-100 my-1"
                      value={formData.destino}
                      onChange={
                        (e) => {
                          handleInputChange(e)
                          estaPronto()
                        }
                      }
                    />
                  </div>

                  {btnTrocarRota}

                </div>

                <Collapsible title="Passageiros">

                  <div className="row">
                    <div className="col-xs-12 col-sm-4 px-3 my-1 text-center">
                      <div className="row">
                        {btnDecrementarPessoa('adultos')}
                        <div className="col-6 px-1">
                          <input
                            name="adultos"
                            type="number"
                            className="text-center w-100"
                            value={formData.adultos}
                            onChange={
                              (e) => {
                                handleInputChange(e)
                                estaPronto()
                              }
                            }
                            disabled={true}
                          />
                        </div>
                        {btnIncrementarPessoa('adultos')}
                      </div>
                      <div className="row">
                        <FormularioLabel
                          label="Adultos"
                          inputName="txtAdultos"
                        />
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 px-3 my-1 text-center">
                      <div className="row">
                        {btnDecrementarPessoa('criancas')}
                        <div className="col-6 px-1">
                          <input
                            name="criancas"
                            type="number"
                            className="text-center w-100"
                            value={formData.criancas}
                            onChange={
                              (e) => {
                                handleInputChange(e)
                                estaPronto()
                              }
                            }
                            disabled={true}
                          />
                        </div>
                        {btnIncrementarPessoa('criancas')}
                      </div>
                      <div className="row">
                        <FormularioLabel
                          label="Crianças"
                          inputName="txtCriancas"
                        />
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 px-3 my-1 text-center">
                      <div className="row">
                        {btnDecrementarPessoa('bebes')}
                        <div className="col-6 px-1">
                          <input
                            name="bebes"
                            type="number"
                            className="text-center w-100"
                            value={formData.bebes}
                            onChange={
                              (e) => {
                                handleInputChange(e)
                                estaPronto()
                              }
                            }
                            disabled={true}
                          />
                        </div>
                        {btnIncrementarPessoa('bebes')}
                      </div>
                      <div className="row">
                        <FormularioLabel
                          label="Bebês"
                          inputName="txtBebes"
                        />
                      </div>
                    </div>
                  </div>
                </Collapsible>

                <div className="row my-2">
                  <div className="col">
                    {btnBuscarPassagens}
                  </div>
                </div>

              </div>
            </form>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Encontre
