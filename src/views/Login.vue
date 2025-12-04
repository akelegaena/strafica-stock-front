<template>
  <div>
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <button>Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "../api/axios";

const email = ref("");
const password = ref("");

const login = async () => {
  await api.get("/sanctum/csrf-cookie");
  const res = await api.post("/login", {
    email: email.value,
    password: password.value,
  });

  if (res.status === 204) {
    window.location.href = "/dashboard";
  }
};
</script>
