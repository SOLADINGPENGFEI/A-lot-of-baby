<template>

    <div class="list-top">
      <section>
        <img/>
        <span >{{options}}</span>
      </section>
    </div>
</template>
<script>
export default {
  props: ["options"]
};
</script>
<style lang="scss" scoped>
.list-top {
  width: 100%;
  height:150px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  background: pink;
  margin-top: 10px;

  section {
    width: 20%;
    font-size: 12px;
    margin: 0px 9px;
    background: pink;
    img {
      width: 80px;
      height: 80px;
    }
    span {
      width: 100%;
    }
  }
}
</style>
