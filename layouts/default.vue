<template>
  <div>
    <header>
      <div class="contain head">
        <div>
          <h3> Where in the world?</h3>
        </div>
        <div>
          <p @click="myFunction">
            <i class="fa fa-moon-o" />&nbsp;&nbsp;<strong>Dark Mode</strong>
          </p>
        </div>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    myFunction () {
      const element = document.body
      element.classList.toggle('dark-mode')
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    user-select: none;
}
header {
    width: 100%;
    box-shadow: 1px 1px 12px #dddbdb;
    min-height: 60px;
    line-height: 60px;
}
.contain {
    width: 1140px;
    margin: 0 auto;
}
.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.filter-parent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 60px;
    margin-top: 35px;
}
.dark-mode {
  background-color: black !important;
  color: white !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media only screen and (max-width: 1025px) {
  .contain {
    width: 90%;
  }
}

</style>
