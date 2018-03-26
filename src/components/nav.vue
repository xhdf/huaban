<template>
    <div class="nav">
        <router-link class="router-link"
            to="/home"
            tag="div">
            <span class="fa fa-ravelry fa-2x"></span>
        </router-link>
        <router-link class="router-link"
            to="/discover"
            tag="div">
            <span class="fa fa-superpowers fa-2x"></span>
        </router-link>
        <router-link class="router-link"
            to="/login"
            tag="div">
            <span class="fa fa-user fa-2x"></span>
        </router-link>
    </div>
</template>
<script>

export default {
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  align-items: center;
  color: #cecece;
  background: #fff;
  & > div {
    flex: 1;
    text-align: center;
  }
  .router-link {
    transition: transform 0.5s;
  }
  .router-link-active {
    color: black;
    transform: translateY(-3px);
  }
}
</style>
