import React from 'react'
import { Button } from 'react-bootstrap'

import './style.scss'

const Encontre = () => {
  const urlWallpaper = 'assets/img/rio.jpg'

  return (
    <div className="row p-0 form-encontre rounded">

      <div
        className="col-xs-12 col-md-4 bg-encontre"
        style={{ backgroundImage: `url("${urlWallpaper}")` }}
      >
      </div>

      <div className="col-xs-12 col-md-8 p-4">

        <h1>Encontre sua passagem ideal com o maior desconto!</h1>
        <form id="form-encontrar-passagem">
          <div className="container p-0">

            <div className="row d-inline-flex my-2">
              <div className="col">
                <label
                  htmlFor="inputAdultos"
                  className="form-label"
                >
                  Adultos
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAdultos"
                  aria-describedby="rotaHelp"
                />
              </div>
              <div className="col">
                <label
                  htmlFor="inputCriancas"
                  className="form-label"
                >
                  Crianças
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputCriancas"
                  aria-describedby="rotaHelp"
                />
              </div>
              <div className="col">
                <label
                  htmlFor="inputBebes"
                  className="form-label"
                >
                  Bebês
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputBebes"
                  aria-describedby="rotaHelp"
                />
              </div>
            </div>

            <div className="row my-2">
              <div className="col-sm-12 col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputOrigem"
                  aria-describedby="rotaHelp"
                />
              </div>
              <div className="col-sm-12 col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputDestino"
                  aria-describedby="rotaHelp"
                />
              </div>
              <div className="col-sm-12 col-md-2">
                <Button>Trocar</Button>
              </div>
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>

            <div className="row my-2">
              <div className="col-12 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="soIda"
                />
                <label
                  className="form-check-label"
                  htmlFor="soIda"
                >
                  Somente Ida
                </label>
              </div>
              <div className="col-sm-12 col-md-4">
                <label
                  htmlFor="inputIda"
                  className="form-label"
                >
                  Ida
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputIda"
                  aria-describedby="rotaHelp"
                />
              </div>
              <div className="col-sm-12 col-md-4">
                <label
                  htmlFor="inputVolta"
                  className="form-label"
                >
                  Volta
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputVolta"
                  aria-describedby="rotaHelp"
                />
              </div>
              <div className="col-sm-12 col-md-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Buscar Passagens
                </button>
              </div>
              <div id="emailHelp" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>

          </div>
        </form>

      </div>

    </div>
  )
}

export default Encontre
