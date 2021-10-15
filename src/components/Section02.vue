<template>
  <div class="section-two">
    <div class="inner">
      <div class="section-top">
        <div class="image-box">
          <img
            src="https://www.woorisavingsbank.com/images/main/section02_main1.png"
            alt=""
          />
        </div>
        <div class="title-box">
          <div class="title">
            <p class="title-upper">계획적으로 이용하는</p>
            <div class="title-lower-box">
              <p class="title-lower"><span>우리</span>금융서비스</p>
              <a href="#">대출상품<img src="../assets/next.png" alt="" /></a>
            </div>
          </div>
          <div class="btns">
            <div>
              <a href="#">
                <img
                  src="https://www.woorisavingsbank.com/ui_common/images/icon_btn01.png"
                  alt=""
                />
                <p class="link-text">온라인 대출센터</p>
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="https://www.woorisavingsbank.com/ui_common/images/icon_btn02.png"
                  alt=""
                />
                <span class="link-text">온라인서류제출</span>
              </a>
              <a href="#">
                <img
                  src="https://www.woorisavingsbank.com/ui_common/images/icon_btn04.png"
                  alt=""
                />
                <span class="link-text">대출상담사 조회</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="https://www.woorisavingsbank.com/ui_common/images/icon_btn03.png"
                  alt=""
                />
                <span class="link-text">대출계약서 전자서명</span>
              </a>
              <a href="#">
                <img
                  src="https://www.woorisavingsbank.com/ui_common/images/icon_btn05.png"
                  alt=""
                />
                <span class="link-text">금리인하요구권</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="section-bottom">
        <div id="container">
          <div class="slide-wrap">
            <div class="slide-box">
              <div class="slide-list clearfix" :class="curPage">
                <ul class="slide-content slide01">
                  <li>
                    <a href="#">
                      <p>신용대출</p>
                      <p>사잇돌 연계신용</p>
                      <ul class="percentage">
                        <li>연 최저<span>13.41</span>%</li>
                        <li>연 최대<span>19.99</span>%</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>신용대출</p>
                      <p>비타WON</p>
                      <ul class="percentage">
                        <li>연 최저<span>5.90</span>%</li>
                        <li>연 최대<span>18.71</span>%</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>신용대출</p>
                      <p>우리금융캐피탈<br />연계신용</p>
                      <ul class="percentage">
                        <li>연 최저<span>16.33</span>%</li>
                        <li>연 최대<span>17.34</span>%</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>신용대출</p>
                      <p>차량후순위대출</p>
                      <ul class="percentage">
                        <li>연 최저<span>8.9</span>%</li>
                        <li>연 최대<span>19.9</span>%</li>
                      </ul>
                    </a>
                  </li>
                </ul>
                <ul class="slide-content slide02">
                  <li>
                    <a href="#">
                      <p>담보대출</p>
                      <p>스탁론</p>
                      <ul class="percentage">
                        <li>연 최저<span>2.7</span>%</li>
                        <li>연 최대<span>6.9</span>%</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>담보대출</p>
                      <p>예적금담보대출</p>
                      <ul class="percentage">
                        <li style="line-height: 28px">담보 예·적금의 금리 +</li>
                        <li>연<span>1.5</span>%</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>담보대출</p>
                      <p>햇살론</p>
                      <ul class="percentage">
                        <li>연 최저<span>6.00</span>%</li>
                        <li>연 최대<span>9.00</span>%</li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>담보대출</p>
                      <p>스탁론</p>
                      <ul class="percentage">
                        <li>연 최저<span>9.57</span>%</li>
                        <li>연 최대<span>19.90</span>%</li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <img v-bind:src="imageUrl" @click="autoPlay = !autoPlay" />
        <div
          class="page-dot"
          :class="curPage === 'first' ? 'active' : ''"
          @click="[(curPage = 'first'), (curIndex = 0)]"
        ></div>
        <div
          class="page-dot"
          :class="curPage === 'second' ? 'active' : ''"
          @click="[(curPage = 'second'), (curIndex = 1)]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curIndex: 0,
      transformAmount: ["first", "second"],
      curPage: "first",
      autoPlay: true,
    };
  },
  computed: {
    imageUrl() {
      const tmp = this.autoPlay
        ? require("../assets/pause.png").default
        : require("../assets/play.png").default;
      return tmp;
    },
  },
  mounted() {
    setInterval(() => {
      if (this.autoPlay) this.changeSection();
    }, 4000);
  },
  methods: {
    changeSection() {
      if (this.curIndex === 1) {
        this.curIndex = 0;
      } else {
        this.curIndex = 1;
      }
      this.curPage = this.transformAmount[this.curIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.section-two {
  font-family: "Noto Sans KR", sans-serif;
  background-image: url("https://www.woorisavingsbank.com/images/main/section01_bg02.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    position: relative;
    width: 1080px;
    margin-top: 60px;
    .section-top {
      position: relative;
      width: 100%;
      height: 359px;
      .image-box {
        position: absolute;
        top: 50px;
        left: -17px;
      }
      .title-box {
        float: right;
        width: 600px;
        margin-top: 40px;
        .title {
          margin-top: 40px;
          .title-upper {
            font-size: 45px;
            padding-bottom: 18px;
            font-weight: 600;
          }
          .title-lower-box {
            position: relative;
            .title-lower {
              font-size: 45px;
              padding-bottom: 18px;
              margin-top: 18px;
              font-weight: 600;
              display: inline;
              span {
                color: #0067ac;
              }
            }
            a {
              position: absolute;
              top: 16px;
              margin-left: 27px;
              text-decoration: none;
              color: black;
              img {
                top: -6px;
                margin-left: 5px;
                position: absolute;
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .btns {
          margin-top: 80px;
          > div {
            float: left;
            width: calc(38% - 15px);
            margin-left: 15px;
            + div {
              margin-left: 15px;
              a {
                img {
                  position: absolute;
                  left: 17px;
                  top: 19px;
                }
              }
            }
            a {
              background-color: #fff;
              border-radius: 5px;
              display: block;
              padding: 17px 17px 17px 57px;
              position: relative;
              text-decoration: none;
              color: #000;
              + a {
                margin-top: 17px;
              }
              img {
                display: inline-block;
                vertical-align: middle;
                margin-right: 10px;
                height: 25px;
              }
              .link-text {
                font-size: 16px;
                vertical-align: middle;
              }
            }
            &:first-child {
              width: 24%;
              margin-left: 0;
              a {
                padding: 27px 0;
                text-align: center;
              }
              img {
                margin: 0 auto 15px;
                height: auto;
              }
            }
          }
        }
      }
    }
    .section-bottom {
      width: 100%;
      //지우기
      height: 300px;
      margin-top: 78px;
      overflow-x: hidden;
      .slide-wrap {
        position: relative;
        width: calc(1080px * 2);
        margin: auto;
        .slide-box {
          width: 100%;
          margin: auto;
          transition: 300ms;
          .slide-list {
            transition: 0.5s;
            &.second {
              transform: translateX(-1080px);
            }
            .slide-content {
              display: flex;
              justify-content: space-between;
              float: left;
              width: 1080px;
              height: 300px;
              > li {
                width: calc(1080px / 4 - 24px);
                border-radius: 5px;
                height: 241px;
                background-color: white;
                > a {
                  padding: 30px;
                  box-sizing: border-box;
                  display: block;
                  text-decoration: none;
                  p {
                    color: #000;
                    font-size: 14px;
                    padding-bottom: 5px;
                    font-weight: bold;
                    + p {
                      font-size: 22px;
                      line-height: 1.2;
                      margin-top: 0;
                      height: 52px;
                    }
                  }
                  .percentage {
                    margin-top: 16px;
                    > li {
                      margin-bottom: 14px;
                      font-size: 15px;
                      text-align: right;
                      font-weight: bold;
                      text-decoration: none;
                      color: #eb4214;
                      span {
                        font-size: 28px;
                      }
                      + li {
                        color: #0067ac;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .pagination {
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    img {
      margin: 0 5px 0 35px;
      width: 12px;
      height: 12px;
      &:hover {
        cursor: pointer;
      }
    }
    .page-dot {
      margin: 3px;
      width: 8px;
      height: 8px;
      background-color: gray;
      border: 1 soild black;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background-color: #0067ac;
      }
    }
  }
}
</style>