
<template>
    <transition name="fade">
        <div class="search">
            <div class="header">
                <span class="fa fa-arrow-left" @click="goback"></span>
                <input type="text" id="input"
                    placeholder="搜索">
                <span class="fa fa-search"></span>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    activated(){
        document.getElementById("input").focus()
    },
    methods: {
        goback() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    span {
      margin: 0 20px;
      font-size: 16px;
      color: #272727;
    }
    input {
      width: 100%;
      height: 25px;
      margin-top: 5px;
      border: none;
      &::-webkit-input-placeholder {
        font-size: 16px;
        color: #c3c3c3;
      }
    }
  }
}
</style>
