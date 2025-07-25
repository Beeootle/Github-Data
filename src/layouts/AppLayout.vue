<script setup>
import Header from './includes/Header.vue'
import Sidebar from './includes/Sidebar.vue'
</script>
<template>
  <Header />
  <Sidebar />
  <div>
    <slot></slot>
  </div>
</template>
