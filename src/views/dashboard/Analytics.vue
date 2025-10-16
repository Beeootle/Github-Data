<script setup>
import AnalyticsCard from '@/components/molecules/AnalyticsCard.vue';

const analytics = [
  {
    title: 'Commits',
    value: 1200,
    icon: ['fas', 'chart-line'],
    description: 'Total commits made across all repositories.',
  },
  {
    title: 'Pull Requests',
    value: 350,
    icon: ['fas', 'code-branch'],
    description: 'Total pull requests opened and merged.',
  },
  {
    title: 'Issues',
    value: 150,
    icon: ['fas', 'bug'],
    description: 'Total issues reported and resolved.',
  },
  {
    title: 'Contributors',
    value: 25,
    icon: ['fas', 'user'],
    description: 'Total contributors across all repositories.',
  },
];
</script>
<template>
    <div class="analytics">
    <h1 class="analytics-title">Analytics</h1>
    <AnalyticsCard :analytics="analytics" />
  </div>
</template>

<style scoped>
.analytics {
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.analytics-title {
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
  padding: 1rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-header h5 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
}

.card-body {
  padding: 1.5rem;
  font-size: 1rem;
  color: #495057;
  text-align: center;
}

.card-body .stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.card-body p {
  margin: 0;
  font-size: 0.95rem;
  color: #6c757d;
}

.icon {
  font-size: 1.5rem;
}
</style>