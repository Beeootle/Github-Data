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
          <div class="card-header bg-primary text-white">
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
