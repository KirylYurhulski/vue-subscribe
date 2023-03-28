<template>
  <div class="col-md-8">
    <AboutMe />
    <ExperienceList />
    <EducationList />
  </div>
</template>

<script>
import AboutMe from '@/components/main/about-me.vue'
import ExperienceList from '@/components/main/experiance/experiance-list.vue'
import EducationList from '@/components/main/education/edu-list.vue'

export default {
  name: 'HomeView',
  components: {
    AboutMe,
    ExperienceList,
    EducationList
  }
}
</script>
