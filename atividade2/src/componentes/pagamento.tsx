import { Component } from "react";

type props = {
  tema: string;
  red: string;
};

export default class Pagamento extends Component<props> {
  render() {
    let tema = this.props.tema;
    return (
      <div className="container-fluid">
        <br />
        <form className="row g-3">
          <div className="container text-center">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="CPF do Cliente"
                value="000.000.000-00"
                aria-label="CPF do Cliente"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="container text-center">
            <div className="input-group mb-5">
              <button
                className="btn btn-outline"
                type="button"
                style={{ background: tema }}
              >
                Buscar Cliente
              </button>
            </div>
          </div>
        </form>
        <h5>Produtos e Serviços Consumidos por Cliente</h5>
        
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nome do produto</th>
            <th scope="col">Pet</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Preço do produto por unidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Produto 1</th>
            <td>Nome do Pet</td>
            <td>0</td>
            <td>R$ 00.00</td>
          </tr>
          <tr>
            <th scope="row">Produto 2</th>
            <td>Nome do Pet</td>
            <td>0</td>
            <td>R$ 00.00</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Nome do serviço</th>
            <th scope="col">Pet</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Preço do serviço por unidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Serviço 1</th>
            <td>Nome do Pet</td>
            <td>0</td>
            <td>R$ 00.00</td>
          </tr>
          <tr>
            <th scope="row">Serviço 2</th>
            <td>Nome do Pet</td>
            <td>0</td>
            <td>R$ 00.00</td>
          </tr>
        </tbody>
      </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Total à pagar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">R$ 00,00</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
