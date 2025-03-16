<!-- src/views/HomeView.vue -->
<template>
    <div>
      <the-header />
      <div class="container mt-5">
        <historical-info id="about" />
        <news-and-events id="news" />
        <timeline-slider id="timeline" />
        <notable-persons id="notable-persons" />
      </div>
      <university-achievements id="achievements" />
    </div>
  </template>
  
  <script>
  import TheHeader from '@/components/layout/TheHeader.vue';
  import HistoricalInfo from '@/components/home/HistoricalInfo.vue';
  import TimelineSlider from '@/components/home/TimelineSlider.vue';
  import NotablePersons from '@/components/home/NotablePersons.vue';
  import NewsAndEvents from '@/components/home/NewsAndEvents.vue';
  import UniversityAchievements from '@/components/home/UniversityAchievements.vue';
  
  export default {
    name: 'HomeView',
    components: {
      TheHeader,
      HistoricalInfo,
      TimelineSlider,
      NotablePersons,
      NewsAndEvents,
      UniversityAchievements
    }
  }
  </script>