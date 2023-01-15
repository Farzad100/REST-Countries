<template>
  <div class="contain">
    <div class="filter-parent">
      <span class="button" @click="goBack">
        Back
      </span>
    </div>
    <div class="country">
      <div class="picture">
        <img :src="country.flag" alt="#">
      </div>
      <div class="details">
        <h1 class="title">
          {{ country.name }}
        </h1>
        <div class="list">
          <ul>
            <li><strong>Native Name: </strong>  {{ country.nativeName }}</li>
            <li><strong>Populations: </strong>  {{ country.population }}</li>
            <li><strong>Region: </strong>  {{ country.region }}</li>
            <li><strong>Sub Region: </strong>  {{ country.subregion }}</li>
            <li><strong>Capital: </strong>  {{ country.capital }}</li>
          </ul>
          <ul>
            <li>
              <strong>Top Level Domain: </strong>
              <span v-for="domain in country.topLevelDomain" :key="domain">
                {{ domain }}
              </span>
            </li>
            <li>
              <strong>Currencies: </strong>
              <span v-for="currency in country.currencies" :key="currency.name">
                {{ currency.name }}
              </span>
            </li>
            <li>
              <strong>Languages: </strong>
              <span v-for="language in country.languages" :key="language.name">
                {{ language.name }}
              </span>
            </li>
          </ul>
        </div>
        <div class="border">
          <h4>Border countries: </h4>
          <span v-for="border in country.borders" :key="border" @click="countryBorder(border)">
            {{ border }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DetailsPage',
  data () {
    return {
      code: this.$route.params.code
    }
  },
  computed: {
    ...mapState(['country'])
  },
  mounted () {
    if (this.code) {
      this.$store.dispatch('getCountry', this.code)
    }
  },
  methods: {
    countryBorder (border) {
      this.$store.dispatch('getCountry', border)
    },
    goBack () {
      this.$router.push('/')
    }
  }

}
</script>

  <style scoped>
  .country {
    display: flex;
    margin-top: 50px;
}
  .country > div {
    width: 50%;
}

.picture img {
  width: 80%;
}
.details .list {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.details .list ul {
    list-style-type: none;
    margin-top: 35px;
    line-height: 2;
    width: 50%;
}
.details .border {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 35px;
    flex-wrap: wrap;
}
.details .border span {
    border: 1px solid #ccc;
    padding: 5px 20px;
    margin-bottom: 8px;
}
.details .border h4, .details .border span {
    margin-right: 12px;
}
.button {
  box-shadow: 1px 1px 12px rgb(0 0 0 / 20%);
    border: none;
    padding: 12px 20px;
    outline: none;
    width: 13%;
    border-radius: 7px;
    font-weight: 500;
    text-align: center;
}
.card .details {
    margin: 0;
    min-height: 45px;
    margin-top: 5px;
    padding: 20px;
}
.card .details h3 {
    margin: 0;
    min-height: 45px;
}
.card .details .option {
    line-height: 1.5;
    margin: 0;
}
@media only screen and (max-width: 768px) {
  .country {
    flex-direction: column;
  }
  .country > div {
    width: 100%;
    margin-bottom: 40px;
  }
  .picture img {
    width: 100%;
  }
  .details .list {
    flex-direction: column;
  }
  .button {
    width: 30%;
  }
}
  </style>
