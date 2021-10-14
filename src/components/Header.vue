<template>
  <header>
    <div class="inner">
      <div class="logo">
        <a href="#">
          <img
            src="https://www.woorisavingsbank.com/images/main/logo.gif"
            alt=""
          />
        </a>
      </div>
      <div class="menu">
        <ul>
          <li v-for="menu in menus" :key="menu">
            <a href="#">{{ menu }}</a>
          </li>
          <li>
            <a @click="showWholeMenu" href="#">
              <img class="all-menu" src="../assets/menu.png" alt="MENU" />
            </a>
          </li>
        </ul>
      </div>
      <div class="whole-menu">
        <WholeMenu v-if="clickMenu" v-on:clickClose="showWholeMenu" />
      </div>
    </div>
  </header>
</template>

<script>
import WholeMenu from "~/components/WholeMenu";
export default {
  components: {
    WholeMenu,
  },
  data() {
    return {
      clickMenu: false,
      menus: [
        "인터넷뱅킹",
        "상품(예금/대출)",
        "제휴상품",
        "저축은행소개",
        "고객센터",
      ],
    };
  },
  methods: {
    showWholeMenu() {
      this.clickMenu = !this.clickMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  z-index: 3;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  height: 45px;
  padding: 30px 0;
  box-shadow: 0 0.5px 10px black;
  .inner {
    position: relative;
    min-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .menu {
      font-weight: 600;
      ul {
        display: flex;
        li {
          margin: 0 20px;
          font-size: 18px;
          a {
            color: black;
            text-decoration: none;
            transition: 0.2s;
            &:hover {
              color: rgb(0, 81, 160);
            }
            img {
              width: 25px;
            }
          }
        }
      }
    }
    .whole-menu {
      position: absolute;
      top: 33px;
      width: 100%;
      z-index: 1;
    }
  }
}
</style>