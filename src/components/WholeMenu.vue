<template>
  <div class="whole-menu">
    <div class="menu">
      <ul>
        <li
          v-for="menu in menus"
          :key="menu"
          @mouseover="mouseOn(menu)"
          :class="{ 'mouse-on': menu === hover_menu }"
        >
          {{ menu }}
        </li>
      </ul>
    </div>
    <div class="detail-menu">
      <Production v-if="hover_menu === '상품공시(예금/대출)'" />
      <Sponsor v-if="hover_menu === '제휴상품'" />
      <Introduction v-if="hover_menu === '저축은행소개'" />
      <CustomerServiceCenter v-if="hover_menu === '고객센터'" />
    </div>
    <div class="close">
      <div class="close-btn" @click="clickClose">전체메뉴 닫기</div>
    </div>
  </div>
</template>

<script>
import Production from "~/components/Production";
import Sponsor from "~/components/Sponsor";
import Introduction from "~/components/Introduction";
import CustomerServiceCenter from "~/components/CustomerServiceCenter";

export default {
  components: {
    Production,
    Introduction,
    Sponsor,
    CustomerServiceCenter,
  },
  data() {
    return {
      hover_menu: "",
      menus: [
        "인터넷뱅킹",
        "상품공시(예금/대출)",
        "제휴상품",
        "저축은행소개",
        "고객센터",
      ],
    };
  },
  methods: {
    mouseOn(key) {
      this.hover_menu = key;
    },
    clickClose() {
      this.$emit("clickClose");
    },
  },
};
</script>

<style lang="scss" scoped>
.whole-menu {
  font-family: "Noto Sans KR", sans-serif;
  .menu {
    height: 60px;
    background-color: #0067ac;
    line-height: 60px;
    ul {
      display: flex;
      font-size: 18px;
      font-weight: 600;
      padding: 0 30px;
      li {
        color: white;
        padding: 0 30px;
        margin: 0 5px;
        transition: 0.2s;
        &.mouse-on {
          color: #0067ac;
          background-color: white;
          border-top: 0.5px solid gray;
        }
      }
    }
  }
  .detail-menu {
    height: 680px;
    background-color: white;
  }
  .close {
    height: 58px;
    background-color: #f2f2f2;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    .close-btn {
      float: right;
      padding-right: 75px;
      line-height: 58px;
      color: #002157;
      font-size: 17px;
      font-weight: 600;
      background-image: url("https://www.woorisavingsbank.com/images/common/menuClose.jpg");
      background-repeat: no-repeat;
      background-position-x: right;
    }
  }
}
</style>