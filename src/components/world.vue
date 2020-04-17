<template>
  <v-container grid-list-xs>
    <div>
      <v-row>
        <v-col cols="12">
          <v-alert text border="bottom" tile class="text-center" color="primary">
            <h1>World Covid-19 Statistics</h1>
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" xs="12" sm="6">
          <v-card tile color="orange" class="d-flex flex-column justify-center align-center" height="100px">
            <h3 class="white--text">Total Infected <span class="black--text">{{ cardsItems.cases }}</span></h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" xs="12" sm="6">
          <v-card tile color="success" class="d-flex justify-center align-center" height="100px">
            <h3 class="white--text">Total Recovered <span class="black--text">{{ cardsItems.recovered }}</span></h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" xs="12" sm="6">
          <v-card tile color="error" class="d-flex justify-center align-center" height="100px">
            <h3 class="white--text">Total Deaths <span class="black--text">{{ cardsItems.deaths }}</span></h3>
          </v-card>
        </v-col>
      </v-row>
      <v-data-table
        dense
        :headers="headers"
        :items="items"
        class="elevation-1 mt-5 pt-5"
        pagination.sync="pagination"
        item-key="id"
        :loading="loadingStat"
        loading-text="Loading"
        :search="search"
        :items-per-page="itemsPerPage"
      >
        <template v-slot:top>
          <v-text-field outlined v-model="search" label="Search by country name" class="mx-4"></v-text-field>
        </template>
        <template v-slot:item.countryInfo.flag="{ item }">
          <div class="d-flex justify-center ma-2">
            <v-img :src="item.countryInfo.flag" :alt="item.country" width="30px" height="35px"></v-img>
          </div>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Flag",
          align: "center",
          value: "countryInfo.flag",
          sortable: false
        },
        { text: "Country Name", align: "center", value: "country" },
        { text: "Cases", align: "center", value: "cases" },
        { text: "Today Cases", align: "center", value: "todayCases" },
        { text: "Deaths", align: "center", value: "deaths" },
        { text: "Today Deaths", align: "center", value: "todayDeaths" },
        { text: "Recovered", align: "center", value: "recovered" },
        { text: "Active", align: "center", value: "active" }
      ],
      itemsPerPage: 30,
      loadingStat: true,
      items: [],
      search: undefined,
      cardsItems : []
    };
  },
  watch: {},
  mounted() {
    this.$http.get("https://corona.lmao.ninja/v2/countries/")
    .then(response => {
      var item;
      for (item in response.data) {
        this.items.push(response.data[item]);
      }
      this.loadingStat = false;
    });

    this.$http.get('https://corona.lmao.ninja/v2/all')
    .then(res => {
      this.cardsItems = res.data
    })
  }
};
</script>

<style>
</style>