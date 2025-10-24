<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

library.add(faDatabase, faCode, faClock);
</script>

<template>
  <div class="dashboard">
    <h1 class="dashboard-title">Development Dashboard</h1>
    <div class="row">
      <div class="card col-md-4">
        <div class="card-header bg-primary text-white">
          <h5>
            <font-awesome-icon :icon="['fas', 'database']" class="icon" />
            Overview
          </h5>
        </div>
        <div class="card-body">
          <p><strong>Repositories:</strong> 42</p>
          <p><strong>Stars:</strong> 128</p>
          <p><strong>Forks:</strong> 56</p>
          <p><strong>Followers:</strong> 300</p>
        </div>
      </div>

      <div class="card col-md-4">
        <div class="card-header bg-primary text-white">
          <h5>
            <font-awesome-icon :icon="['fas', 'code']" class="icon" />
            Languages
          </h5>
        </div>
        <div class="card-body">
          <ul>
            <li>JavaScript: 60%</li>
            <li>Python: 25%</li>
            <li>HTML: 10%</li>
            <li>CSS: 5%</li>
          </ul>
        </div>
      </div>

      <div class="card col-md-4">
        <div class="card-header bg-primary text-white">
          <h5>
            <font-awesome-icon :icon="['far', 'clock']" class="icon" />
            Recent Activity
          </h5>
        </div>
        <div class="card-body">
          <ul>
            <li>Pushed to <strong>main</strong> in <strong>github-stats</strong></li>
            <li>Opened a pull request in <strong>vue-project</strong></li>
            <li>Starred <strong>awesome-vue</strong></li>
            <li>Forked <strong>bootstrap</strong></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <h2>Repositories</h2>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5>Repository 1</h5>
          </div>
          <div class="card-body">
            <p>Description of Repository 1</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5>Repository 2</h5>
          </div>
          <div class="card-body">
            <p>Description of Repository 2</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 
</style>