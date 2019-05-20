<template>
  <div class="explore">
    <div class="title">
      <span>{{'explore Map' | capitalize}}</span>
    </div>
    <div class="control-btns">
      <div class="form-inline my-lg-0">
        <div style="width: 50%;">
          <button class="btn btn-block btn-outline-dark my-sm-0 btn-sm">
            <v-icon>list</v-icon>
          </button>
        </div>
        <div style="width: 50%">
          <button class="btn btn-block btn-outline-dark my-sm-0 btn-sm">
            <v-icon>question_answer</v-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.explore {
  height: 40px;
  background-color: #42b983;
  display: flex;
  justify-content: space-between;
  .title {
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-left: 100px;
    padding-top: 10px;
  }
  .control-btns {
    margin-right: 100px;
    padding-top: 5px;
    button {
      padding: 1px;
    }
    .btn-outline-dark:hover {
      background-color: #7b7d7f
    }
  }
}
</style>
