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
          <div class="card-header bg-primary text-white">
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
