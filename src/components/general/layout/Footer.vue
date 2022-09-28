<template>
  <div class="footer">
    <div class="footer-section container">
      <div class="logo-section">
        <img :src="logo" alt="logo" />

        <p>
          Risidio Marketplace is the platform for digital assets registered via
          the Bitcoin blockchain using Clarity Contracts and the Stacks 2.0
          network. We are looking for partners and clients to help get the
          platform to the next level.
        </p>
      </div>
      <div class="options">
        <div class="section">
          <p class="title">NFT</p>
          <p class="option">Your Nfts</p>
          <p class="option">Mint A File</p>
        </div>
        <div class="section">
          <p class="title">How it works</p>
          <p class="option">Self Owned Indenty</p>
          <p class="option">Getting Textnet Stc</p>
        </div>
        <div class="section">
          <p class="title">What we do</p>
          <p class="option">Get In Touch</p>
          <p class="option">Developers</p>
        </div>
      </div>
    </div>
    <!-- Here Lies the Footer: You do not need to worry about the footer for this technical test :))-->
  </div>
</template>
<script>
export default {
  name: "Main-Footer",
  components: {},
  data() {
    return {
      logo: "https://res.cloudinary.com/risidio/image/upload/v1633609248/RisidioMarketplace/Group_-1_fgpanq.svg",
    };
  },
  methods: {},
};
</script>
<style scoped>
.footer {
  background-color: #5154a1;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  padding-bottom: 6rem;

  width: 100%;
  color: #fff;
}
.footer-section {
  width: 100%;
}

.options {
  margin-top: 2rem;

  width: 50%;
}

.footer-section,
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.logo-section p {
  max-width: 34rem;
  line-height: 1.5;
  font-size: 13px;
}

.logo-section img {
  margin-bottom: 2rem;
}

.section .title {
  color: #e3e3e3;
  font-size: 12px;
  margin-bottom: 10px;
}
.section {
  text-align: left;
}
.section .option {
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
}
</style>
