<template>
  <div class="productions">
    <div class="deposit">
      <p>예금상품</p>
      <ul>
        <li><a href="#">더 마니 드림 저축예금</a></li>
        <li><a href="#">첫번째 저축예금</a></li>
        <li><a href="#">우리기업 자유예금</a></li>
        <li><a href="#">국민연금 안심통장</a></li>
        <li><a href="#">보통예금</a></li>
        <li><a href="#">플러스 정기예금</a></li>
        <li><a href="#">정기예금</a></li>
        <li><a href="#">회전정기예금</a></li>
        <li><a href="#">생명나눔 정기예금</a></li>
        <li><a href="#">더 마니 드림 정기예금</a></li>
        <li><a href="#">퇴직연금 정기예금</a></li>
        <li><a href="#">ISA정기예금</a></li>
        <li><a href="#">삼삼오오 함께만든 적금</a></li>
        <li><a href="#">정기적금</a></li>
        <li><a href="#">플러스 정기적금</a></li>
        <li><a href="#">생명나눔 정기적금</a></li>
        <li><a href="#">꾸러기 정기적금</a></li>
      </ul>
    </div>
    <div class="loan">
      <p>대출상품</p>
      <ul>
        <li><a href="#">사잇돌 연계신용</a></li>
        <li><a href="#">비타WON</a></li>
        <li><a href="#">우리금융캐피탈 연계신용</a></li>
        <li><a href="#">종합통장대출(예적금)</a></li>
        <li><a href="#">사업자 주택담보대출</a></li>
        <li><a href="#">차량후순위대출</a></li>
        <li><a href="#">스탁론</a></li>
        <li><a href="#">예적금담보대출</a></li>
        <li><a href="#">자산보유자론</a></li>
        <li><a href="#">햇살론</a></li>
        <li><a href="#">사잇돌2대출</a></li>
      </ul>
    </div>
    <div class="deposit-guide">
      <p>예금가이드</p>
      <ul>
        <li><a href="#">예금자보호제도</a></li>
        <li><a href="#">보호금융상품등록부</a></li>
      </ul>
    </div>
    <div class="personal-loan-elec-task">
      <p>개인신용대출 전자업무</p>
      <ul>
        <li><a href="#">신용정보제공동의</a></li>
        <li><a href="#">온라인서류제출</a></li>
        <li><a href="#">대출계약서전자서명</a></li>
        <li><a href="#">대출상담사조회</a></li>
        <li><a href="#">금리인하요구권</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productions {
  display: flex;
  padding: 30px;
  letter-spacing: -1px;
  word-spacing: -1px;
  > div {
    min-width: 210px;
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