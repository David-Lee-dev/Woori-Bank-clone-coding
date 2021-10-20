<template>
  <div class="footer">
    <div class="footer-top">
      <div class="inner">
        <div class="top-left">
          <ul>
            <li>
              <p>우리금융저축은행 대표전화</p>
              <p>1599-0038</p>
            </li>
            <li>
              <p>우리금융저축은행 텔레뱅킹</p>
              <p>1544-3636</p>
            </li>
            <li>
              <p>금융사기신고 야간콜센트</p>
              <p>(02)-3978-600, 800</p>
            </li>
          </ul>
        </div>
        <div class="top-right">
          <ul class="top-right-t">
            <li class="have-bar">
              <a href="#">개인정보처리방침</a>
            </li>
            <li class="have-bar">
              <a href="#">개인정보처리위탁현황</a>
            </li>
            <li>
              <a href="#">신용정보제공 활용에 대한 고객권리</a>
            </li>
            <li>
              <a href="#">성희롱·성폭력·괴롭힘신고센터</a>
            </li>
          </ul>
          <ul class="top-right-b">
            <li class="have-bar">
              <a href="#">ARS안내</a>
            </li>
            <li class="have-bar">
              <a href="#">휴대폰 인증서비스</a>
            </li>
            <li class="have-bar">
              <a href="#">보호금융상품등록부</a>
            </li>
            <li><a href="#">금융사기관련 유의사항 안내</a></li>
            <li class="have-bar">
              <a href="#">부당, 과장 광고주의 안내문</a>
            </li>
            <li class="have-bar">
              <a href="#">소멸시효 완성채권 추심 관련 유의사항</a>
            </li>
            <li><a href="#">불법채권추심 대응요령</a></li>
            <li><a href="#">채권추심 업무절차안내</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="inner">
        <div class="bottom-left">
          <a href="#" class="logo">
            <img
              src="https://www.woorisavingsbank.com/ui_common/images/footer_logo.png"
              alt=""
            />
          </a>
          <p>
            대표이사 신명혁, 충청북도 청주시 상당구 남사로 135, 사업자번호
            301-81-006
          </p>
          <p>COPYRIGHTS WOORI SAVINGS BANK. ALL RIGHTS RESERVED.</p>
        </div>
        <div class="bottom-right">
          <select title="패밀리 사이트">
            <option value selected>Family Site</option>
            <option v-for="option in options" :key="option">
              {{ option }}
            </option>
          </select>
          <ul class="SNS">
            <li v-for="img_url in img_urls" :key="img_url">
              <a href="#">
                <img :src="img_url" alt="" />
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
        "https://www.woorisavingsbank.com/ui_common/images/footer_icon_kakao.png",
        "https://www.woorisavingsbank.com/ui_common/images/footer_icon_ins.png",
        "https://www.woorisavingsbank.com/ui_common/images/footer_icon_face.png",
        "https://www.woorisavingsbank.com/ui_common/images/footer_icon_web.png",
      ],
      options: [
        "우리금융저축은행 인터넷 뱅킹",
        "우리금융저축은행 온라인대출센터",
        "우리금융저축은행 스탁론",
        "기업고객 서류제출",
        "우리은행",
        "우리카드",
        "우리금융캐피탈",
        "우리종합금융",
        "우리자산신탁",
        "우리자산운용",
        "우리신용정보",
        "우리펀드서비스",
        "우리PE",
        "우리글로",
        "우리FIS",
        "우리금융경영연구소",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 580px;
  background-color: #303134;
  font-family: "Noto Sans KR", sans-serif;
  line-height: 24px;
  .footer-top {
    padding-top: 70px;
    .top-left {
      float: left;
      width: 43%;
      height: 100px;
      ul {
        li {
          font-size: 15px;
          color: #fff;
          p {
            float: left;
            width: 162px;
            padding-bottom: 10px;
            + p {
              padding-left: 30px;
              padding-bottom: 0;
            }
          }
          &::after {
            content: "";
            display: block;
            clear: both;
          }
        }
      }
    }
    .top-right {
      float: left;
      width: 57%;
      padding-top: 5px;
      line-height: 24px;
      .top-right-t,
      .top-right-b {
        li {
          float: left;
          padding-bottom: 10px;
          a {
            font-size: 15px;
            color: #fff;
            text-decoration: none;
          }
        }
        .have-bar::after {
          content: "";
          display: inline-block;
          width: 1px;
          height: 12px;
          background-color: #838385;
          vertical-align: middle;
          margin: 0 8px;
        }
        &::after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .top-right-b {
        margin-top: 30px;
        li {
          a {
            font-size: 15px;
            color: #b3b4b6;
            text-decoration: none;
          }
        }
      }
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 56px;
    background-color: #303134;
    .inner {
      display: flex;
      justify-content: space-between;
      .bottom-left {
        padding-top: 48px;
        a {
          margin-bottom: 25px;
          display: block;
        }
        p {
          font-size: 14px;
          color: #b3b4b6;
          padding-bottom: 10px;
        }
      }
      .bottom-right {
        margin-top: 55px;
        margin-bottom: 87px;
        select {
          width: 250px;
          height: 45px;
          line-height: 45px;
          font-size: 14px;
          color: #b3b4b6;
          padding: 0 26px;
          box-sizing: border-box;
          background: #1a1b1c
            url("https://www.woorisavingsbank.com/ui_common/images/btn_select_new01.png");
          background-position: 210px 50%;
          background-repeat: no-repeat;
          cursor: pointer;
          appearance: none;
        }
        .SNS {
          margin-top: 19px;
          list-style-type: none;
          > li {
            float: left;
            margin-left: 36px;
            > a {
              display: block;
              text-align: center;
              height: 38px;
              line-height: 36px;
            }
            &:first-child {
              margin-left: 0;
            }
            &:last-child {
              img {
                width: 50px;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
  .inner {
    width: 1080px;
    margin: 0 auto;
    letter-spacing: -1px;
  }
}
</style>