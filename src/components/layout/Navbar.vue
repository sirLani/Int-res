<!-- You may notice this navbar is not responsive-->
<!-- We would like you to style it so it is responsive-->
<!-- You do not need to make the dropdown menu on the "Featured Collections" -->
<template>
  <div class="navbar_container">
    <div class="container">
      <ul class="mainNavbar">
        <div class="nav-section left">
          <img :src="logo" alt="risidio-logo" />
          <li class="nav-item">Explore</li>
          <li class="nav-item">
            Featured Collections
            <img src="../../assets/Icon-awesome-caret-down.svg" />
          </li>
        </div>
        <div class="nav-section">
          <li class="nav-item right">How It Works</li>
          <li class="nav-item">about Risidio</li>
          <li class="nav-item">My NFTs</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664270498/logo_twenaj.svg",
    };
  },
  components: {},
};
</script>

<style  scoped>
.navbar_container {
  background-image: url("https://res.cloudinary.com/risidio/image/upload/v1633609222/RisidioMarketplace/gradienta-m_-1_v4hs5p.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #5154a1;
  background-position: center;
  padding: 1rem 0;
}
.mainNavbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.mainNavbar ul {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
}

.nav-section {
  display: flex;
  align-items: center;
}

.left li {
  font-weight: 500;
}

.left li img {
  margin-left: 5px;
}
.nav-item {
  list-style-type: none;
  margin: 0 20px;
  color: white;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
}
.right {
  margin-left: auto;
}
.nav_banner {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  object-fit: cover;
  z-index: -11;
}
</style>