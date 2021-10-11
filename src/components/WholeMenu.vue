<template>
  <div class="whole-menu">
    <div class="menu">
      <ul>
        <li v-for="menu in menus" :key="menu">
          {{ menu }}
        </li>
      </ul>
    </div>
    <div class="detail-menu">asdf</div>
    <div class="close">전체 메뉴 닫기</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickMenu: true,
      menus: [
        "인터넷뱅킹",
        "상품(예금/대출)",
        "제휴상품",
        "저축은행소개",
        "고객센터",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.whole-menu {
  .menu {
    height: 60px;
    background-color: #0067ac;
    line-height: 60px;
    ul {
      display: flex;
      font-size: 18px;
      font-weight: bold;
      padding: 0 40px;
      li {
        color: white;
        padding: 0 30px;
        margin: 0 5px;
        &:hover {
          color: #0067ac;
          background-color: white;
          border-top: 1px solid gray;
        }
      }
    }
  }
  .detail-menu {
    height: 680px;
    background-color: bisque;
  }
  .close {
    height: 60px;
    background-color: orange;
  }
}
</style>