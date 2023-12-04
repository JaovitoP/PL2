import { Component } from "react";

type props = {
  tema: string;
  red: string;
};

export default class MaisConsumidos extends Component<props> {
  render() {
    let tema = this.props.tema;
    return (
      <div className="container-fluid">
                <br />
            <h5>Produtos mais consumidos por tipo de Pet</h5>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Cachorro</th>
                        <th scope="col"></th>
                        <th scope="col">Gato</th>
                        <th scope="col"></th>
                        <th scope="col">Peixe</th>
                        <th scope="col"></th>
                        <th scope="col">Hamster</th>
                        <th scope="col"></th>
                        <th scope="col">Pássaro</th>
                        <th scope="col"></th>
                        <th scope="col">Outro</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th scope="row">Nome do Produto</th>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                    </tr>
                    <tr>
                        <th scope="row">Nome do Produto</th>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                        <td></td>
                        <td>Nome do Produto</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h5>Serviços mais consumidos por tipo de Pet</h5>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Cachorro</th>
                        <th scope="col"></th>
                        <th scope="col">Gato</th>
                        <th scope="col"></th>
                        <th scope="col">Peixe</th>
                        <th scope="col"></th>
                        <th scope="col">Hamster</th>
                        <th scope="col"></th>
                        <th scope="col">Pássaro</th>
                        <th scope="col"></th>
                        <th scope="col">Outro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Nome do Serviço</th>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                    </tr>
                    <tr>
                        <th scope="row">Nome do Serviço</th>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                        <td></td>
                        <td>Nome do Serviço</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
}
