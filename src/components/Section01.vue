<template>
  <div class="section-one">
    <div class="inner">
      <div class="section-top">
        <div class="section-top-left">
          <div class="title-box">
            <p class="title-upper">같이 고민하고 설계하는</p>
            <div class="title-lower-box">
              <p class="title-lower"><span>우리</span>의 꿈과 미래</p>
              <a href="#">예금상품<img src="../assets/next.png" alt="" /></a>
            </div>
          </div>
          <div class="info-box">
            <p>12개월 기준 금리 안내</p>
            <div class="info-contents">
              <ul class="info-contents-box">
                <li class="info-contents-box-icon">
                  <img
                    src="https://www.woorisavingsbank.com/ui_common/images/icon_coin01.png"
                    alt=""
                  />
                </li>
                <li class="info-contents-box-text">
                  정기예금<span>2.20%</span>
                </li>
                <li class="info-contents-box-calc">
                  <a href="#" class="btn">간편 예금계산기</a>
                </li>
                <li class="info-contents-box-app">
                  <a href="#">
                    <img
                      src="https://www.woorisavingsbank.com/ui_common/images/icon_googleplay01.png"
                      alt=""
                    />
                    <span>Google Play</span>
                  </a>
                </li>
              </ul>
              <ul class="info-contents-box">
                <li class="info-contents-box-icon">
                  <img
                    src="https://www.woorisavingsbank.com/ui_common/images/icon_pc01.png"
                    alt=""
                  />
                </li>
                <li class="info-contents-box-text">
                  정기적금<span>2.10%</span>
                </li>
                <li class="info-contents-box-calc">
                  <a href="#" class="btn">간편 적금계산기</a>
                </li>
                <li class="info-contents-box-app">
                  <a href="#">
                    <img
                      src="https://www.woorisavingsbank.com/ui_common/images/icon_appstore01.png"
                      alt=""
                    />
                    <span>App Store</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section-top-right">
          <img
            src="https://www.woorisavingsbank.com/images/main/section01_main1.png"
            alt=""
          />
        </div>
      </div>
      <div class="section-bottom">
        <div id="container">
          <div class="slide-wrap">
            <div class="slide-box">
              <div class="slide-list clearfix" :class="curPage">
                <div class="slide-content slide01">
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">입출금자유예금</p>
                        <p class="big">더 마니 드림<br />저축예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>변동</li>
                        </ul>
                        <ul class="percentage">
                          <li>0.60<span>%</span></li>
                          <li>~</li>
                          <li>1.00<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">입출금자유예금</p>
                        <p class="big">첫번째 저축예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>변동</li>
                        </ul>
                        <ul class="percentage">
                          <li>1.00<span>%</span></li>
                          <li>~</li>
                          <li>1.20<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">입출금자유예금</p>
                        <p class="big">우리 기업 자유예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>변동</li>
                        </ul>
                        <ul class="percentage">
                          <li>0.75<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">입출금자유예금</p>
                        <p class="big">국민연금 안심통장</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>변동</li>
                        </ul>
                        <ul class="percentage">
                          <li>0.60<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="slide-content slide02">
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.20<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">회전정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.20<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">플러스 정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.20<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">더 마니 드림 정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>36개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>1.00<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="slide-content slide03">
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.10<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">회전정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.90<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">플러스 정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.10<span>%</span></li>
                          <li>~</li>
                          <li>4.10<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <p class="small">목돈운용상품</p>
                        <p class="big">더 마니 드림 정기예금</p>
                        <ul class="rectangle">
                          <li>연</li>
                          <li>세전이율</li>
                          <li>12개월 기준</li>
                        </ul>
                        <ul class="percentage">
                          <li>2.60<span>%</span></li>
                          <li>~</li>
                          <li>3.60<span>%</span></li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div>
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
        <div
          class="page-dot"
          :class="curPage === 'third' ? 'active' : ''"
          @click="[(curPage = 'third'), (curIndex = 2)]"
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
      transformAmount: ["first", "second", "third"],
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
    console.log(this.imageUrl);

    setInterval(() => {
      if (this.autoPlay) this.changeSection();
    }, 4000);
  },
  methods: {
    changeSection() {
      if (this.curIndex < 2) {
        this.curIndex += 1;
      } else {
        this.curIndex = 0;
      }
      this.curPage = this.transformAmount[this.curIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.section-one {
  font-family: "Noto Sans KR", sans-serif;
  background-image: url("https://www.woorisavingsbank.com/images/main/section01_bg01.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    position: relative;
    margin-top: 60px;
    height: 747px;
    width: 1080px;
    .section-top {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: 374px;
      .section-top-left {
        font-family: "IBM Plex Sans KR", sans-serif;
        width: 540px;
        .title-box {
          margin-top: 40px;
          height: 102px;
          .title-upper {
            font-size: 45px;
            padding-bottom: 18px;
            font-weight: 500;
          }
          .title-lower-box {
            position: relative;
            .title-lower {
              font-size: 45px;
              padding-bottom: 18px;
              margin-top: 18px;
              font-weight: 500;
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
        .info-box {
          margin-top: 56px;
          height: 164px;
          p {
            letter-spacing: -1px;
            font-size: 19px;
            font-weight: bold;
          }
          .info-contents {
            margin-top: 27px;
            .info-contents-box {
              display: flex;
              margin-bottom: 12px;
              li {
                margin-left: 17px;

                &:first-child {
                  margin-left: 0;
                }
              }
              .info-contents-box-icon {
                width: 50px;
                height: 50px;
                background-color: white;
                border-radius: 50%;
                text-align: center;
                img {
                  display: block;
                  margin: 12px auto;
                }
              }
              .info-contents-box-text {
                font-size: 15px;
                font-weight: 500;
                padding-top: 13px;
                span {
                  margin-left: 3px;
                  letter-spacing: -1px;
                  font-size: 23px;
                  font-weight: 500;
                }
              }
              .info-contents-box-calc {
                width: 130px;
                height: 41px;
                background: #d2e8ff;
                border-radius: 3px;
                text-align: center;
                margin-top: 5px;
                &:hover {
                  background-color: #0067ac;
                  color: white;
                }
                .btn {
                  text-align: center;
                  text-decoration: none;
                  line-height: 41px;
                  font-size: 15px;
                  font-weight: 500;
                  letter-spacing: -0.5px;
                  color: inherit;
                }
              }
              .info-contents-box-app {
                width: 171px;
                height: 44px;
                line-height: 44px;
                background-color: #fff;
                border-radius: 22px;
                padding: 0 20px;
                box-sizing: border-box;
                margin-top: 4px;
                margin-left: 30px;
                a {
                  text-decoration: none;
                  img {
                    display: inline-block;
                    margin-top: 0px;
                    margin-right: 6px;
                    width: 29px;
                    vertical-align: middle;
                    border: 0;
                  }
                  span {
                    font-size: 15px;
                    letter-spacing: -1px;
                    color: black;
                    font-weight: bold;
                    line-height: 44px;
                  }
                }
              }
            }
          }
        }
      }
      .section-top-right {
        position: absolute;
        right: -30px;
        top: 50px;
        img {
          border: 0;
          vertical-align: middle;
        }
      }
    }
    .section-bottom {
      margin-top: 73px;
      height: 300px;
      overflow-x: hidden;
      transition: all 0.5s;
      .slide-wrap {
        position: relative;
        width: calc(1080px * 4);
        margin: auto;
        .slide-box {
          width: 100%;
          height: 300px;
          margin: auto;
          transition: 300ms;
          .slide-list {
            transition: 0.5s;
            &.second {
              transform: translateX(-1080px);
            }
            &.third {
              transform: translateX(calc(-1080px * 2));
            }
            .slide-content {
              display: flex;
              justify-content: space-between;
              float: left;
              width: 1080px;
              height: 300px;
              > ul {
                width: calc(1080px / 4 - 24px);
                justify-content: space-between;
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
                    .small {
                      color: #000;
                      font-size: 14px;
                      font-weight: bold;
                      padding-bottom: 5px;
                      z-index: 1;
                      position: relative;
                    }
                    .big {
                      font-size: 22px;
                      font-weight: bold;
                      line-height: 1.2;
                      color: #000;
                      margin-top: 0;
                      height: 52px;
                    }
                    .rectangle {
                      display: flex;
                      font-size: 14px;
                      margin-top: 25px;
                      line-height: 25px;
                      li {
                        margin-right: 3px;
                        padding: 2px 4px;
                        border-radius: 3px;
                        &:nth-child(1) {
                          border: 1px solid #6b6b6b;
                          color: #6b6b6b;
                        }
                        &:nth-child(2) {
                          border: 1px solid #3446f0;
                          color: #3446f0;
                        }
                        &:nth-child(3) {
                          border: 1px solid #2b9114;
                          color: #2b9114;
                        }
                      }
                    }
                    .percentage {
                      margin-top: 16px;
                      font-weight: bold;
                      li {
                        font-size: 28px;
                        color: #0067ac;
                        display: inline-block;
                        span {
                          font-size: 15px;
                        }
                        &:nth-child(2) {
                          font-size: 15px;
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
}
</style>