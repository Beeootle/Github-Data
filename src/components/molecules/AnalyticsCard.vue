<script setup>
const props = defineProps({
  analytics: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="row">
    <div class="col-md-6 col-lg-3" v-for="stat in analytics" :key="stat.title">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h5>{{ stat.title }}</h5>
        </div>
        <div class="card-body">
          <h2 class="stat-value text-primary">{{ stat.value }}</h2>
          <p>{{ stat.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
