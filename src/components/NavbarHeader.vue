<script setup lang="ts">
import { RouterLink } from 'vue-router'
// import { ref, onMounted } from 'vue'
import { useScrollStore } from '../stores/scrollNavbar'
const scrollStore = useScrollStore()

// const search = ref()
// const forPartners = ref()
// const specialEvent = ref()

// onMounted(() => {
//   console.log(search.value)
// })

// onMounted(() => {

// })

// console.log(search.value)
function scrollToSearch() {
  scrollStore.search.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })
}

function scrollToForPartners() {
  scrollStore.forPartner.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
  })
}

function scrollToSpecialEvent() {
scrollStore.specialEvent.scrollIntoView({
  block: 'center',
  behavior: 'smooth'
})
}
</script>

<template>
  <article class="navbar">
    <div class="navbar-item-wrapper">
      <span class="navbar__item-text" @click="scrollToSearch()">SEARCH</span>
      <span class="navbar__item-text" @click="scrollToForPartners()">FOR PARTNERS</span>
    </div>

    <router-link to="/">
      <img src="../assets/images/svg/logo.svg" alt="logo" class="navbar__logo" />
    </router-link>

    <div class="navbar-item-wrapper">
      <span class="navbar__item-text" @click="scrollToSpecialEvent()">EST. FOR SPECIAL EVENTS</span>
    </div>
  </article>
</template>

<style scoped src="../assets/css/navbarHeader.css"></style>
