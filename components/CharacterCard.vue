<template>
  <v-app light>
    <v-container class="grey lighten-5 center">
      <v-row no-gutters>
        <v-col
          v-for="character in results"
          :key="character.id"
          cols="12"
          sm="4"
        >
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            @click="showCard(character.id)"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <NuxtLink :to="`/RickAndMorty/${character.id}`">
              <v-img height="250" :src="character.image"></v-img>
            </NuxtLink>

            <v-card-title> {{ character.name }}</v-card-title>

            <v-card-text>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>

              <div class="my-4 text-subtitle-1">
                • status: {{ character.status }}
              </div>
              <div class="my-4 text-subtitle-1">
                • species: {{ character.species }}
              </div>
              <div class="my-4 text-subtitle-1">
                • gender: {{ character.gender }}
              </div>

              <div></div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ character.created }}</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>{{ character.location.name }}</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props: ["results"],
  created() {
    console.log("from the the final from the character...", this.results);
  },
  methods: {
    showCard(id) {
      console.log(this.$store.getters.getMorityId(id));
    },
  },
  computed: {
    ...mapState(["counter", "items"]),
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme--light.v-application {
  background-color: #fafafa;
}
</style>
