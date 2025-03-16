<!-- src/components/home/UniversityAchievements.vue -->
<template>
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="mb-5 text-primary text-center">Достижения университета ЛЭТИ</h2>
        
        <div class="row text-center">
          <div class="col-md-3 mb-4" v-for="(stat, index) in statistics" :key="index">
            <div class="achievement-item p-4 bg-white rounded shadow-sm h-100">
              <div class="achievement-icon mb-3">
                <i :class="['bi', stat.icon, 'text-primary', 'fs-1']"></i>
              </div>
              <h3 class="achievement-number fw-bold">{{ stat.number }}</h3>
              <p class="achievement-label">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-md-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h3 class="card-title text-primary mb-4">Научные достижения</h3>
                <ul class="achievement-list">
                  <li v-for="(achievement, index) in scientificAchievements" :key="index" class="mb-3">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col-md-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body">
                <h3 class="card-title text-primary mb-4">Образовательные достижения</h3>
                <ul class="achievement-list">
                  <li v-for="(achievement, index) in educationalAchievements" :key="index" class="mb-3">
                    <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'UniversityAchievements',
    data() {
      return {
        statistics: [
          {
            icon: 'bi-calendar-check',
            number: '136',
            label: 'лет со дня основания'
          },
          {
            icon: 'bi-mortarboard',
            number: '8500+',
            label: 'студентов'
          },
          {
            icon: 'bi-people',
            number: '950+',
            label: 'преподавателей'
          },
          {
            icon: 'bi-award',
            number: '47',
            label: 'научных лабораторий'
          }
        ],
        scientificAchievements: [
          'Изобретение радио А.С. Поповым в 1895 году',
          'Исследования в области полупроводниковых гетероструктур Ж.И. Алфёровым',
          'Разработка первых советских радиолокационных систем',
          'Создание первого в России микропроцессора',
          'Разработка медицинской электронной аппаратуры'
        ],
        educationalAchievements: [
          'Внедрение инновационных методов обучения',
          'Международное признание дипломов и степеней',
          'Сотрудничество с ведущими мировыми университетами',
          'Высокий уровень трудоустройства выпускников',
          'Современные образовательные программы в соответствии с требованиями индустрии'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .achievement-item {
    transition: transform 0.3s;
  }
  
  .achievement-item:hover {
    transform: translateY(-10px);
  }
  
  .achievement-number {
    font-size: 2.5rem;
    color: var(--bs-primary);
  }
  
  .achievement-list {
    list-style: none;
    padding-left: 0;
  }
  
  .achievement-list li {
    font-size: 1.1rem;
  }
  </style>