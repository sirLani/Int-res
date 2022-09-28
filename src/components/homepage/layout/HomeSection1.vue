<template>
  <div class="hero-section">
    <h1>Collection Name</h1>
    <div class="profile-picture">
      <img :src="profilePicture" />
      <p class="name">Artist name</p>
    </div>
  </div>
  <div class="about">
    <p>
      Description of the NFT / collectable - Examples such the content of NFTs,
      specific themes of the collection, quotations by the creator, the meaning
      behind the creation of this piece etc Description of this collection - -
      Examples such the content of NFTs, specific themes of the collection,
      quotations by the creator, the meaning behind the creation of this
      collection etc Description of this collection - - Examples such the
      content of NFTs, specific themes of the collection, quotations by the
      creator, the meaning behind the creation of this collection etcDescription
      of this collection - - Examples such the content of NFTs, specific themes
      of the collection, quotations by the creator, the meaning behind the
      creation of this collection etc
    </p>
  </div>
  <p class="toggle">Read More</p>

  <div class="details">
    <div class="details-item">
      <p class="details-title">Floor Price</p>
      <p class="details-sub">2,835 STX</p>
    </div>
    <div class="details-item">
      <p class="details-title">Owners</p>
      <p class="details-sub">1,236</p>
    </div>
    <div class="details-item">
      <p class="details-title">Items</p>
      <p class="details-sub">2,500</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection1",

  data() {
    return {
      profilePicture:
        "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664275167/Groupe_17728_fuiflf.png",
    };
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=scss>
h1 {
  color: #ffffff;
  font-weight: 300;
  font-size: 38px;
}

.hero-section {
  background-image: linear-gradient(180deg, #000000 0%, #0000003c 100%),
    url("../../../assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #5154a1;
  background-position: center;
  padding: 2.4rem 0;
  position: relative;
}

.profile-picture {
  position: absolute;
  left: 48%;
  top: 96px;
}

.profile-picture img {
  height: 94px;
  width: 94px;
  border-radius: 50%;
}
.profile-picture p {
  font-weight: 500;
  margin-top: 5px;
}

.about {
  max-height: 51px;
  overflow: hidden;
  text-align: center;
  max-width: 36rem;
  margin: 0 auto;
  margin-top: 8rem;
}

.toggle {
  color: #50b1b5;
  margin-top: 1rem;
  font-weight: 500;
  cursor: pointer;
}

.details {
  background-color: #f9f9f9;
  display: flex;
  /* justify-content: space-between; */
  align-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  border-radius: 18px;
  margin-top: 2rem;
}

.details-item {
  border-left: 1px solid #f0eaea;
  width: 50%;
}

.details-item:first-child {
  border-left: 0;
}
.details-title {
  font-weight: 300;
}
.details-sub {
  font-weight: 500;
  margin-top: 15px;
}

@media (max-width: 614px) {
  .details {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13rem;
    padding: 1rem 1rem;

    .details-item {
      border-left: none;
      border-bottom: 1px solid #f0eaea;
      padding: 1.5rem 0;
    }

    .details-item:last-child {
      border-bottom: 0;
    }
  }
}
</style>
