<template>
  <v-container grid-list-xs>
    <div>
      <v-data-table
        dense
        dark
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
        { text: "Flag", align: "center", value: "countryInfo.flag", sortable : false },
        { text: "Country Name", align: "center", value: "country" },
        { text: "Cases", align: "center", value: "cases" },
        { text: "Today Cases", align: "center", value: "todayCases" },
        { text: "Deaths", align: "center", value: "deaths" },
        { text: "Today Deaths", align: "center", value: "todayDeaths" },
        { text: "Recovered", align: "center", value: "recovered" },
        { text: "Active", align: "center", value: "active" }
      ],
      itemsPerPage : 30,
      itemsPerPagetext : ['25','50','100'],
      loadingStat: true,
      items: [],
      search : undefined,
    };
  },
  watch: {},
  mounted() {
    this.$http.get("https://corona.lmao.ninja/countries/").then(response => {
      var item;
      for (item in response.data) {
        this.items.push(response.data[item]);
      }
      this.loadingStat = false;
    });
  }
};
</script>

<style>
</style>