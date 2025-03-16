<!-- src/components/home/NewsAndEvents.vue -->
<template>
    <section class="py-5">
      <h2 class="mb-4 text-primary">Новости и события</h2>
      <div class="row">
        <div class="col-md-8">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-primary">Последние новости</h3>
              <div v-for="(news, index) in newsItems" :key="'news-'+index" class="news-item mb-4">
                <div class="d-flex">
                  <div class="news-date text-center me-3 p-2 bg-light rounded">
                    <span class="d-block fw-bold fs-4">{{ news.day }}</span>
                    <span class="d-block">{{ news.month }}</span>
                  </div>
                  <div>
                    <h5>{{ news.title }}</h5>
                    <p class="text-muted mb-1">{{ news.category }}</p>
                    <p>{{ news.summary }}</p>
                    <a href="#" class="text-primary">Читать далее →</a>
                  </div>
                </div>
                <hr v-if="index < newsItems.length - 1">
              </div>
              <div class="text-center mt-4">
                <button class="btn btn-outline-primary">Все новости</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h3 class="card-title text-primary">Предстоящие события</h3>
              <div v-for="(event, index) in events" :key="'event-'+index" class="event-item mb-3">
                <div class="d-flex">
                  <div class="event-date text-center me-3 p-2 bg-primary text-white rounded">
                    <span class="d-block fw-bold">{{ event.day }}</span>
                    <span class="d-block small">{{ event.month }}</span>
                  </div>
                  <div>
                    <h6 class="mb-1">{{ event.title }}</h6>
                    <p class="small mb-0">
                      <i class="bi bi-clock me-1"></i> {{ event.time }}
                      <br>
                      <i class="bi bi-geo-alt me-1"></i> {{ event.location }}
                    </p>
                  </div>
                </div>
                <hr v-if="index < events.length - 1">
              </div>
              <div class="text-center mt-4">
                <button class="btn btn-outline-primary">Календарь событий</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NewsAndEvents',
    data() {
      return {
        newsItems: [
          {
            day: '15',
            month: 'Мар',
            title: 'Научная конференция молодых ученых',
            category: 'Наука',
            summary: 'В университете ЛЭТИ прошла ежегодная научная конференция молодых ученых, посвященная современным технологиям радиоэлектроники и коммуникаций.'
          },
          {
            day: '10',
            month: 'Мар',
            title: 'Подписано соглашение о сотрудничестве с технологической компанией',
            category: 'Партнерство',
            summary: 'ЛЭТИ подписал соглашение о стратегическом сотрудничестве с ведущей технологической компанией в области разработки микроэлектроники.'
          },
          {
            day: '5',
            month: 'Мар',
            title: 'Открытие новой научной лаборатории',
            category: 'Инфраструктура',
            summary: 'В ЛЭТИ состоялось торжественное открытие новой лаборатории квантовых технологий, оснащенной современным оборудованием.'
          }
        ],
        events: [
          {
            day: '25',
            month: 'Мар',
            title: 'День открытых дверей',
            time: '11:00 - 15:00',
            location: 'Главный корпус ЛЭТИ'
          },
          {
            day: '30',
            month: 'Мар',
            title: 'Международная научная конференция "Электроника-2025"',
            time: '10:00 - 18:00',
            location: 'Конференц-зал ЛЭТИ'
          },
          {
            day: '5',
            month: 'Апр',
            title: 'Мастер-класс по программированию микроконтроллеров',
            time: '15:00 - 17:00',
            location: 'Аудитория 3248'
          },
          {
            day: '10',
            month: 'Апр',
            title: 'Встреча с представителями индустрии',
            time: '14:00 - 16:00',
            location: 'Актовый зал'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .news-date, .event-date {
    min-width: 60px;
  }
  
  .event-item, .news-item {
    transition: transform 0.3s;
  }
  
  .event-item:hover, .news-item:hover {
    transform: translateX(5px);
  }
  </style>