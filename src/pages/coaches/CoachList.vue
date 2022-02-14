<template>
  <section>FILTER</section>
  <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
  </div>
  <section>
    <ul>
      LIST OF COACHES
    </ul>
  </section>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
      return {
        page: 1,
      }
    },
};
</script>

<style  scoped>
</style>