<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Cadastro de Usuário</h2>
      <div class="form-group">
        <label for="nome">Nome do Usuário</label>
        <input type="text" id="nome"
            class="form-control" required autofocus
            v-model="nome">
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" id="senha"
            class="form-control" required
            v-model="senha">
      </div>
      <button class="btn btn-lg btn-primary btn-block" 
        type="submit">Salvar</button>
    </form>
    <br>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'usuarios',
  data() {
    return {
      nome: '',
      senha: '',
      usuairos: []
    }
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    cadastrar() {
      axios.post('usuario',
          {
            nome: this.nome,
            senha: this.senha,
            usuario: this.usuario
          })
        .then(res => {
          console.log(res);
          this.nome = '';
          this.senha = '';
        })
        .catch(error => console.log(error))
    },
  },
}
</script>