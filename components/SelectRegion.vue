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
    box-shadow: 1px 1px 12px rgb(0 0 0 / 20%);
    border: none;
    width: 20%;
    padding: 15px 20px;
    border-radius: 7px;
    color: #666;
    font-size: 14px;
    background: none;
}
@media only screen and (max-width: 768px) {
  select {
    width: 55%;
    padding: 18px;
  }
}
</style>
