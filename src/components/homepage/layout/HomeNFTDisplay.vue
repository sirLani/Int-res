<template>
  <!-- We would like you to render 12 NFTs in the desktop full width view, but limit it to 3 NFTs if mobile width (examples in the design)-->
  <!-- Here you will see conditional rendering separating between mobile Nfts and normal. You may use your own logic for displaying the nfts between the mobile view and desktop-->
  <div class="container NFT-section">
    <div class="toggle-nav">
      <div class="toggle">Items</div>
      <div class="toggle">Activity</div>
    </div>

    <div class="NFT-container mobile-NFT">
      <NFTcard
        v-for="nft in mobileNFTs"
        :key="nft.id"
        :name="nft.name"
        :artist="nft.artist"
        :image="nft.image"
        :price="nft.price"
      />
    </div>
    <div class="NFT-container desktop-NFT">
      <!--You may display the normal N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FTs as such -->
      <NFTcard
        v-for="nft in desktopNFTs"
        :key="nft.id"
        :name="nft.name"
        :artist="nft.artist"
        :image="nft.image"
        :price="nft.price"
      />
    </div>
    <div class="gallery-btn-container">
      <p>You’ve seen the all collection</p>
      <div class="gallery-btn">
        <Button text="Gallery" backgroundColor="#5FBDC1" /><Button
          text="Go Back TO Top"
          color="#5FBDC1"
          backgroundColor="#EFF8F8"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NFTcard from "../components/NFTcard.vue";
import Button from "../../general/component/Button";
export default {
  name: "Home-NFT-Display",
  components: { NFTcard, Button },

  data() {
    return {
      mobileNFTs: [], // You may use this to display limited NFTs
      desktopNFTs: [],
    };
  },
  mounted() {},
  created() {
    this.checkScreen;
    window.addEventListener("resize", this.checkScreen); // On window resize: runs the checkScreen method
    this.mobileNFTs = this.GenerateNFTData.slice(0, 3);
    this.desktopNFTs = this.GenerateNFTData;
  },
  methods: {
    checkScreen() {
      // You will have to add to this method if you want the expected results. Or abandon it entirely and make your own
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 600) {
        //
      } else if (this.windowWidth > 600) {
        //
      }
    },
  },
  computed: {
    GenerateNFTData() {
      const NFTs = [
        {
          id: 1,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293288/pic-2_mvoxfi.png",
        },
        {
          id: 2,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293288/pic-1_zx22a6.png",
        },
        {
          id: 3,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-7_bnfhdv.png",
        },
        {
          id: 4,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-5_xyzx3w.png",
        },
        {
          id: 5,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-6_kdfpko.png",
        },
        {
          id: 6,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-5_xyzx3w.png",
        },
        {
          id: 7,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-6_kdfpko.png",
        },
        {
          id: 8,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-7_bnfhdv.png",
        },
        {
          id: 9,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-7_bnfhdv.png",
        },
        {
          id: 10,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293287/pic-6_kdfpko.png",
        },
        {
          id: 11,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293288/pic-1_zx22a6.png",
        },
        {
          id: 12,
          name: "Artwork",
          artist: "artist name",
          price: "27$",
          image:
            "https://res.cloudinary.com/dagzxzuv0/image/upload/v1664293288/pic-1_zx22a6.png",
        },
      ];

      // Generate NFT data and push into the NFT array
      // You can create a loop that loops through n NFTS generating the data with unique IDs
      // Use these generated NFTs to display on the market.
      /** NFT data should look something like:
       * name: 'NFT-1' where 1 is the value of i in your loop
       * artist: 'Unknown Artist'
       * price: 100 #you may keep this random
       * image: this should be any image of your choosing or selected from the shared XD file
       */
      return NFTs;
    },
  },
};
</script>
<style scoped>
.toggle-nav {
  width: 97%;
  border-bottom: 1px solid #f0eaea;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  margin: 0 auto;
}

.toggle {
  padding: 1rem 2rem;
  font-size: 13px;
  font-weight: 500;
}

.NFT-section {
  margin-top: 2rem;
  margin-bottom: 5rem;
}
.NFT-container {
  display: flex;
  flex-wrap: wrap;
  width: 88%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 3rem;
}
.mobile-NFT {
  display: none;
}
.desktop-NFT {
  display: flex;
}

@media (max-width: 600px) {
  .mobile-NFT {
    display: flex;
  }

  .desktop-NFT {
    display: none;
  }
}

.gallery-btn {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.gallery-btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4.5rem 0;
}

.gallery-btn-container p {
  font-size: 20px;
}
</style>