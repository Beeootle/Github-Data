<script setup>
import { useSidebarStore } from '../stores/sidebar';
import Header from './includes/Header.vue';
import Sidebar from './includes/Sidebar.vue';

// Access the sidebar store
const sidebarStore = useSidebarStore();
</script>
<template>
  <Header />
  <Sidebar :onToggle="sidebarStore.toggleSidebar" />
  <div 
    :class="[sidebarStore.layoutClass, 'main-content']"
    :style="{ 
      marginLeft: sidebarStore.isOpen ? '250px' : '80px', 
      transition: 'margin-left 0.3s ease' 
    }"
  >
    <slot></slot>
  </div>
</template>