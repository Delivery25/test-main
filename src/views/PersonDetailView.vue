<!-- src/views/PersonDetailView.vue -->
<template>
    <div v-if="person">
      <div class="page-header bg-primary text-white py-5">
        <div class="container">
          <h1 class="display-4">{{ person.name }}</h1>
          <p class="lead">{{ person.years }}</p>
        </div>
      </div>
      
      <div class="container py-5">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card border-0 shadow-sm">
              <img :src="person.image" class="card-img-top" :alt="person.name">
              <div class="card-body">
                <h5 class="text-primary">Годы жизни</h5>
                <p>{{ person.years }}</p>
                
                <h5 class="text-primary mt-4">Достижения</h5>
                <ul class="list-unstyled">
                  <li v-for="(achievement, index) in person.achievements" :key="index" class="mb-2">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    {{ achievement }}
                  </li>
                </ul>
                
                <router-link to="/persons" class="btn btn-outline-primary mt-3">
                  <i class="bi bi-arrow-left me-2"></i>Назад к списку
                </router-link>
              </div>
            </div>
          </div>
          
          <div class="col-md-8">
            <h2 class="mb-4 text-primary">Биография</h2>
            <div class="biography-content">
              <p>{{ person.fullBio }}</p>
              
              <!-- Здесь будет дополнительное содержание -->
              <div class="placeholder-content mt-5 p-5 bg-light rounded text-center">
                <i class="bi bi-book fs-1 text-primary"></i>
                <p class="mt-3">Здесь будет размещена полная биография и информация о научном вкладе</p>
              </div>
              
              <h3 class="mt-5 mb-3 text-primary">Вклад в науку</h3>
              <p>{{ person.description }}</p>
              
              <div class="timeline mt-5">
                <h3 class="mb-4 text-primary">Основные даты</h3>
                <!-- Здесь можно добавить важные даты из жизни персоны -->
                <div class="timeline-placeholder text-center p-5 bg-light rounded">
                  <i class="bi bi-calendar3 fs-1 text-primary"></i>
                  <p class="mt-3">Здесь будет размещена хронология жизни и достижений</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div v-else class="container py-5 text-center">
      <div class="alert alert-warning">
        <h4><i class="bi bi-exclamation-triangle me-2"></i>Информация не найдена</h4>
        <p>К сожалению, информация о данном человеке отсутствует в базе данных.</p>
        <router-link to="/persons" class="btn btn-primary mt-3">Вернуться к списку</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'PersonDetailView',
    computed: {
      ...mapGetters({
        getPersonById: 'getPersonById'
      }),
      person() {
        return this.getPersonById(parseInt(this.$route.params.id))
      }
    }
  }
  </script>
  
  <style scoped>
  .page-header {
    margin-top: 56px;
  }
  
  .biography-content {
    line-height: 1.8;
  }
  </style>