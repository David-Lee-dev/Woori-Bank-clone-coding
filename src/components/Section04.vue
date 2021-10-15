<template>
  <div class="section-three">
    <div class="inner">
      <div class="section-top">
        <div class="image-box">
          <img
            src="https://www.woorisavingsbank.com/images/main/section04_bg01.png"
            alt=""
          />
        </div>
        <div class="title-box">
          <div class="title">
            <p>오늘의 혁신으로 내일의</p>
            <div>
              <p>
                가치를 만드는
                <span>우리금융저축은행</span>
              </p>
            </div>
            <a href="#">은행소개<img src="../assets/next.png" alt="" /></a>
          </div>
          <div class="content">
            <p>고객의 행복을 키워나가는</p>
            <p>'고객 마음속 첫 번째 저축은행'이 되겠습니다.</p>
            <a href="#" class="btn">
              <span>CEO 인사말 보러가기</span>
            </a>
          </div>
        </div>
      </div>
      <div class="section-bottom">
        <ul>
          <li v-for="img_name in img_names" :key="img_name[1]">
            <a href="#">
              <p
                class="img-box"
                :style="{ backgroundImage: 'url(' + img_name[0] + ')' }"
              ></p>
              <p class="name">{{ img_name[1] }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_names: [
        [
          "https://www.woorisavingsbank.com/images/main/section04_img01.png",
          "ESG원칙/정책",
        ],
        [
          "https://www.woorisavingsbank.com/images/main/section04_img02.png",
          "비전/가치체계",
        ],
        [
          "https://www.woorisavingsbank.com/images/main/section04_img03.png",
          "사회책임금융",
        ],
        [
          "https://www.woorisavingsbank.com/images/main/section04_img04.png",
          "요약공시",
        ],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-three {
  font-family: "Noto Sans KR", sans-serif;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  .inner {
    margin-top: 130px;
    width: 1080px;
    height: 700px;
    .section-top {
      //지워
      width: 100%;
      height: 384px;
      position: relative;
      .image-box {
        position: absolute;
        top: -50px;
        left: -70px;
      }
      .title-box {
        width: 640px;
        float: right;
        margin-top: 42px;
        margin-right: -50px;
        .title {
          position: relative;
          > p {
            font-size: 45px;
            padding-bottom: 18px;
            font-weight: 600;
          }
          > div {
            font-weight: 600;
            > p {
              float: left;
              font-size: 45px;
              padding-bottom: 18px;
              span {
                color: #0067ac;
              }
            }
          }
          > a {
            position: absolute;
            top: 130px;
            left: -25px;
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
        .content {
          margin-top: 135px;
          p {
            font-size: 22px;
            padding-bottom: 12px;
            + p {
              padding-bottom: 0;
            }
          }
          .btn {
            width: auto;
            height: 40px;
            border-radius: 20px;
            line-height: 40px;
            margin-top: 36px;
            display: inline-block;
            padding: 0 24px;
            background-color: #000;
            text-align: center;
            text-decoration: none;
            span {
              font-size: 17px;
              color: #fff;
              line-height: 40px;
              letter-spacing: -0.5px;
            }
          }
        }
      }
    }
    .section-bottom {
      margin-top: 68px;
      > ul {
        > li {
          float: left;
          width: 25%;
          text-align: center;
          position: relative;
          > a {
            text-decoration: none;
            color: #000;
            .img-box {
              display: block;
              height: 163px;
              width: 100%;
              border: 0;
              margin: 0 auto;
            }
            .name {
              padding-top: 22px;
              font-size: 22px;
            }
          }
          &::after {
            content: "";
            display: block;
            width: 1px;
            height: 131px;
            background-color: #d8d8d8;
            top: 50%;
            right: 0;
            position: absolute;
            transform: translateY(-50%);
          }
          &:last-child::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>