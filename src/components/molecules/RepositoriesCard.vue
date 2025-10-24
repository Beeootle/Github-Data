<script setup>
const props = defineProps({
  repositories: {
    type: Array,
    required: true,
  },
})
</script>
<template>
    <h1 class="repositories-title">Repositories</h1>
  <div class="row">
    <div class="col-md-4" v-for="repo in repositories" :key="repo.name">
      <div class="card">
        <div class="card-header bg-primary text-white">
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
</template>
 
