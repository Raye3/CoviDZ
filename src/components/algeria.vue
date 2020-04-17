<template>
  <v-container grid-list-xs>
    <div>
      <v-row>
        <v-col cols="12">
          <v-alert text border="bottom" tile class="text-center" color="primary" >
            <h1>Algeria Covid-19 Statistics</h1>
          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" xs="12" sm="6">
          <v-card tile color="orange" class="d-flex justify-center align-center" height="100px">
            <h3 class="white--text">Infected {{ infected }}</h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" xs="12" sm="6">
          <v-card tile color="primary" class="d-flex justify-center align-center" height="100px">
            <h3 class="white--text">Hospitalized {{ hospitalized }}</h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" xs="12" sm="6">
          <v-card tile color="success" class="d-flex justify-center align-center" height="100px">
            <h3 class="white--text">Recovered {{ recovered }}</h3>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" xs="12" sm="6">
          <v-card tile color="error" class="d-flex justify-center align-center" height="100px">
            <h3 class="white--text">Deaths {{ deaths }}</h3>
          </v-card>
        </v-col>        
      </v-row>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1 my-5 py-5"
        pagination.sync="pagination"
        item-key="id"
        :loading="loadingStat"
        loading-text="Loading"
        :search="search"
        disable-pagination
        hide-default-footer=""
      >
        <template v-slot:top>
          <v-text-field outlined v-model="search" label="Search by Wilaya name" class="mx-4"></v-text-field>
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
        { text: "Wilaya", align: "left", value: "region" },
        { text: "Cases", align: "left", value: "value" },
        { text: "New Cases", align: "left", value: "newly" },
      ],
      items: [],
      loadingStat: true,
      search : undefined,
      hospitalized : 10,
      deaths: undefined,
      recovered : undefined, 
      infected: undefined


    }
  },
  mounted() {
    this.$http.get('https://api.apify.com/v2/key-value-stores/pp4Wo2slUJ78ZnaAi/records/LATEST?disableRedirect=true')
    .then( response => {
      this.hospitalized = response.data.hospitalized
      this.recovered = response.data.recovered
      this.infected = response.data.infected
      this.deaths = response.data.deceased
      var n ;
      for(n in response.data.infectedByRegion){
        this.items.push(response.data.infectedByRegion[n])
      }
      this.loadingStat = false;
    })
  },
}
</script>

<style>

</style>