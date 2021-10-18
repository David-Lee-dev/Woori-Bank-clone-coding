<template>
  <div class="section-five">
    <div class="inner">
      <div class="section-top">
        <div class="title-box">
          <span class="title-left">
            <span>우리</span>
            고객,
          </span>
          <span class="title-right">
            <span>우리</span>
            가족
          </span>
          <a href="#">고객센터<img src="../assets/next.png" alt="" /></a>
        </div>
        <div class="store-info">
          <p>우리금융저축은행 영업점 안내</p>
          <ul class="store-list">
            <li v-for="data in img_urls" :key="data.name">
              <a href="#">
                <div class="store-img">
                  <img :src="data.url" alt="" />
                </div>
                <p>{{ data.name }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section-bottom">
        <div class="center">
          <ul>
            <li>
              <span>고객센터</span>
              (평일 09:00 ~ 18:00)
            </li>
            <li class="blue">1599-0038</li>
            <li>
              <span>예금상품 상담 1599-0776</span>
              <span>추가대출 상담 1599-0006</span>
            </li>
          </ul>
          <div>
            <a href="#">
              <span>민원접수</span>
            </a>
            <a href="#">
              <span>소비자포털</span>
            </a>
          </div>
        </div>
        <div class="notice">
          <p class="title">공지사항</p>
          <ul class="list">
            <li v-for="notice in notices" :key="notice.date">
              <a href="#">
                <span class="content">
                  {{ notice.content }}
                </span>
                <span class="date">
                  {{ notice.date }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_urls: [
        {
          url: "https://www.woorisavingsbank.com/images/main/section05_info01.jpg",
          name: "영업부",
        },
        {
          url: "https://www.woorisavingsbank.com/images/main/section05_info06.png",
          name: "강남금융센터",
        },
        {
          url: "https://www.woorisavingsbank.com/images/main/section05_info02.jpg",
          name: "삼성지점",
        },
        {
          url: "https://www.woorisavingsbank.com/images/main/section05_info04.jpg",
          name: "수유지점",
        },
      ],
      notices: [
        {
          content: "개천절 대체공휴일(21.10.04) 전지점 휴무 안내",
          date: "2021-10-01",
        },
        {
          content: "수신금리 변경의 건(2021.09.29. 시행)",
          date: "2021-09-29",
        },
        {
          content: "수신금리 변경의 건(2021.09.17. 시행)",
          date: "2021-09-15",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section-five {
  font-family: "Noto Sans KR", sans-serif;
  height: 941px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-image: url("https://www.woorisavingsbank.com/images/main/section01_bg05.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .inner {
    margin-top: 130px;
    width: 1080px;
    height: 700px;
    .section-top {
      .title-box {
        position: relative;
        margin-top: 20px;
        > span {
          font-size: 45px;
          padding-bottom: 18px;
          font-family: "Woori Font", "Noto Sans KR", sans-serif;
          font-weight: bold;
          > span {
            color: #0067ac;
          }
        }
        a {
          position: absolute;
          top: 16px;
          left: 380px;
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
      .store-info {
        margin-top: 45px;
        text-align: center;
        > p {
          font-size: 25px;
          padding-bottom: 44px;
        }
        .store-list {
          position: relative;
          display: block;
          box-sizing: border-box;
          display: flex;
          > li {
            margin-left: 55px;
            &:first-child {
              margin-left: 0;
            }
            a {
              text-decoration: none;
              color: #000;
              background-color: transparent;
              .store-img {
                width: 171px;
                height: 171px;
                border-radius: 50%;
                overflow: hidden;
                img {
                }
              }
              > p {
                font-size: 19px;
                margin-top: 26px;
              }
            }
          }
        }
      }
    }
    .section-bottom {
      display: flex;
      margin-top: 50px;
      padding-top: 50px;
      border-top: 1px solid #ddd;
      width: 1080px;
      .center {
        display: flex;
        justify-content: space-between;
        width: 616px;
        ul {
          width: 406px;
          padding: 30px;
          box-sizing: border-box;
          border-radius: 6px;
          background-color: #f1f1f1;
          li {
            &:first-child {
              padding-bottom: 12px;
              span {
                font-size: 22px;
                font-weight: bold;
              }
            }
            &:nth-child(2) {
              padding-bottom: 23px;
              font-size: 30px;
              color: #0067ac;
              font-weight: bold;
            }
            &:last-child {
              letter-spacing: -1px;
              font-size: 15px;
              span:last-child::before {
                content: "";
                display: inline-block;
                width: 1px;
                height: 15px;
                background-color: #929292;
                margin: 0 8px;
                vertical-align: middle;
              }
            }
          }
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          a {
            display: block;
            border-radius: 6px;
            background-color: #f1f1f1;
            width: 194px;
            margin: 0;
            height: 75px;
            text-align: center;
            text-decoration: none;
            line-height: 75px;
            span {
              line-height: 41px;
              font-size: 15px;
              letter-spacing: -0.5px;
              color: #000;
            }
          }
        }
      }
      .notice {
        padding-left: 50px;
        p {
          font-size: 22px;
          font-weight: bold;
        }
        .list {
          margin-top: 10px;
          li {
            height: 25px;
            padding-top: 20px;
            a {
              text-decoration: none;
              color: #000;
              .content {
                font-size: 16px;
                float: left;
                width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: keep-all;
                white-space: nowrap;
                &::before {
                  content: "";
                  width: 5px;
                  height: 5px;
                  border-radius: 50%;
                  background-color: #000;
                  float: left;
                  margin-right: 5px;
                  margin-top: 7px;
                }
              }
              .date {
                font-size: 14px;
                color: #a0a0a0;
                float: right;
              }
            }
          }
        }
      }
    }
  }
}
</style>