<template>
  <div>
    <div class="contain">
      <div class="filter-parent">
        <div class="input-icon-wrap">
          <span class="input-icon"><span class="fa fa-search" /></span>
          <input v-model="search" type="text" class="input-with-icon" placeholder="Search for a country...">
        </div>
        <select v-model="region" @change="changeRegion($event)">
          <option value="" selected disabled>
            filter by region
          </option>
          <option v-for="regionData in regions" :key="regionData" :value="regionData">
            {{ regionData }}
          </option>
        </select>
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
      region: '',
      search: '',
      regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    }
  },
  computed: {
    ...mapState(['allCountries']),
    filteredList () {
      return this.allCountries.filter((country) => {
        return country.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }

  },
  methods: {
    async changeRegion (event) {
      await this.$store.dispatch('getCountriesByRegion', event.target.value.toLowerCase())
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

select {
  outline: none;
  box-shadow: 2px 2px 8px rgb(219 207 207 / 96%);
    border: none;
    width: 20%;
    padding: 15px 20px;
    border-radius: 7px;
    color: #666;
    font-size: 14px;
}
.input-icon-wrap {
  box-shadow: 2px 2px 8px rgb(219 207 207 / 96%);
  display: flex;
  flex-direction: row;
  width: 30%;
  border-radius: 7px;
    overflow: hidden;
}
.fa {
  color: #999;
}

.input-with-icon {
  border: none;
    flex: 1;
    outline: none;
    font-size: 14px;
    color: #666;
}

.input-icon, .input-with-icon {
  padding: 14px;
}

@media only screen and (max-width: 768px) {
  .filter-parent {
    flex-direction: column;
    align-items: flex-start;
  }
  .input-icon-wrap {
    margin-bottom: 30px;
    width: 94%;
  }
  select {
    width: 55%;
    padding: 18px;
  }
  .input-with-icon {
    padding: 18px;
  }
}

</style>
