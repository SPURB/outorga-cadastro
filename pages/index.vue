<template>
  <div class="container">
    <form class="form">
      <section class="contato">
        <h2>Contato</h2>
        <ValidationProvider v-slot="{ errors }" rules="required|min:2">
          <label for="nome">Nome</label>
          <input id="nome" v-model="nome" type="text" name="nome">
          <span id="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="text" name="email">
          <span id="error">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="numeric|min:0|max:9"
        >
          <label for="ddd">DDD</label>
          <input id="ddd" v-model="ddd" type="numeric" name="ddd">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required|between:7,11"
        >
          <label for="telefone">Telefone</label>
          <input id="telefone" v-model="telefone" type="text" name="telefone">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </section>
      <input class="form-submit" type="submit" value="Enviar">
    </form>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  data: () => ({
    email: '',
    nome: '',
    ddd: 11,
    telefone: '00000-0000'
  }),
  head () {
    return {
      title: 'OUCFL | Cadastro Outorgas',
      meta: [{ hid: 'relatorios', name: 'relatorios', content: "Formulário de cadastro de interesse para compra de CEPAC's das Operações Urbanas Consorciadas do Munícipio de São Paulo" }]
    }
  }
}
</script>
<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  display: flex;
  flex-direction: column;
  &.contato span {
    padding: 0.5em 0;

  }
}

</style>
