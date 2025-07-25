<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft, faArrowRight)
const isOpen = ref(true)
</script>

<template>
  <div class="app-container">
    <button
      class="toggle-btn"
      @click="isOpen = !isOpen"
      :style="{ left: isOpen ? '250px' : '80px' }"
    >
      <font-awesome-icon :icon="['fas', isOpen ? 'arrow-left' : 'arrow-right']" />
    </button>

    <div :class="['sidebar', { open: isOpen }]">
      <h2 class="sidebar-title" v-show="isOpen">My Sidebar</h2>
      <ul class="sidebar-links">
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span v-show="isOpen"> Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['far', 'address-card']" />
            <span v-show="isOpen"> About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'phone']" />
            <span v-show="isOpen"> Contact</span>
          </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon :icon="['fas', 'gear']" />
            <span v-show="isOpen"> Settings</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <slot />
</template>

<style scoped>
.sidebar {
  width: 80px;
  background-color: #212529;
  color: #fff;
  padding: 2rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  transition: width 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar.open {
  width: 250px;
}

.toggle-btn {
  position: fixed;
  top: 1rem;
  z-index: 1001;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #343a40;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease;
}

.sidebar-title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #f8f9fa;
  white-space: nowrap;
}

.sidebar-links {
  list-style: none;
  padding: 0;
}

.sidebar-links li {
  margin-bottom: 1rem;
}

.sidebar-links a {
  color: #adb5bd;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.sidebar-links a:hover {
  color: #ffffff;
}
</style>
