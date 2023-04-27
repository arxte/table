<script setup lang="ts">
import NavBar from './components/NavbarHeader.vue'
import HotOffer from './components/HotOffer.vue'
import Filter from './components/FilterEstab.vue'
import Carousel from './components/CarouselEstab.vue'
import NewEstab from './components/NewEstab.vue'
import ChooseBest from './components/ChooseBest.vue'
import SendApplication from './components/SendApplication.vue'

import FooterLogo from './components/FooterLogo.vue'
</script>

<template>
    <div class="wrapper">
      <div class="container">
        <header>
          <NavBar />
        </header>

        <main>
          <HotOffer />

          <Filter />

          <Carousel />

          <NewEstab />

          <ChooseBest />

          <SendApplication />
        </main>

        <footer>
          <FooterLogo />
        </footer>
      </div>
    </div>
</template>

<style scoped src="./assets/css/main.css"></style>