<template>
  <div class="pro-s-cover">
    <img src="" alt="">
    <h6>Andrew Smith</h6>
    <span>Freelancer</span>
    <p>Web Designer</p>
    <div class="num-box w-100 d-flex">
      <div class="hire">
        <b>55+</b> <br>
        <span>Projects </span>
      </div>
      <div class="msg">
        <b>7+</b> <br>
        <span>Experiance</span>
      </div>
    </div>
    <div class="msg-box d-flex">
      <div class="hire">
        <router-link class="btn btn-outline-dark" :to="'/contacts'">Hire</router-link>
      </div>
      <div class="msg">
        <router-link class="btn btn-outline-dark" :to="'/contacts'">Message</router-link>
      </div>
    </div>
  </div>
</template>