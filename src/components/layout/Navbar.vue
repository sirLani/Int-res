<!-- You may notice this navbar is not responsive-->
<!-- We would like you to style it so it is responsive-->
<!-- You do not need to make the dropdown menu on the "Featured Collections" -->
<template>
    <div>
        <div class="navbar_container">
            <img class="nav_banner" src="https://res.cloudinary.com/risidio/image/upload/v1633609222/RisidioMarketplace/gradienta-m_-1_v4hs5p.svg" alt="">
        </div>
         <div class = "mainNavbar">
            <ul>
            <img :src="logo" alt="risidio-logo"/>
                <li class="nav-item" > Gallery </li>
                <li class="nav-item"> Featured Collections </li>
                <li class="nav-item right"> How It Works</li>
                <li class="nav-item"> about Risidio</li>
                <li class="nav-item"> My NFTs</li>
            </ul>
         </div>
    </div>
</template>

<script>
export default {
  data () {
    return{
      logo: 'https://res.cloudinary.com/risidio/image/upload/v1633609248/RisidioMarketplace/Group_-1_fgpanq.svg',
    }
  }
}
</script>

<style scoped>
.mainNavbar{
  margin: 0 50px 50px 50px;
}
.mainNavbar ul {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center;
}
.risidio-logo{
    align-self: flex-start;
}
.nav-item{
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
.nav_banner{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  object-fit: cover;
  z-index: -11;
}

</style>