<template>
  <div class="title-content">
      <span class="title-text">
        <slot></slot>
      </span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.title-content {
    height: 40px;
    width: 80%;
    margin: 0 auto;
    border-left: 5px solid rgb(248, 46, 46);
    line-height: 40px;
    margin-bottom: 30px;
}
.title-text {
    margin-left: 20px;
    font-size: 20px;
    color: rgb(112, 111, 111);
    text-shadow: 3px 5px 5px #b4b4b4;
    letter-spacing: 3px;
}
</style>