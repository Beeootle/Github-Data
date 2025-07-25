<template>
  <header class="header">
    <!-- <div class="header-title">
      Repo Manager
    </div> -->

    <div class="header-search d-flex justify-content-md-start">
      <input type="text" placeholder="Search repositories..." class="search-input" />
    </div>

    <div class="header-buttons">
      <button class="btn refresh-btn">
        <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> Refresh
      </button>
      <button class="btn new-repo-btn">
        <font-awesome-icon :icon="['fas', 'plus']" /> New Repository
      </button>
    </div>

    <slot />
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background-color: #f8f9fa;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

/* .header-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  flex-shrink: 0;
} */

.header-search {
  flex: 1;
  margin: 0 20px;
  margin-left: 15%
}

.search-input {
  width: 30%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.header-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 14px;
  font-size: 0.95rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.refresh-btn {
  background-color: #007bff;
  color: white;
}

.refresh-btn:hover {
  background-color: #0069d9;
}

.new-repo-btn {
  background-color: #28a745;
  color: white;
}

.new-repo-btn:hover {
  background-color: #218838;
}
</style>
