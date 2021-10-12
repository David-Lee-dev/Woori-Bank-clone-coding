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
      <div class="section-bottom"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-one {
  background-image: url("https://www.woorisavingsbank.com/images/main/section01_bg01.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    margin-top: 30px;
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
            font-family: "IBM Plex Sans KR", sans-serif;
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
          font-family: "Noto Sans KR", sans-serif;

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
      background-color: darkmagenta;
      height: 300px;
    }
  }
}
</style>