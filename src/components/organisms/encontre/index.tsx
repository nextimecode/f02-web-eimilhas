import React, { useEffect, useReducer, useState } from 'react'
import Title from '../../atoms/title'
import DatePicker from 'react-datepicker'
import FormularioLabel from '../../atoms/formulario-label'

import './style.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from 'react-bootstrap'

const Encontre = () => {

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormData({...formData, [name]: value, pronto: estaPronto()})
  }

  const handleDataChange = (event, trecho) => {
    if (trecho === 'ida') {
      setFormData({...formData, ida: event})
    }
    if (trecho === 'volta') {
      setFormData({...formData, volta: event})
    }
  }

  const decrementarPessoa = (event, field) => {
    switch (field) {
    case 'adultos':
      if (formData.adultos > 1) {
        setFormData({...formData, adultos: formData.adultos - 1})
      }
      break
    case 'criancas':
      if (formData.criancas > 0) {
        setFormData({...formData, criancas: formData.criancas - 1})
      }
      break
    case 'bebes':
      if (formData.bebes > 0) {
        setFormData({...formData, bebes: formData.bebes - 1})
      }
      break
    default:
      break
    }
  }

  const incrementarPessoa = (event, field) => {
    switch (field) {
    case 'adultos':
      setFormData({...formData, adultos: formData.adultos + 1})
      break
    case 'criancas':
      setFormData({...formData, criancas: formData.criancas + 1})
      break
    case 'bebes':
      setFormData({...formData, bebes: formData.bebes + 1})
      break
    default:
      break
    }
  }

  const trocarRota = (event) => {
    event.preventDefault()
    let aux = formData.origem
    setFormData({...formData, origem: formData.destino, destino: aux })
  }

  const estaPronto = () => {
    console.log('deu')
    if (formData.origem === '' || formData.destino === '') {
      return false
    } else {
      return formData.soIda ? true : (formData.volta != undefined ? true : false)
    }
  }

  const urlWallpaper = 'assets/img/rio.jpg'
  const now = new Date()

  const [formData, setFormData] = useState({
    pronto: false,
    adultos: 1,
    criancas: 0,
    bebes: 0,
    origem: '',
    destino: '',
    ida: now,
    volta: undefined,
    soIda: false
  })

  return (

    <div className="container">
      <div className="row p-0 form-encontre rounded">

        <div
          className="col-xs-12 col-md-4 bg-encontre"
          style={{ backgroundImage: `url("${urlWallpaper}")` }}
        >
        </div>

        <div className="col-xs-12 col-md-8 p-4">

          <Title label="Encontre sua passagem ideal com o maior desconto!" color="primary"/>
          <form id="form-encontrar-passagem">
            <div className="container p-1">

              <div className="row mb-3">
                <div className="col-sm-12 col-md-10 col-lg-8">

                  <div className="row my-2">

                    <div className="col-4 col-sm-4 px-3 text-center">

                      <div className="row">
                        <FormularioLabel
                          label="Adultos"
                          inputName="txtAdultos"
                        />
                      </div>
                      <div className="row">
                        <div className="col-3 px-0">
                          <Button
                            className="btn-increment py-0 px-2"
                            onClick={(e) => decrementarPessoa(e, 'adultos')}
                          >-</Button>
                        </div>
                        <div className="col-6 px-1">
                          <input
                            name="adultos"
                            type="text"
                            className="input-pessoa w-100"
                            value={formData.adultos}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                        <div className="col-3 px-0">
                          <Button
                            className="btn-increment py-0 px-2"
                            onClick={(e) => incrementarPessoa(e, 'adultos')}
                          >+</Button>
                        </div>
                      </div>
                    </div>

                    <div className="col-4 px-3 text-center">
                      <div className="row">
                        <FormularioLabel
                          label="Crianças"
                          inputName="txtCriancas"
                        />
                      </div>
                      <div className="row">
                        <div className="col-3 px-0">
                          <Button
                            className="btn-increment py-0 px-2"
                            onClick={(e) => decrementarPessoa(e, 'criancas')}
                          >-</Button>
                        </div>
                        <div className="col-6 px-1">
                          <input
                            name="criancas"
                            type="text"
                            className="input-pessoa w-100"
                            value={formData.criancas}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                        <div className="col-3 px-0">
                          <Button
                            className="btn-increment py-0 px-2"
                            onClick={(e) => incrementarPessoa(e, 'criancas')}
                          >+</Button>
                        </div>
                      </div>
                    </div>

                    <div className="col-4 px-3 text-center">
                      <div className="row">
                        <FormularioLabel
                          label="Bebês"
                          inputName="txtBebes"
                        />
                      </div>
                      <div className="row">
                        <div className="col-3 px-0">
                          <Button
                            className="btn-increment py-0 px-2"
                            onClick={(e) => decrementarPessoa(e, 'bebes')}
                          >-</Button>
                        </div>
                        <div className="col-6 px-1">
                          <input
                            name="bebes"
                            type="text"
                            className="input-pessoa w-100"
                            value={formData.bebes}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
                        <div className="col-3 px-0">
                          <Button
                            className="btn-increment py-0 px-2"
                            onClick={(e) => incrementarPessoa(e, 'bebes')}
                          >+</Button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row mb-3">

                <div className="col-sm-12 col-md-4 px-3 text-center">
                  <div className="row">
                    <FormularioLabel
                      label="Origem"
                      inputName="origem"
                    />
                  </div>
                  <div className="row">
                    <input
                      name="origem"
                      type="text"
                      className="input-rota m-auto"
                      value={formData.origem}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 text-center">
                  <div className="row">
                    <FormularioLabel
                      label="Destino"
                      inputName="destino"
                    />
                  </div>
                  <div className="row">
                    <input
                      name="destino"
                      type="text"
                      className="input-rota m-auto"
                      value={formData.destino}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-4 text-center my-1">
                  <Button
                    className="btn-change w-75"
                    onClick={(e) => trocarRota(e)}
                  >Inverter<br/>{'<>'}</Button>
                </div>

              </div>

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
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="col-sm-12 col-md-5 px-3 text-center">
                  <div className="row">
                    <FormularioLabel
                      label="Ida"
                      inputName="ida"
                    />
                  </div>
                  <div className="row">
                    <DatePicker
                      name="ida"
                      selected={formData.ida}
                      dateFormat="dd/MM/yyyy"
                      onChange={(e) => handleDataChange(e, 'ida')}
                      minDate={now}
                      className="input-data"
                    />
                  </div>
                </div>

                {!formData.soIda &&
                  <div className="col-sm-12 col-md-5 text-center">
                    <div className="row">
                      <FormularioLabel
                        label="Volta"
                        inputName="volta"
                      />
                    </div>
                    <div className="row">
                      <DatePicker
                        name="volta"
                        selected={formData.volta}
                        dateFormat="dd/MM/yyyy"
                        onChange={(e) => handleDataChange(e, 'volta')}
                        minDate={now}
                        className="input-data"
                      />
                    </div>
                  </div>
                }

              </div>

              <div className="row mb-3">

                <div className="col-12 px-3 text-center">
                  <div className="row">
                    <Button
                      disabled={!formData.pronto}
                    >Buscar passagens</Button>
                  </div>
                </div>

              </div>

            </div>
          </form>

        </div>
      </div>

    </div>
  )

}

export default Encontre