import axios from "axios";

export class SolicitarCodigoService {
    url = 'http://localhost:8080/api/gerenciamento';

    telaSolicitarCodigo() {
        window.location.href = "/solicitar-codigo";
    }

    solicitarCodigo(objeto, mostrarMensagemAviso, mensagemErro, mostrarMensagemSucesso) {
        mostrarMensagemAviso();
        return axios.post(this.url + '/senha-codigo', objeto).then(rest => {
            mostrarMensagemSucesso();
        }).catch(error => {
            mensagemErro(error.response.data.message);
        });
    }
}
