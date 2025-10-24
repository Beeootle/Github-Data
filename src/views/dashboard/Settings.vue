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
          <div class="card-header bg-primary text-white">
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

