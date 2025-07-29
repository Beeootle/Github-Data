<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')

const emailError = ref(false)
const passwordError = ref(false)
const passwordBlankError = ref(false)

const emailInput = ref(null)
const passwordInput = ref(null)

const router = useRouter()

function handleLogin() {
  emailError.value = false
  passwordError.value = false
  passwordBlankError.value = false

  const trimmedEmail = email.value.trim()
  const trimmedPassword = password.value.trim()

  if (!trimmedPassword) {
    passwordError.value = true
    passwordBlankError.value = true
    passwordInput.value.focus()
    return
  }

  if (trimmedEmail !== 'admin@gmail.com' || trimmedPassword !== 'admin') {
    emailError.value = true
    passwordError.value = true

    if (!trimmedEmail) {
        emailInput.value.focus()
    } else {
        passwordInput.value.focus()
    }
  } else {
    router.push('/')
  }
}
</script>
<template>
  <div class="login-page">

    <main class="page-wrapper">
      <div class="form-container">
        <form @submit.prevent="handleLogin">
          <input v-model="email" type="email" placeholder="Email" :class="{ 'input-error': emailError }"
            ref="emailInput" />
          <input v-model="password" type="password" placeholder="Password" :class="{ 'input-error': passwordError }"
            ref="passwordInput" />
          <button type="submit" class="btn">Log In</button>
        </form>

        <p v-if="passwordBlankError" class="error-message">
          Password cannot be blank.
        </p>
        <p v-else-if="emailError || passwordError" class="error-message">
          Invalid email or password. Please try again.
        </p>

        <p class="signup-link">
          Don't have an account?
          <RouterLink to="/signup">Sign Up Here!</RouterLink>
        </p>
      </div>
    </main>
  </div>
</template>
<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  font-family: 'Segoe UI', sans-serif;
}

header {
  background-color: #4a90e2;
  color: white;
  padding: 2rem;
  text-align: center;
}

.page-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
}

.signup-link {
  text-align: center;
  margin-top: 1rem;
}

.btn {
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.8rem;
  width: 100%;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #357ab8;
}
</style>