<!-- Please remove this file from your project -->
<template>
  <!-- <nuxt-link :to="'/details/' + code"> -->
  <div class="card" @click="goToCountry">
    <div class="img" :style="{ backgroundImage: `url(${countryData.flag})`}" />
    <div class="details">
      <h3 class="title">
        {{ countryData.name }}
      </h3>
      <p class="option">
        <strong>Population:</strong> {{ countryData.population }}<br>
        <strong>Region:</strong> {{ countryData.region }} <br>
        <strong>Capital:</strong> {{ countryData.capital }} <br>
      </p>
    </div>
  </div>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    countryData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      code: this.countryData.alpha3Code
    }
  },
  methods: {
    goToCountry () {
      this.$router.push('/details/' + this.code)
    }
  }
}
</script>

<style scoped>

.card {
    width: 21%;
    box-shadow: 1px 1px 12px rgb(0 0 0 / 20%);
    margin-top: 50px;
    border-radius: 5px;
    overflow: hidden;
}
.card .img {
    width: 100%;
    height: 150px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
    font-size: 16px;
}
.card .details .option {
  line-height: 1.7;
    margin: 0;
    font-size: 14px;
}
@media only screen and (max-width: 768px) {
  .card {
    width: 90%;
    margin: 65px auto 0;
  }
  .card .img {
    height: 200px;
  }
}
</style>
