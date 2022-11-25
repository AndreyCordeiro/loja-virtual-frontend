import axios from "axios";

export class LoginService {
    url = 'http://localhost:8080/api/gerenciamento';
    CHAVE_TOKEN = "@token_loja";

    login(email, senha, mensagemErro) {
        axios.post(this.url + "/login", {'email': email, 'senha': senha}).then(res => {
            localStorage.setItem(this.CHAVE_TOKEN, res.data.token);
            window.location.href = "/";
        }).catch(error => {
            mensagemErro(error.response.data.message);
        });
    }

    autenticado() {
        return this.getToken() != null;
    }

    sair() {
        localStorage.removeItem(this.CHAVE_TOKEN);
    }

    getToken() {
        return localStorage.getItem(this.CHAVE_TOKEN);
    }
}
