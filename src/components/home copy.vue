<template>
  <v-container grid-list-xs>
    <div class="main d-flex justify-center align-center">
      <div>
        <v-row>
          <v-col cols="4">
            <router-link to="/instructions">
              <v-card outlined tile>
                <v-img height="200px" contain src="imgs/doctor.svg"></v-img>
                <v-card-title primary-title class="justify-center">نصائح وتنبيهات</v-card-title>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4">
            <router-link to="/world">
              <v-card outlined tile>
                <v-img height="200px" contain src="imgs/doctor.svg"></v-img>
                <v-card-title primary-title class="justify-center">نصائح وتنبيهات</v-card-title>
              </v-card>
            </router-link>
          </v-col>
          <v-col cols="4">
            <router-link to="/algeria">
              <v-card outlined tile>
                <v-img height="200px" contain src="imgs/doctor.svg"></v-img>
                <v-card-title primary-title class="justify-center">نصائح وتنبيهات</v-card-title>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 100vh;
}
</style>