<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, faCode} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

library.add(faDatabase, faCode, faClock);
</script>

<template>
    <div class="dashboard">
        <h1 class="dashboard-title">Development Dashboard</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h5>
                            <font-awesome-icon :icon="['fas', 'database']" class="icon" />
                            Overview
                        </h5>
                    </div>
                    <div class="card-body">
                        <p><strong>Reposotories:</strong> 42</p>
                        <p><strong>Stars:</strong> 128</p>
                        <p><strong>Forks:</strong> 56</p>
                        <p><strong>Followers:</strong> 300</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
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
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
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
        </div>
    </div>
</template>
<style scoped>
.dashboard {
    padding: 2rem;
    background-color: #f8f9fa;
    min-height: 100vh;
}

.dashboard-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

.card {
    margin-bottom: 1.5rem;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    min-height: 300px;
    padding: 1rem;
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
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.card-body {
    padding: 1rem;
    font-size: 1.1rem;
    color: #495057;
}

.card-body p,
.card-body ul li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.card-body ul {
    list-style: none;
    padding: 0;
}

.card-body ul li strong {
    color: #007bff;
}

.icon {
    margin-right: 0.5rem;
}
</style>