<!-- You may notice this navbar is not responsive-->
<!-- We would like you to style it so it is responsive-->
<!-- You do not need to make the dropdown menu on the "Featured Collections" -->
<template>
  <div class="navbar_container">
    <div class="container">
      <ul class="mainNavbar">
        <div class="nav-section left">
          <Logo />
          <router-link to="/explore"
            ><li class="nav-item dektop-item">Explore</li></router-link
          >
          <li class="nav-item dektop-item">
            Featured Collections
            <img src="../../../assets/Icon-awesome-caret-down.svg" />
          </li>
        </div>
        <div class="nav-section">
          <li class="nav-item right dektop-item">How It Works</li>
          <li class="nav-item dektop-item">about Risidio</li>
          <li class="nav-item myNFT dektop-item">My NFTs</li>
          <img
            class="menu-icon"
            src="../../../assets/Menu_icon.svg"
            alt="meni-icon"
            @click="openDrawer()"
          />
        </div>
        <div
          class="drawer-background"
          :class="{ show: active.drawer }"
          @click="closeDrawer()"
        />
        <nav :class="{ show: active.drawer }">
          <div class="mobile-navbar">
            <Logo />
            <div class="drawer-close" @click="closeDrawer()">x</div>
          </div>

          <div class="top">
            <router-link class="mobile-nav" to="#">Gallery</router-link>
            <router-link class="mobile-nav" to="#">Collections</router-link>
          </div>
          <div class="bottom">
            <router-link class="mobile-nav" to="#">How it Works</router-link>
            <router-link class="mobile-nav" to="#">About Risidio</router-link>
          </div>
          <Button
            text="Register with Hiro wallet"
            color="#5FBDC1"
            backgroundColor="rgba(254, 255, 255, 0.3)"
          />
        </nav>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "../../general/component/Logo.vue";
import Button from "../../general/component/Button";
export default {
  data() {
    return {
      active: {
        drawer: false,
      },
    };
  },
  methods: {
    openDrawer() {
      console.log("yes");
      this.active.drawer = true;
    },
    closeDrawer() {
      this.active.drawer = false;
    },
  },
  components: { Logo, Button },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
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
.left img {
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

.myNFT {
  background: rgba(254, 255, 255, 0.3);
  color: #5fbdc1;
  border: none;
  padding: 10px 30px;
  margin: 5px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
}
nav {
  display: none;
}

.menu-icon {
  display: none;
}

.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}
.drawer-close {
  font-size: 2rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid grey;
  color: #ffffff;
  width: 80px;
  float: right;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-self: end;
  border: none;

  &:hover {
    background-color: lightgrey;
  }
}
@media (max-width: 810px) {
  .dektop-item {
    display: none;
  }

  .left img {
    margin-left: 15px;
  }

  .menu-icon {
    display: block;
    margin-right: 15px;
    height: 23px;
  }
  .drawer-close {
    display: flex;
    margin-right: 7px;
    margin-bottom: 2rem;
  }
  nav {
    width: 100vw;
    height: 100vh;
    background-color: #0e085e;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left 0.5s;
    z-index: 101;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    text-decoration: none;

    &.show {
      left: 0;
    }

    .mobile-nav {
      color: #ffffff;
      text-decoration: none;
    }
  }

  .top,
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-bottom: 2rem;
    font-size: 13px;
    line-height: 1.6;
  }
  .top {
    border-bottom: 1px solid rgba(254, 255, 255, 0.3);
    margin-top: 1rem;
  }
  .bottom {
    margin-bottom: 2rem;
    font-weight: 300;
    margin-top: 2rem;
  }
}

.mobile-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>