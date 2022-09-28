<template>
  <router-link to="/"><img :src="logo" alt="risidio-logo" /></router-link>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Logo",

  data() {
    return {
      logo: "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664270498/logo_twenaj.svg",
    };
  },
};
</script>

<style scoped>
@media (max-width: 800px) {
  img {
    width: 6rem;
    height: 2.5rem;
  }
}
</style>