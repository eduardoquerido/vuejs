<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Cadastro de Carros</h2>
      <div class="form-group">
        <label for="nome">Nome do Carro</label>
        <input type="text" id="nome"
            class="form-control" required autofocus
            v-model="nome">
      </div>
      <div class="form-group">
        <label for="placa">Placa do Carro</label>
        <input type="text" id="placa"
            class="form-control" required
            v-model="placa">
      </div>
      <button class="btn btn-lg btn-primary btn-block" 
        type="submit">Salvar</button>
    </form>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome do Carro</th>
          <th>Placa do Carro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="carro in carros" :key="carro.id">
          <td>{{ carro.id }}</td>
          <td>{{ carro.nome }}</td>
          <td>{{ carro.placa }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'carros',
  data() {
    return {
      nome: '',
      placa: '',
      carros: []
    }
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    cadastrar() {
      axios.post('carros/novo',
          {
            nome: this.nome,
            placa: this.placa,
            usuario: this.usuario
          })
        .then(res => {
          console.log(res);
          this.nome = '';
          this.placa = '';
          this.atualizar();
        })
        .catch(error => console.log(error))
    },
    atualizar () {
      axios.get('/carros/busca/' + this.usuario, 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.carros = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.atualizar()
  }
}
</script>