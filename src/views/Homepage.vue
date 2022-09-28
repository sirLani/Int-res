<template>
  <div>
    <!-- Display component as such passing any props you need to-->
    <HomeSection1 />
    <HomeNFTDisplay />
  </div>
</template>

<script>
//Import your components
import HomeSection1 from "@/components/homepage/layout/HomeSection1.vue";
import HomeNFTDisplay from "@/components/homepage/layout/HomeNFTDisplay.vue";

export default {
  name: "Homepage",
  components: {
    HomeSection1, // Add your components
    HomeNFTDisplay,
  },
};
</script>

<style lang="scss" scoped>
</style>
