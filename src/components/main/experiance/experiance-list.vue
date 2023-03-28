<template>
  <div class="data-box">
    <h2>{{ title }}</h2>
    <ExperienceListItem />
  </div>
</template>

<script>
import ExperienceListItem from '@/components/main/experiance/experience-list-item'

export default {
  data() {
    return {
      title: 'Experiance'
    }
  },
  components: {
    ExperienceListItem
  }
}
</script>
