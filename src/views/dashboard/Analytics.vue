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

