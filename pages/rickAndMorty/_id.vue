<template>
  <div>
    <div v-if="product" class="container py-5">
      <div class="hero-container">
        <img :src="product.image" alt="" class="image" />
        <div class="info-box">
          <h1>{{ product.title }}</h1>
          <p class="snippet">Here we Add Some texts to =) :emoji</p>
        </div>
      </div>
      <div class="whats-included-container">
        <div class="included-container">
          <h6>Name</h6>
          <p>
            {{ product.name }}
          </p>
        </div>
        <div class="included-container">
          <h6>Status:</h6>
          <p>
            {{ product.status }}
          </p>
        </div>
        <div class="included-container">
          <h6>Species:</h6>
          <p>
            {{ product.species }}
          </p>
        </div>
        <div class="included-container">
          <h6>Gender:</h6>
          <p>
            {{ product.gender }}
          </p>
        </div>
      </div>
      <div class="description-container">
        <p>Here is some description of the product</p>
      </div>
    </div>
    <div v-else class="container padding">404 not Found</div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getMorityId(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.hero-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
}
.image {
  width: 40%;
  height: 25rem;
}
.info-box {
  width: 39%;
  background-color: rgba(207, 201, 201, 0.322);
  padding: 1rem;
  border-radius: 0.5rem;
}
.whats-included-container {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
}
.description-container {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.included-container {
  margin-top: 1.5rem;
}
h1 {
  font-size: 1.75rem;
}
h6 {
  font-size: 1.15rem;
  font-weight: 400;
}
p {
  color: grey;
}
.snippet {
  color: rgba(0, 0, 0, 0.774);
  margin-top: 1rem;
}
button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}
.description-container {
  margin-top: 3rem;
  color: grey;
}
.padding {
  padding: 10rem 0;
}
</style>
