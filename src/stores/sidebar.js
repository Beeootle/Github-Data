import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpen = ref(true);

  const layoutClass = computed(() => (isOpen.value ? 'container' : 'container-fluid'));

  function toggleSidebar() {
    isOpen.value = !isOpen.value;
  }

  return {
    isOpen,
    layoutClass,
    toggleSidebar,
  };
});