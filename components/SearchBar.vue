<template>
  <div class="input-icon-wrap">
    <span class="input-icon"><span class="fa fa-search" /></span>
    <input
      type="text"
      class="input-with-icon"
      placeholder="Search for a country..."
      :value="value"
      @input="handleInput($event)"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>
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
  .input-icon-wrap {
    margin-bottom: 30px;
    width: 94%;
  }
  .input-with-icon {
    padding: 18px;
  }
}

</style>
