<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
      <router-link to="/login">Login</router-link> |
      <router-link to="/usuario">Cadastro Usuário</router-link> |
      <router-link to="/carros">Carros</router-link>
    </div>
    <router-view/>
  </div>
</template>

