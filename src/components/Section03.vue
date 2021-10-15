<template>
  <div class="section-three">
    <div class="inner">
      <div class="section-top">
        <div class="title-box">
          <p class="title-upper"><span>우리</span>함께 미리 준비하는</p>
          <div class="title-lower-box">
            <p class="title-lower">더 여유로운 삶</p>
            <a href="#">제휴상품<img src="../assets/next.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div class="section-bottom">
        <div class="section-bottom-left">
          <img
            src="https://www.woorisavingsbank.com/images/main/section03_bottom01.png"
            alt=""
          />
        </div>
        <div class="section-bottom-right">
          <div class="card-text">
            <p>우리금융저축은행<br /><span>카드의정석 POINT</span></p>
            <ul class="won">
              <li>해외겸용 (MasterCard.VISA): 12,000원</li>
              <li>국내전영 (BC): 10,000원</li>
            </ul>
            <ul class="data">
              <li>
                이동통신, 대중교통, 전기차 충전 5% 적립<br />
                커피, 영화 3% 적립
              </li>
              <li>백화점, 할인점, 온라인 쇼핑, 주유, 해외 1% 적립</li>
              <li>상기 가맹점 외 국내 적립 대상 가맹점 0.8% 적립</li>
              <li>주요 간편결제 모아포인트 3% 추가적립</li>
            </ul>
          </div>
          <img
            src="https://www.woorisavingsbank.com/images/main/section03_right01.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section-three {
  font-family: "Noto Sans KR", sans-serif;
  background-image: url("https://www.woorisavingsbank.com/images/main/section01_bg03.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    margin-top: 130px;
    width: 1080px;
    height: 700px;
    .section-top {
      width: 100%;
      .title-box {
        width: 626px;
        margin-top: 20px;
        .title-upper {
          font-size: 45px;
          padding-bottom: 18px;
          font-weight: bold;
          span {
            color: #0067ac;
          }
        }
        .title-lower-box {
          position: relative;
          .title-lower {
            font-size: 45px;
            padding-bottom: 18px;
            font-weight: bold;
          }
          a {
            position: absolute;
            top: 16px;
            left: 270px;
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
    }
    .section-bottom {
      display: flex;
      width: 100%;
      margin: 0 auto;
      margin-top: 114px;
      .section-bottom-left {
        position: relative;
        width: 470px;
      }
      .section-bottom-right {
        display: flex;
        letter-spacing: -1px;
        width: 610px;
        .card-text {
          > p {
            font-size: 25px;
            padding-bottom: 26px;
            span {
              font-weight: bold;
            }
          }
          .won {
            li {
              font-size: 17px;
              padding-bottom: 16px;
            }
          }
          .data {
            margin-top: 62px;

            li {
              text-indent: -10px;
              padding-left: 16px;
              line-height: 1.4;
              vertical-align: middle;
              padding-bottom: 14px;
              font-weight: 500;
              font-size: 15px;

              &::before {
                content: "";
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: #000;
                margin-right: 5px;
                vertical-align: middle;
              }
            }
          }
        }
        img {
          margin-left: 40px;
        }
      }
    }
  }
}
</style>