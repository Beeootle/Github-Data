<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faClock, faCircleExclamation);

const issues = [
  {
    title: 'Fix alignment issue in sidebar',
    author: 'johndoe',
    status: 'Open',
    updated: '3 hours ago',
  },
  {
    title: 'Resolve API timeout error',
    author: 'janedoe',
    status: 'Closed',
    updated: '1 day ago',
  },
  {
    title: 'Improve performance of dashboard',
    author: 'devuser',
    status: 'Open',
    updated: '2 days ago',
  },
];
</script>

<template>
  <div class="issues">
    <h1 class="issues-title">Issues</h1>
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="issue in issues" :key="issue.title">
        <div class="card">
          <div class="card-header">
            <h5>{{ issue.title }}</h5>
          </div>
          <div class="card-body">
            <p>
              <font-awesome-icon :icon="['fas', 'user']" /> <strong>Author:</strong> {{ issue.author }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'circle-exclamation']" /> <strong>Status:</strong> {{ issue.status }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'clock']" /> <strong>Last Updated:</strong> {{ issue.updated }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.issues {
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.issues-title {
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