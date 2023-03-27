<template>
  <div class="data-box">
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a urna posuere, aliquet elit in, fermentum
      ligula. Sed est augue, molestie sed tortor sed, posuere commodo lectus. Aliquam blandit eros a nibh
      tristique, id accumsan lacus rutrum. Mauris ornare neque vitae mollis luctus. Proin malesuada quam ut dui
      sagittis, sit amet accumsan nibh bibendum. Sed maximus sed turpis a rhoncus. Vestibulum quis velit leo. Nunc
      laoreet tincidunt congue. Quisque efficitur, erat congue volutpat malesuada, erat felis finibus ex</p>
    <div class="btn-ro row no-margin">
      <ul class="btn-link">
        <li>
          <router-link :to="'/contacts'"><i class="fas fa-paper-plane"></i>Hire Me</router-link>
        </li>
        <li>
          <router-link :to="''"><i class="fas fa-cloud-download-alt"></i> Download Resume</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>