<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faStar, faClock } from '@fortawesome/free-regular-svg-icons';
import RepositoriesCard from '@/components/molecules/RepositoriesCard.vue';

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
  <RepositoriesCard :repositories="repositories" />
</div>  
</template>
