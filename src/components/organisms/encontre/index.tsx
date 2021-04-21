import React, { useState } from 'react'
import Title from '../../atoms/title'
import DatePicker from 'react-datepicker'
import FormularioLabel from '../../atoms/formularioLabel'

import 'react-datepicker/dist/react-datepicker.css'

const Encontre = () => {
  const urlWallpaper = 'assets/img/plane3.jpg'
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

  const estaPronto = () => {
    event.preventDefault()
    if (formData.origem === '' || formData.destino === '') {
      return false
    } else {
      return formData.soIda ? true : (formData.volta !== undefined)
    }
  }

  const handleInputChange = (event) => {
    event.preventDefault()
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setFormData({ ...formData, [name]: value, pronto: estaPronto() })
  }

  const handleDataChange = (event, trecho) => {
    if (trecho === 'ida') {
      setFormData({ ...formData, ida: event })
    }
    if (trecho === 'volta') {
      setFormData({ ...formData, volta: event })
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
      <div className="col-3 px-0">
        <button
          className="btn-increment rounded py-0 px-2"
          onClick={(e) => decrementarPessoa(e, tipo)}
        >-</button>
      </div>
    )
  }

  const btnIncrementarPessoa = (tipo) => {
    return (
      <div className="col-3 px-0">
        <button
          className="btn-increment rounded py-0 px-2"
          onClick={(e) => incrementarPessoa(e, tipo)}
        >+</button>
      </div>
    )
  }

  return (

    <div className="container my-5">
      <div className="row mx-0 bg-image form-passagem rounded-15"
        style={{
          backgroundImage: `url(${urlWallpaper})`,
          minHeight: '120px'
        }}>

        <div
          className="rounded-15 py-3"
          style={{
            backgroundColor: 'rgba(255,255,255,0.3)'
          }}
        >
          <div className="col-md-9 col-sm-12 p-4">

            <Title label="Encontre sua passagem ideal com o maior desconto!" color="primary"/>
            <form id="form-encontrar-passagem">
              <div className="container p-1">

                <div className="row mb-3">
                  <div className="col-sm-12 col-md-10 col-lg-8">

                    <div className="row my-2">

                      <div className="col-xs-12 col-sm-4 px-3 text-center">

                        <div className="row">
                          <FormularioLabel
                            label="Adultos"
                            inputName="txtAdultos"
                          />
                        </div>
                        <div className="row">
                          {btnDecrementarPessoa('adultos')}
                          <div className="col-6 px-1">
                            <input
                              name="adultos"
                              type="number"
                              className="input-pessoa text-center w-100"
                              value={formData.adultos}
                              onChange={(e) => handleInputChange(e)}
                            />
                          </div>
                          {btnIncrementarPessoa('adultos')}
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-4 px-3 text-center">
                        <div className="row">
                          <FormularioLabel
                            label="Crianças"
                            inputName="txtCriancas"
                          />
                        </div>
                        <div className="row">
                          {btnDecrementarPessoa('criancas')}
                          <div className="col-6 px-1">
                            <input
                              name="criancas"
                              type="number"
                              className="input-pessoa text-center w-100"
                              value={formData.criancas}
                              onChange={(e) => handleInputChange(e)}
                            />
                          </div>
                          {btnIncrementarPessoa('criancas')}
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-4 px-3 text-center">
                        <div className="row">
                          <FormularioLabel
                            label="Bebês"
                            inputName="txtBebes"
                          />
                        </div>
                        <div className="row">
                          {btnDecrementarPessoa('bebes')}
                          <div className="col-6 px-1">
                            <input
                              name="bebes"
                              type="number"
                              className="input-pessoa text-center w-100"
                              value={formData.bebes}
                              onChange={(e) => handleInputChange(e)}
                            />
                          </div>
                          {btnIncrementarPessoa('bebes')}
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
                    <div className="row px-2">
                      <input
                        name="origem"
                        type="text"
                        className="m-auto"
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
                    <div className="row px-2">
                      <input
                        name="destino"
                        type="text"
                        className="m-auto"
                        value={formData.destino}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 text-center my-1">
                    <button
                      className="text-white rounded w-75"
                      style={{ maxWidth: '200px' }}
                      onClick={(e) => trocarRota(e)}
                    >Inverter<br/>{'<>'}</button>
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
                    <div className="row px-2">
                      <DatePicker
                        name="ida"
                        selected={formData.ida}
                        dateFormat="dd/MM/yyyy"
                        onChange={(e) => handleDataChange(e, 'ida')}
                        minDate={now}
                        className="w-100 text-center"
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
                    <div className="row px-2">
                      <DatePicker
                        name="volta"
                        selected={formData.volta}
                        dateFormat="dd/MM/yyyy"
                        onChange={(e) => handleDataChange(e, 'volta')}
                        minDate={now}
                        className="w-100 text-center"
                      />
                    </div>
                  </div>
                  }

                </div>

                <div className="row mb-3">

                  <div className="col-12 px-3 text-center">
                    <div className="row">
                      <button
                        className="py-1 px-2 rounded"
                        disabled={!formData.pronto}
                      >Buscar passagens</button>
                    </div>
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
