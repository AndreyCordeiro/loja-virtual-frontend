import axios from 'axios';

export class ProdutoImagensService {
    url = 'http://localhost:8080/api/imagem';

    salvarImagem(obj) {
        const formData = new FormData();

        formData.append('idProduto', obj.idProduto);
        formData.append('arquivo', obj.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(this.url + "/cadastrar", formData, config);
    }

    buscarPorProdutoId(idProduto) {
        return axios.get(this.url + "/produto/" + idProduto);
    }

    excluir(idProduto) {
        return axios.delete(this.url + "/deletar/" + idProduto);
    }
}
