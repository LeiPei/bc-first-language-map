<template>
  <div class="control-container">
    <h3 class="explore-title" data-toggle="tooltip" data-placement="top" title="Click to expand or collapse" @click="animateCSS">Explore The Language Map</h3>
    <hr class="mb-0">
    <div class="fade-container" v-show="show">
      <div class="search">
      <span class="s_span"><v-icon>search</v-icon></span>
      <input class="form-control mr-sm-2" type="search" placeholder="Search by keyword..." aria-label="Search">
      </div>
      <hr class="mt-1">
      <div class="list">
        <div class="item">
          <span>Explore by Region</span>
          <v-btn fab flat outline small :color="btn_color">
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        </div>
        <hr class="mt-1">
        <div class="item">
          <span>Explore by Languages</span>
          <v-btn fab flat outline small :color="btn_color">
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        </div>
        <hr class="mt-1">
        <div class="item">
          <span>Explore by Place Names</span>
          <v-btn fab flat outline small :color="btn_color">
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        </div>
        <hr class="mt-1">
        <div class="item">
          <span>Explore by Phrases</span>
          <v-btn fab flat outline small :color="btn_color">
            <v-icon>arrow_forward_ios</v-icon>
          </v-btn>
        </div>
        <hr class="mt-1">
      </div>
      <div class="form-inline my-lg-0 filter-div">
        <div style="width: 45%; margin-right: 10px">
          <button class="btn btn-block btn-map my-sm-0 btn-sm">{{'reset' | capitalize}}</button>
        </div>
        <div style="width: 45%">
          <button class="btn btn-block btn-map my-sm-0 btn-sm"> {{'filter' | capitalize}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    $('[data-toggle="tooltip"]').tooltip() //eslint-disable-line
  },
  data () {
    return {
      btn_color: '#595a5b',
      show: true
    }
  },
  methods: {
    animateCSS () {
      let $ = window.$ //eslint-disable-line
      if ($('.fade-container').css('height') > '1px') {
        $('.fade-container').css({ 'height': '0px' })
      } else {
        $('.fade-container').css({ 'height': '272px' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.control-container{
  z-index: 999;
  position: absolute;
  top: 140px;
  left: 30px;
  // height: 325px;
  width: 230px;
  background-color: white;
  .explore-title:hover {
    cursor: pointer;
  }
  .fade-container {
    height: 272px;
    overflow: hidden;
    -webkit-transition: all .8s ease;
    -moz-transition: all .8s ease;
    -ms-transition: all .8s ease;
    -o-transition: all .8s ease;
    transition: all .8s ease;
  }
  .opacity-hide {
    opacity: 0;
    animation-duration: 2s;
  }
  h3 {
    padding-top: 15px;
    font-size: 16px;
    font-weight: bold;
  }
  .search {
    width: 100%;
    display: flex;
    padding: 5px 0px;
    margin-top: 4px;
    .s_span {
      padding: 5px 0px;
    }
  }
  hr {
    margin-bottom: 4px;
  }
  .list {
    .item {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        padding: 6px 7px;
      }
      .v-btn--floating.v-btn--small {
        height: 30px;
        width: 30px;
        margin: 3px 6px;
      }
    }
  }
  .filter-div {
    padding-left: 12px;
    padding-top: 3px;
  }
  .btn-map {
    color: #fff;
    background-color: #42b983;
    border-color: #42b983;
    &:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
    }
  }
}
</style>
