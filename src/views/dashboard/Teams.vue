<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faUsers, faUser, faInfoCircle);

const teams = [
  {
    name: 'Frontend Team',
    description: 'Responsible for building and maintaining the UI.',
    members: 8,
  },
  {
    name: 'Backend Team',
    description: 'Handles server-side logic and database management.',
    members: 5,
  },
  {
    name: 'DevOps Team',
    description: 'Ensures smooth deployment and infrastructure management.',
    members: 3,
  },
];
</script>

<template>
  <div class="teams">
    <h1 class="teams-title">Teams</h1>
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="team in teams" :key="team.name">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5>
              <font-awesome-icon :icon="['fas', 'users']" class="icon" />
              {{ team.name }}
            </h5>
          </div>
          <div class="card-body">
            <p>
              <font-awesome-icon :icon="['fas', 'info-circle']" /> {{ team.description }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'user']" /> <strong>Members:</strong> {{ team.members }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
