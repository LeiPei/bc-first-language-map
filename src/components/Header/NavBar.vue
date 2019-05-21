<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="logo" src="../../assets/FPCC-Logo-Set-01.png" alt="">
    <a class="navbar-brand" href="#">{{title | toupper}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">{{'languages' | capitalize}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{'first Nations' | capitalize}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{'places' | capitalize}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{{'phrases' | capitalize}}</a>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0 auth-div">
        <div style="width: 45%; margin-right: 10px">
          <button class="btn btn-block btn-outline-success my-2 my-sm-0 btn-sm">{{'login' | capitalize}}</button>
        </div>
        <div style="width: 45%">
          <button class="btn btn-block btn-outline-success my-2 my-sm-0 btn-sm"> {{'sign Up' | capitalize}}</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      title: 'language map of british columbia'
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  width: 60px;
  height: 100%;
  margin-right: 10px;
}

.auth-div {
  width: 200px;
}

.nav-item {
  a:hover {
    text-decoration: underline;
  }
}
</style>
