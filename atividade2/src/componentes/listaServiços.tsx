import { Component } from "react";
// import 'bootstrap-icons/font/bootstrap-icons.css';
type props = {
  tema: string;
  red: string;
};

export default class Servicos extends Component<props> {
  render() {
    let red = this.props.red;
    let tema = this.props.tema;
    let green = "#00ff00";
    return (
      <div className="container-fluid">
        <h5>Cadastro de Serviço</h5>
        <hr />
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nome do Serviço"
              aria-label="Nome do Serviço"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" style={{ background: tema }}>R$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">.00</span>
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ background: tema }}
            >
              Cadastrar novo Serviço
            </button>
          </div>
        </form>
        <div className="list-group">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Serviço 1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="input-group mt-3">
                    <span className="input-group-text" style={{ background: tema }}>R$</span>
                    <input
                      type="text"
                      className="form-control"
                      value={"20"}
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                  <div className="input-group mb-3">
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: red }}
                      > Deletar
                        <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                      </button>
                    </a>
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: green }}
                      > Salvar
                        <i
                          className="bi bi-pencil"
                          style={{ fontSize: 20 }}
                        ></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne1"
                  aria-expanded="true"
                  aria-controls="collapseOne1"
                >
                  Serviço 2
                </button>
              </h2>
              <div
                id="collapseOne1"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="input-group mt-3">
                    <span className="input-group-text" style={{ background: tema }}>R$</span>
                    <input
                      type="text"
                      className="form-control"
                      value={"22"}
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                  <div className="input-group mb-3">
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: red }}
                      > Deletar
                        <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                      </button>
                    </a>
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: green }}
                      > Salvar
                        <i
                          className="bi bi-pencil"
                          style={{ fontSize: 20 }}
                        ></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne2"
                  aria-expanded="true"
                  aria-controls="collapseOne2"
                >
                  Serviço 3
                </button>
              </h2>
              <div
                id="collapseOne2"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="input-group mt-3">
                    <span className="input-group-text" style={{ background: tema }}>R$</span>
                    <input
                      type="text"
                      className="form-control"
                      value={"25"}
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                  <div className="input-group mb-3">
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: red }}
                      > Deletar
                        <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                      </button>
                    </a>
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: green }}
                      > Salvar
                        <i
                          className="bi bi-pencil"
                          style={{ fontSize: 20 }}
                        ></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne3"
                  aria-expanded="true"
                  aria-controls="collapseOne3"
                >
                  Serviço 4
                </button>
              </h2>
              <div
                id="collapseOne3"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="input-group mt-3">
                    <span className="input-group-text" style={{ background: tema }}>R$</span>
                    <input
                      type="text"
                      className="form-control"
                      value={"35"}
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                  <div className="input-group mb-3">
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: red }}
                      > Deletar
                        <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                      </button>
                    </a>
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: green }}
                      > Salvar
                        <i
                          className="bi bi-pencil"
                          style={{ fontSize: 20 }}
                        ></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne4"
                  aria-expanded="true"
                  aria-controls="collapseOne4"
                >
                  Serviço 5
                </button>
              </h2>
              <div
                id="collapseOne4"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="input-group mt-3">
                    <span className="input-group-text" style={{ background: tema }}>R$</span>
                    <input
                      type="text"
                      className="form-control"
                      value={"40"}
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span className="input-group-text">.00</span>
                  </div>
                  <div className="input-group mb-3">
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: red }}
                      > Deletar
                        <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                      </button>
                    </a>
                    <a href="!!">
                      <button
                        className="input-group-text"
                        style={{ background: green }}
                      > Salvar
                        <i
                          className="bi bi-pencil"
                          style={{ fontSize: 20 }}
                        ></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <h5>Serviços mais Consumidos em Quantidade</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="bi bi-award-fill" style={{ fontSize: 20 }}></i>{" "}
              Serviço 1
            </li>
            <li className="list-group-item">
              <i className="bi bi-award-fill" style={{ fontSize: 20 }}></i>{" "}
              Serviço 2
            </li>
            <li className="list-group-item">
              <i className="bi bi-award-fill" style={{ fontSize: 20 }}></i>{" "}
              Serviço 3
            </li>
            <li className="list-group-item">Serviço 4</li>
            <li className="list-group-item">Serviço 5</li>
          </ul>
        </div>
      </div>
    );
  }
}
