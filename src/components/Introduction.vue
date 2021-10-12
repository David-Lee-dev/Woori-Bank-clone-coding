<template>
  <div class="bank-introduction">
    <div class="bank-guide">
      <p>저축은행안내</p>
      <ul>
        <li><a href="#">CEO 인사말</a></li>
        <li><a href="#">비전· 가치체계</a></li>
        <li><a href="#">행복한 금융</a></li>
        <li><a href="#">연혁</a></li>
        <li><a href="#">조직도</a></li>
      </ul>
    </div>
    <div class="management-notice">
      <p>경영공시</p>
      <ul>
        <li><a href="#">요약공시</a></li>
        <li><a href="#">결산공시</a></li>
        <li><a href="#">가결산공시</a></li>
        <li><a href="#">수시공시</a></li>
        <li><a href="#">정보기술부문공시</a></li>
        <li><a href="#">재무정보</a></li>
        <li><a href="#">모집인 수수료공시</a></li>
      </ul>
    </div>
    <div class="esg">
      <p>ESG경영</p>
      <ul>
        <li><a href="#">ESG 원칙/정책</a></li>
        <li><a href="#">윤리강령</a></li>
        <li><a href="#">행동강령</a></li>
        <li><a href="#">사회책임금융</a></li>
        <li><a href="#">사회공헌활동</a></li>
      </ul>
    </div>
    <div class="employment">
      <p>인재채용</p>
      <ul>
        <li><a href="#">채용정보</a></li>
        <li><a href="#">복리후생</a></li>
        <li><a href="#">대출모집법인 모집 공고</a></li>
      </ul>
    </div>
    <div class="advertisement">
      <p>홍보센터</p>
      <ul>
        <li><a href="#">우리 기업문화활동</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bank-introduction {
  letter-spacing: -1px;
  word-spacing: -1px;
  display: flex;
  padding: 30px;
  > div {
    min-width: 180px;
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