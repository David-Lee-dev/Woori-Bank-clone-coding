<template>
  <Header />
  <h1>{{ message }}</h1>
</template>

<script>
import Header from "~/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      message: "Hellooooooooooooooo",
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  background-color: gray;
}
</style>