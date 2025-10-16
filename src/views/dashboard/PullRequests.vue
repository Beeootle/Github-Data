<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faClock, faCodeBranch);

const pullRequests = [
  {
    title: 'Add analytics feature',
    author: 'johndoe',
    status: 'Open',
    updated: '2 hours ago',
  },
  {
    title: 'Fix bug in dashboard layout',
    author: 'janedoe',
    status: 'Merged',
    updated: '1 day ago',
  },
  {
    title: 'Update README with new instructions',
    author: 'devuser',
    status: 'Closed',
    updated: '3 days ago',
  },
];
</script>

<template>
  <div class="pull-requests">
    <h1 class="pull-requests-title">Pull Requests</h1>
    <div class="row">
      <div class="col-md-6 col-lg-4" v-for="pr in pullRequests" :key="pr.title">
        <div class="card">
          <div class="card-header">
            <h5>{{ pr.title }}</h5>
          </div>
          <div class="card-body">
            <p>
              <font-awesome-icon :icon="['fas', 'user']" /> <strong>Author:</strong> {{ pr.author }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'code-branch']" /> <strong>Status:</strong> {{ pr.status }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'clock']" /> <strong>Last Updated:</strong> {{ pr.updated }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pull-requests {
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.pull-requests-title {
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