<script setup>
import { useSidebarStore } from '../../stores/sidebar';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight,
  faHouse,
  faBook,
  faChartLine,
  faCodeBranch,
  faCircleExclamation,
  faUserPlus,
  faGear,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faArrowLeft,
  faArrowRight,
  faHouse,
  faBook,
  faChartLine,
  faCodeBranch,
  faCircleExclamation,
  faUserPlus,
  faGear,
  faRightFromBracket
);

const sidebarStore = useSidebarStore();
</script>

<template>
  <div class="app-container">
    <button
      class="toggle-btn"
      @click="sidebarStore.toggleSidebar"
      :style="{ left: sidebarStore.isOpen ? '250px' : '80px' }"
    >
      <font-awesome-icon :icon="['fas', sidebarStore.isOpen ? 'arrow-left' : 'arrow-right']" />
    </button>
    <div :class="['sidebar', { open: sidebarStore.isOpen }]">
      <h2 class="sidebar-title" v-show="sidebarStore.isOpen">My Sidebar</h2>

      <ul class="sidebar-links">
        <li>
          <RouterLink to="/">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span v-show="sidebarStore.isOpen"> Dashboard</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/repositories">
            <font-awesome-icon :icon="['fas', 'book']" />
            <span v-show="sidebarStore.isOpen"> Repositories</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/analytics">
            <font-awesome-icon :icon="['fas', 'chart-line']" />
            <span v-show="sidebarStore.isOpen"> Analytics</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/pullrequests">
            <font-awesome-icon :icon="['fas', 'code-branch']" />
            <span v-show="sidebarStore.isOpen"> Pull Requests</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/issues">
            <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
            <span v-show="sidebarStore.isOpen"> Issues</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/teams">
            <font-awesome-icon :icon="['fas', 'user-plus']" />
            <span v-show="sidebarStore.isOpen"> Teams</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/settings">
            <font-awesome-icon :icon="['fas', 'gear']" />
            <span v-show="sidebarStore.isOpen"> Settings</span>
          </RouterLink>
        </li>
      </ul>

      <div class="signout-section">
        <RouterLink to="/auth">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          <span v-show="sidebarStore.isOpen"> Sign Out</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
}

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
  margin: 0;
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

.signout-section {
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  right: 1rem;
}

.signout-section a {
  color: #adb5bd;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.signout-section a:hover {
  color: #ffffff;
}
</style>
