<template>
  <div class="sponsor">
    <div>
      <p>제휴상품</p>
      <ul>
        <li><a href="#">우리금융저축은행 카드의정석 POINT</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sponsor {
  display: flex;
  padding: 30px;
  letter-spacing: -1px;
  word-spacing: -1px;
  > div {
    min-width: 210px;
  }
  p {
    font-weight: 600;
    font-size: 16px;
    color: #0067ac;
    margin-bottom: 30px;
  }
  ul {
    li {
      a {
        color: black;
        font-size: 13px;
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