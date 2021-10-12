<template>
  <div class="customer-service-center">
    <div class="notices">
      <p>공지사항</p>
      <ul>
        <li><a href="#">공지사항</a></li>
      </ul>
    </div>
    <div class="customer-portal">
      <p>소비자포털</p>
      <ul>
        <li><a href="#">민원접수</a></li>
        <li><a href="#">금융소비자보호</a></li>
        <li><a href="#">민원처리결과 공시</a></li>
        <li><a href="#">전기통신금융사기 공시</a></li>
        <li><a href="#">불법채권추심 대응요령</a></li>
        <li><a href="#">채권추심 업무절차안내</a></li>
        <li><a href="#">채무조정제도 안내</a></li>
        <li><a href="#">금융사기 관련 유의사항 안내</a></li>
        <li><a href="#">고객정보 취급방침</a></li>
        <li><a href="#">개인정보처리 방침</a></li>
        <li><a href="#">휴대폰 인증서비스 이용약관</a></li>
        <li><a href="#">개인정보처리 위탁현황</a></li>
        <li><a href="#">신용정보제공 활용에 대한 고객권리</a></li>
        <li><a href="#">소멸시효 완성채권 추심 관련 유의사항</a></li>
        <li><a href="#">신용정보활용체제</a></li>
        <li><a href="#">ARS 안내</a></li>
        <li><a href="#">금리인하요구권안내문</a></li>
      </ul>
    </div>
    <div class="user-guide">
      <p>이용안내</p>
      <ul>
        <li><a href="#">영업점안내</a></li>
        <li><a href="#">금리안내</a></li>
        <li><a href="#">수수료안내</a></li>
        <li><a href="#">서식자료실</a></li>
        <li><a href="#">약관자료실</a></li>
        <li><a href="#">상품공시실</a></li>
      </ul>
    </div>
    <div class="service-guide">
      <p>서비스 안내</p>
      <ul>
        <li><a href="#">인터넷뱅킹</a></li>
        <li><a href="#">스마트폰뱅킹</a></li>
        <li><a href="#">텔레(ARS)뱅킹</a></li>
        <li><a href="#">비대면계좌개설서비스</a></li>
        <li><a href="#">그룹사 고객정보제공내역 조회</a></li>
      </ul>
    </div>
    <div class="useful-services">
      <p>유용한서비스</p>
      <ul>
        <li><a href="#">금융상품한눈에</a></li>
        <li><a href="#">실생활에 유용한 금융꿀팁</a></li>
      </ul>
    </div>
    <div class="FAQ">
      <p>자주하는질문(FAQ)</p>
      <ul>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customer-service-center {
  display: flex;
  padding: 30px 0 30px 30px;
  letter-spacing: -1px;
  word-spacing: -1px;
  > div {
    min-width: 160px;
    &:last-child {
      margin-right: 0;
    }
  }
  p {
    font-size: 16px;
    font-weight: 600;
    color: #0067ac;
    margin-bottom: 30px;
  }
  ul {
    li {
      a {
        color: black;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
      margin: 18px 0;
    }
  }
}
</style>