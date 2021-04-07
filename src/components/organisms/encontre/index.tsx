import React, { useEffect } from 'react'
import Title from '../../atoms/title'
import DatePicker from 'react-datepicker'
import FormularioLabel from '../../atoms/formulario-label'

import './style.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { Button } from 'react-bootstrap'

class Encontre extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pronto: false,
      adultos: 1,
      criancas: 0,
      bebes: 0,
      origem: undefined,
      destino: undefined,
      ida: new Date(),
      volta: undefined,
      soIda: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
  }

  estaPronto() {
    console.log(this.state)
    if (this.state.origem === undefined || this.state.destino === undefined || this.state.ida === undefined) {
      return false
    } else {
      return (!(!this.state.soIda && this.state.volta === undefined))
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    this.setState({ pronto: this.estaPronto() })
  }

  handleDataChange(event, trecho) {
    if (trecho === 'ida') {
      this.setState({ ida: event })
    }
    if (trecho === 'volta') {
      this.setState({ volta: event })
    }
    this.setState({ pronto: this.estaPronto() })
  }

  decrementarPessoa(event, field) {
    event.preventDefault()
    switch (field) {
    case 'adultos':
      if (this.state.adultos > 1) {
        this.setState({ adultos: this.state.adultos - 1 })
      }
      break
    case 'criancas':
      if (this.state.criancas > 0) {
        this.setState({ criancas: this.state.criancas - 1 })
      }
      break
    case 'bebes':
      if (this.state.bebes > 0) {
        this.setState({ bebes: this.state.bebes - 1 })
      }
      break
    default:
      break
    }
  }

  incrementarPessoa(event, field) {
    event.preventDefault()
    switch (field) {
    case 'adultos':
      this.setState({ adultos: this.state.adultos + 1 })
      break
    case 'criancas':
      this.setState({ criancas: this.state.criancas + 1 })
      break
    case 'bebes':
      this.setState({ bebes: this.state.bebes + 1 })
      break
    default:
      break
    }
  }

  trocarRota(event) {
    event.preventDefault()
    const aux = this.state.origem
    this.setState({ origem: this.state.destino })
    this.setState({ destino: aux })
  }

  render() {
    const now = new Date()
    const urlWallpaper = 'assets/img/rio.jpg'

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
                              onClick={(e) => this.decrementarPessoa(e, 'adultos')}
                            >-</Button>
                          </div>
                          <div className="col-6 px-1">
                            <input
                              name="adultos"
                              type="text"
                              className="input-pessoa w-100"
                              value={this.state.adultos}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-3 px-0">
                            <Button
                              className="btn-increment py-0 px-2"
                              onClick={(e) => this.incrementarPessoa(e, 'adultos')}
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
                              onClick={(e) => this.decrementarPessoa(e, 'criancas')}
                            >-</Button>
                          </div>
                          <div className="col-6 px-1">
                            <input
                              name="criancas"
                              type="text"
                              className="input-pessoa w-100"
                              value={this.state.criancas}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-3 px-0">
                            <Button
                              className="btn-increment py-0 px-2"
                              onClick={(e) => this.incrementarPessoa(e, 'criancas')}
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
                              onClick={(e) => this.decrementarPessoa(e, 'bebes')}
                            >-</Button>
                          </div>
                          <div className="col-6 px-1">
                            <input
                              name="bebes"
                              type="text"
                              className="input-pessoa w-100"
                              value={this.state.bebes}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="col-3 px-0">
                            <Button
                              className="btn-increment py-0 px-2"
                              onClick={(e) => this.incrementarPessoa(e, 'bebes')}
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
                        value={this.state.origem}
                        onChange={this.handleInputChange}
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
                        value={this.state.destino}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 text-center my-1">
                    <Button
                      className="btn-change w-75"
                      onClick={(e) => this.trocarRota(e)}
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
                        checked={this.state.soIda}
                        onChange={(e) => this.handleInputChange(e)}
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
                        selected={this.state.ida}
                        dateFormat="dd/MM/yyyy"
                        onChange={(e) => this.handleDataChange(e, 'ida')}
                        minDate={now}
                        className="input-data"
                      />
                    </div>
                  </div>

                  {!this.state.soIda &&
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
                          selected={this.state.volta}
                          dateFormat="dd/MM/yyyy"
                          onChange={(e) => this.handleDataChange(e, 'volta')}
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
                        disabled={!this.state.pronto}
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
}

export default Encontre
