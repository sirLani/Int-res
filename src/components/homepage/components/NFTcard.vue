<template>
  <div class="NFT-card">
    <img :src="image" />
    <div class="card-details">
      <div class="card-detail">
        <h2>{{ name }}</h2>
        <p>20 STX</p>
      </div>
      <div class="card-detail">
        <p>By {{ artist }}</p>
        <p>{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    artist: { type: String },
    price: { type: String },
    image: { type: String },
  },
};
</script>

<style>
.NFT-card {
  background-color: #eeecec;
  border-radius: 20px;
  width: 16rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.card-detail h2 {
  font-weight: 400;
  font-size: 17px;
}

.card-detail p {
  font-size: 13px;
}

.card-detail {
  display: flex;
  padding-left: 21px;
  justify-content: space-between;
  padding-right: 23px;
  margin-bottom: 2px;
}

.NFT-card img {
  width: 210px;
  height: 190px;
  border-radius: 14px;
  margin-bottom: 13px;
}
</style>
