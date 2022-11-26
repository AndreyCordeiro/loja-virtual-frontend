import axios from "axios";
import {LoginService} from "./LoginService";

export class PessoaService {
    url = 'http://localhost:8080/api/pessoa';

    constructor() {
        this.inicializarAxios();
    }

    inicializarAxios() {
        this.axiosInstance = axios.create({
            baseURL: this.url,
        });

        this.axiosInstance.interceptors.request.use((config) => {
                const token = new LoginService().getToken();
                const authRequestToken = token ? `Bearer ${token}` : '';
                config.headers.common['Authorization'] = authRequestToken;
                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    listarTodos() {
        return this.axiosInstance.get(this.url);
    }

    inserir(objeto) {
        return this.axiosInstance.post(this.url + '/cadastrar', objeto);
    }

    alterar(objeto) {
        return this.axiosInstance.put(this.url + '/atualizar/' + objeto.id, objeto);
    }

    excluir(id) {
        return this.axiosInstance.delete(this.url + '/deletar/' + id);
    }
}
