<template>
  <div style="height: 300px;">
    <LoginMenu />

    <div class="grid gap-2">
      <input
        v-model="email"
        type="text"
        placeholder="Digite seu e-mail"
        class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900"
      >

      <input
        v-model="password"
        type="password"
        placeholder="Digite sua senha"
        class="bg-gray-900 placeholder-gray-700 text-gray-500 font-light border border-gray-900 focus:outline-none focus:border-blue-800 rounded-sm py-3 px-4 block w-full appearance-none leading-normal"
      >

      <button class="bg-blue-800 text-blue-200 font-medium text-sm focus:outline-none rounded-sm py-3 px-4">
        ENTRAR
      </button>

      <div class="my-4 text-center">
        <RouterLink
          :to="{ name: 'forgotPassword' }"
          class="text-sm font-light"
        >
          Esqueci minha senha
        </RouterLink>
      </div>
    </div> 
  </div>
</template>

<script>
    import LoginMenu from '@/components/Auth/LoginMenu.vue';

    export default {
        name: 'Login',

        components: {
            LoginMenu,
        },

        data() {
            return {
                email: '',
                password: '',
               
              
            };
        },

        methods: {
            },

        
    };
</script>
