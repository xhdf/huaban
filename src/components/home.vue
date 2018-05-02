<template>
    <div class="home">
        <div class="search-wrap">
            <div class="search" @click="gotosearch">
                <span class="icon fa fa-search fa-1x"></span>
                <span>搜索</span>
            </div>
        </div>
        <div class="list">
            <div class="item"
                v-for="item in data">
                <div class="img"
                    @click="gotolink(item.link)">
                    <img :src="'//img.hb.aicdn.com/'+item.file.key"    alt=""></div>
                <div class="msg">
                    <div class="title">{{item.board.title}}</div>
                    <div class="user">
                        <div class="head"><img :src="'//img.hb.aicdn.com/'+item.user.avatar.key"
                                alt=""></div>
                        <div class="name">{{item.user.username}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
// img.hb.aicdn.com/
export default {
    data() {
        return {
            data: []
        }
    },
    created() {
        axios.get('/huaban/api/data.json')
            .then(response => {
                console.log(response)
                console.log(response.data.pins)
                this.data = response.data.pins
            })
    },
    methods: {
        gotolink(link) {
            window.open(link)
        },
        gotosearch() {
            this.$router.push('/search')
        }
    }
}

</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 70px;
  .search-wrap {
    padding: 8px 10px;
    background: #fff;
    .search {
      display: flex;
      align-items: center;
      height: 30px;
      border-radius: 5px;
      background: #ececec;
      span {
        margin-left: 10px;
        color: #bdbdbd;
        &.icon {
          font-size: 16px;
          color: #3a3a3a;
        }
      }
    }
  }
  .list {
    column-count: 2;
    column-gap: 10px;
    margin: 10px;
    .item {
        // float: left;
      break-inside: avoid;
      margin-top: 10px;
      border-radius: 5px;
      overflow: hidden;
      background: #fff;
      &:first-child{
      margin-top: 0px;

      }
      .img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .msg {
        padding: 10px;
        .title {
          line-height: 22px;
        }
        .user {
          display: flex;
          align-items: center;
          margin-top: 10px;
          .head {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .name {
            margin-left: 10px;
            color: #bdbdbd;
          }
        }
      }
    }
  }
}
</style>
