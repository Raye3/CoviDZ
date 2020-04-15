<template>
  <div>
    <v-container grid-list-xs>
      <instructions />
    </v-container>
  </div>
</template>

<script>
import instructions from '../components/instructions';

export default {
  name: 'instructionsView',

  components: {
    instructions
  },

  data: () => ({
    //
  }),
  mounted() {

  },
};
</script>
