<template>
  <select
    :value="value"
    @change="handleSelect($event)"
  >
    <option value="" selected disabled>
      filter by region
    </option>
    <option v-for="regionData in regions" :key="regionData" :value="regionData">
      {{ regionData }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectRegion',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    }
  },
  methods: {
    handleSelect (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>
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
@media only screen and (max-width: 768px) {
  select {
    width: 55%;
    padding: 18px;
  }
}
</style>
