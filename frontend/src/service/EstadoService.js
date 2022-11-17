import axios from 'axios';

export class EstadoService {
    url = 'http://localhost:8080/api/estado';


    listarTodos() {
        return axios.get(this.url);
    }

    buscarId(id) {
        return axios.get(this.url + id);
    }

    inserir(objeto) {
        return axios.post(this.url + '/cadastrar', objeto);
    }

    alterar(objeto) {
        return axios.put(this.url + '/atualizar/' + objeto.id, objeto);
    }

    excluir(id) {
        return axios.delete(this.url + '/deletar/' + id);
    }
}
