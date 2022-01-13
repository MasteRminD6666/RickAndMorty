<template>
  <div>
    <CharacterCard :results="characters" />
  </div>
</template>

<script>
import CharacterCard from "../../components/CharacterCard.vue";
export default {
  components: {
    CharacterCard,
  },
  created() {
    console.log("from the getters", this.$store.getters.getRickAndMorty);
  },
  mounted() {
    this.$store.dispatch("getMority");
  },
  computed: {
    characters() {
      return this.$store.getters.getRickAndMorty;
    },
  },
};
</script>

<style scoped></style>
