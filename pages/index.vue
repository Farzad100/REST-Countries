<template>
  <div>
    <div class="contain">
      <div class="filter-parent">
        <search-bar v-model="searchText" />
        <select-region v-model="selectRegion" @input="changeRegion(selectRegion)" />
      </div>
    </div>
    <div class="contain">
      <div class="cards-parents">
        <country-card
          v-for="country in filteredList"
          :key="country.name"
          :country-data="country"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      selectRegion: '',
      searchText: ''
    }
  },
  computed: {
    ...mapState(['allCountries']),
    filteredList () {
      return this.allCountries.filter((country) => {
        return country.name.toLowerCase().includes(this.searchText.toLowerCase())
      })
    }

  },
  methods: {
    async changeRegion (selectRegion) {
      await this.$store.dispatch('getCountriesByRegion', selectRegion.toLowerCase())
    }
  }
}
</script>

<style scoped>

.cards-parents {
  width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
}
.cards-parents a {
    display: contents;
}

@media only screen and (max-width: 768px) {
  .filter-parent {
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>
