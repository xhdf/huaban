<template>
    <div class="discover">
        <div class="nav">
            <div class="header">
                <span>发现</span>
                <span class="icon fa fa-search fa-1x"></span>
            </div>
            <div class="label">
               <div class="item"  v-for="item in label" :style="{background:'url('+item.img+') center center',backgroundSize: 'cover',}">
                   {{item.text}}
               </div>
            </div>
            <div class="title">
                <span>精选图片</span>
                <span class="icon fa fa-angle-right fa-1x"></span>
            </div>
            <div class="label selection">
                <div class="item"  v-for="item in selection" :style="{background:'url('+item.img+') center center',backgroundSize: 'cover',}"></div>
            </div>
            <div class="title">
                <span>推荐兴趣</span>
                <span class="icon fa fa-angle-right fa-1x"></span>
            </div>
            <div class="label interst">
                <div class="item-wrap"  v-for="item in interst">
                    <div class="item" :style="{background:'url('+item.img+') center center',backgroundSize: 'cover',}"></div>
                    <div class="name">{{item.text}}</div>
                </div>
            </div>
        </div>
        <div class="discover-title">
            <span>发现采集</span>
        </div>
        <div class="list">
            <div class="item"
                v-for="item in data">
                <div class="img"
                    @click="gotolink(item.link)"><img :src="'//img.hb.aicdn.com/'+item.file.key"
                        alt=""></div>
                <div class="msg">
                    <div class="msg-title">{{item.board.title}}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
// img.hb.aicdn.com/
export default {
    data() {
        return {
            data: [],
            label: [{
                img: 'http://img.hb.aicdn.com/fc0a42c6d2e7f638485a392bf3cc40ebf7ec74c9c361-gQgaiR_sq320',
                text: '摄影'
            }, {
                img: 'http://img.hb.aicdn.com/3ef794c7003edbc489e7b6eae0dc91503259225c7934-1MjcjY_sq320',
                text: '生活百科'
            }, {
                img: 'http://img.hb.aicdn.com/719237151f8cd217033876e1fa8c1e7dc16b393b5df2-Etzexv_sq320',
                text: '礼物'
            }, {
                img: 'http://img.hb.aicdn.com/1a99aa11700f7ed01d51914c9061e5cd3ce5632c13b15-gJCMyX_sq320',
                text: '甜品'
            }, {
                img: 'http://img.hb.aicdn.com/436a73eaa52e84f239fc591a96b07896f48e625290d1-osC5Lg_sq320',
                text: '旅行'
            }],
            selection: [{
                img: 'http://img.hb.aicdn.com/5cb2997c40bad1f589b3afc75f751581cc641983162f1-QfxSUK_fw658'
            }, {
                img: 'http://img.hb.aicdn.com/71c38dc329227639e09298fdbbcf587200aa7efbb6d23-JKpUi3_fw658'
            }, {
                img: 'http://img.hb.aicdn.com/dce540633158264629cf05bbc342303b0174246335c91-ptq7gV_fw658'
            }, {
                img: 'http://img.hb.aicdn.com/65f2c5f940f5dd440ff954215049bf538bfe2c22bbd6-yBcO0f_fw658'
            }, {
                img: 'http://img.hb.aicdn.com/061630835565d6559be2ba3542f15e973daaf4111555d-OgLjzY_fw658'
            }],
            interst: [{
                img: 'http://img.hb.aicdn.com/69f9bfe82105214a63fb6fa968fe56965434f4e01bbe7-ZNDENK_fw658',
                text: '草莓'
            }, {
                img: 'http://img.hb.aicdn.com/87173a33921d655ea1d79f2acc4f340402682a3498cc-1WNGx5_fw658',
                text: '衍纸'
            }, {
                img: 'http://img.hb.aicdn.com/8fefa9fab7ac7b849767d11c474d0d8ab13218b21c292-9ctlKn_sq320',
                text: '节气'
            }, {
                img: 'http://img.hb.aicdn.com/1c98e5290413ec645ac063969735ff1fae1e6b6eace1-Lwd8c5_sq320',
                text: '家居'
            }, {
                img: 'http://img.hb.aicdn.com/3ef794c7003edbc489e7b6eae0dc91503259225c7934-1MjcjY_sq320',
                text: '宠物'
            }]
        }
    },
    created() {
        axios.get('/huaban/api/data.json')
            .then(response => {
                console.log(response.data.pins)
                this.data = response.data.pins
            })
    },
    methods: {
        gotolink(link) {
            window.open(link)
        }

    }
}

</script>

<style lang="scss" scoped>
.discover {
  margin-bottom: 70px;
  background: #ebebeb;
  .nav{background: #fff;}
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;
    font-size: 20px;
  }
  .title {
    display: flex;
    align-items: center;
    margin: 20px;
    font-size: 16px;
    .icon {
      margin-left: 10px;
      color: #d8d8d8;
    }
  }
  .label {
    display: -webkit-box;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    padding: 0 5px;
    margin-top: 10px;
    .item {
      width: 100px;
      height: 60px;
      line-height: 60px;
      margin: 0 5px;
      font-size: 16px;
      text-align: center;
      border-radius: 10px;
      color: #fff;
      background: red;

    }
    .name {
      margin: 10px;
      font-size: 14px;
    }
  }
  .selection {
    .item {
      width: 166px;
      height: 96px;
    }
  }
  .interst {
    .item {
      width: 100px;
      height: 100px;
    }
  }
  .discover-title{
    margin: 20px 10px 0;
    font-size: 16px;
  }
  .list {
    column-count: 2;
    column-gap: 10px;
    margin: 10px;
    .item {
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
        .msg-title {
          line-height: 22px;
        }
      }
    }
  }
}
</style>
