<template>
  <div class="col-md-8">
    <AboutMeComponent />
    <ExperienceComponent />
    <EducationComponent />
  </div>
</template>

<script>
import AboutMeComponent from '@/components/main/AboutMeComponent.vue'
import ExperienceComponent from '@/components/main/experiance/ExperianceComponent.vue'
import EducationComponent from '@/components/main/education/EducationDetailsComponent.vue'

export default {
  name: 'HomeView',
  components: {
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent
  }
}
</script>
