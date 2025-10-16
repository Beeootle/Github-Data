<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons';

library.add(faCodeBranch, faStar, faClock);

const repositories = [
  {
    name: 'github-stats',
    description: 'A Vue.js project to display GitHub statistics',
    stars: 128,
    forks: 56,
    updated: '2 days ago',
  },
  {
    name: 'vue-project',
    description: 'A simple Vue.js application',
    stars: 75,
    forks: 30,
    updated: '5 days ago',
  },
  {
    name: 'awesome-vue',
    description: 'A list of awesome things related to Vue.js',
    stars: 500,
    forks: 200,
    updated: '1 week ago',
  },
];
</script>

<template>
<div class="repositories">
  <h1 class="repositories-title">Repositories</h1>
  <div class="row">
    <div class="col-md-4" v-for="repo in repositories" :key="repo.name">
      <div class="card">
        <div class="card-header">
          <h5>{{ repo.name }}</h5>
        </div>
        <div class="card-body">
          <p>{{ repo.description }}</p>
          <p>
            <!-- <font-awesome-icon :icon="['fas', 'star']" />  -->
            <strong>Stars:</strong> {{ repo.stars }}
          </p>
          <p>
            <!-- <font-awesome-icon :icon="['fas', 'code-branch']" /> -->
             <strong>Forks:</strong> {{ repo.forks }}
          </p>
          <p>
            <!-- <font-awesome-icon :icon="['fas', 'clock']" /> -->
             <strong>Last Updated:</strong> {{ repo.updated }}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>  
</template>

<style scoped>
.repositories {
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.repositories-title {
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
</style>