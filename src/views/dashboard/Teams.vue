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
          <div class="card-header">
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

<style scoped>
.teams {
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.teams-title {
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
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-body p strong {
  color: #007bff;
}

.icon {
  font-size: 1.5rem;
}
</style>