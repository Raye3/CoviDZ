<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <h1 class="white--text">CoviDZ</h1>
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <router-link to="/algeria">
          <v-btn text>
            <span class="mr-2">Algeria Stats</span>
          </v-btn>
        </router-link>
        <router-link to="/world">
          <v-btn text>
            <span class="mr-2">World Stats</span>
          </v-btn>
        </router-link>
        <router-link to="/instructions">
          <v-btn text>
            <span class="mr-2">Instructions</span>
          </v-btn>
        </router-link>

        <v-btn color="black" href="https://www.facebook.com/abdelhak0">
          <span class="mr-2">Creator</span>
        </v-btn>
      </div>
      <div>

        <v-menu  offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="d-sm-flex d-md-none" text color="white" dark v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(menu, index) in menus" :key="index">
              <router-link :to="menu.to">
                <v-list-item-title>{{ menu.name }}</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <v-btn href="https://www.facebook.com/abdelhak0" color="black white--text">Creator</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    menus: [
      { name: "Instructions", to: "/Instructions" },
      { name: "Algeria", to: "/algeria" },
      { name: "World", to: "/world" },
    ]
  }),
  mounted() {}
};
</script>
<style>
a {
  text-decoration: none;
}
</style>
