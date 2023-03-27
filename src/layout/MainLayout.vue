<template>
  <div class="container-fluid">
    <div class="container profile-container">
      <NavBarHeadComponent />

      <div class="row">
        <div id="menu-jk" class="col-md-4">
          <GeneralComponent />
          <SocialComponent />
        </div>

        <slot />

      </div>

      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavBarHeadComponent from '@/components/main/navBar/NavBarHeadComponent.vue'
import GeneralComponent from '@/components/main/GeneralComponent.vue'
import SocialComponent from '@/components/main/SocialComponent'
import FooterComponent from '@/components/main/footer/FooterComponent.vue'

export default {
  name: "MainLayout",
  components: {
    NavBarHeadComponent,
    GeneralComponent,
    SocialComponent,
    FooterComponent
  }
}
</script>

<style scoped>
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/fontawsom-all.min.css';
@import '@/assets/css/style.css'
</style>