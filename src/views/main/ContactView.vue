<template>
  <div class="col-md-8">
    <div class="data-box contact-tab">
      <h2>Contact US</h2>
      <div class="row no-margin">
        <div class="col-md-12">
          <br>
          <div class="row cont-row no-margin">
            <div class="col-sm-6">
              <input placeholder="Enter Full Name" type="text" class="form-control form-control-sm">
            </div>
            <div class="col-sm-6">
              <input placeholder="Enter Email Address" type="text" class="form-control form-control-sm">
            </div>
          </div>
          <div class="row cont-row no-margin">
            <div class="col-sm-6">
              <input placeholder="Enter Mobile Number" type="text" class="form-control form-control-sm">
            </div>

          </div>
          <div class="row cont-row no-margin">
            <div class="col-sm-12">
              <textarea placeholder="Enter your Message" class="form-control form-control-sm" rows="10"></textarea>
            </div>

          </div>
          <div class="row cont-row no-margin">
            <div class="col-sm-6">
              <button class="btn btn-sm btn-success">Send Message</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactView'
}
</script>
