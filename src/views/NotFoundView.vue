<!-- src/views/NotFoundView.vue -->
<template>
    <div class="not-found-container">
      <div class="container text-center py-5">
        <h1 class="display-1 text-primary fw-bold">404</h1>
        <h2 class="mb-4">Страница не найдена</h2>
        <p class="lead mb-5">Извините, запрашиваемая страница не существует или была перемещена.</p>
        <router-link to="/" class="btn btn-primary btn-lg">
          <i class="bi bi-house-door me-2"></i>Вернуться на главную
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundView'
  }
  </script>
  
  <style scoped>
  .not-found-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 76px;
  }
  </style>