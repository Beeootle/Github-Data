<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faBell, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faBell, faLock);

const settings = [
  {
    title: 'Profile Settings',
    description: 'Update your personal information and profile picture.',
    icon: ['fas', 'user'],
  },
  {
    title: 'Notifications',
    description: 'Manage your notification preferences and alerts.',
    icon: ['fas', 'bell'],
  },
  {
    title: 'Account Security',
    description: 'Change your password and enable two-factor authentication.',
    icon: ['fas', 'lock'],
  },
];
</script>

<template>
  <div class="settings">
    <h1 class="settings-title">Settings</h1>
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="setting in settings" :key="setting.title">
        <div class="card">
          <div class="card-header">
            <font-awesome-icon :icon="setting.icon" class="icon" />
            <h5>{{ setting.title }}</h5>
          </div>
          <div class="card-body">
            <p>{{ setting.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings {
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.settings-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.card {
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-header {
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-body {
  padding: 1.5rem;
  font-size: 1rem;
  color: #495057;
}

.card-body p {
  margin: 0;
}

.icon {
  font-size: 1.5rem;
}
</style>