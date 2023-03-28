<template>
  <div class="data-box education-detail">
    <h2>{{ title }}</h2>
    <EduListItem />
  </div>
</template>

<script>
import EduListItem from './edu-list-item.vue'

export default {
  data() {
    return {
      title: 'Education Details'
    }
  },
  components: {
    EduListItem
  }
}
</script>
