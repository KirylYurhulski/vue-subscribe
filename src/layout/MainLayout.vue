<template>
  <div class="container-fluid">
    <div class="container profile-container">
      <NavBarHead />

      <div class="row">
        <div id="menu-jk" class="col-md-4">
          <GeneralInfo />
          <ContactLink />
        </div>

        <slot />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import NavBarHead from '@/components/main/navBar/app-nav-head.vue'
import GeneralInfo from '@/components/main/general-info.vue'
import ContactLink from '@/components/main/contact-link.vue'
import Footer from '@/components/main/footer/app-footer.vue'

export default {
  name: "MainLayout",
  components: {
    NavBarHead,
    GeneralInfo,
    ContactLink,
    Footer
  }
}
</script>

<style scoped>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/fontawsom-all.min.css';
@import '@/assets/css/style.css'
</style>