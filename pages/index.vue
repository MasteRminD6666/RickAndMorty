<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Shopify </v-list-item-title>
          <v-list-item-subtitle> Find Your Sellers </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <NuxtLink to="/RickAndMorty">
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Shopify</v-toolbar-title>
    </v-app-bar>

    <v-main> </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "RAM", icon: "mdi-dialpad", color: "purple darken-2" },
        { title: "Status", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
      drawer: null,
    };
  },
};
</script>
