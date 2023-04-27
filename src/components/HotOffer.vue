<script setup lang="ts">
// import { ref } from 'vue'
// import { RouterLink } from 'vue-router'
import PopUp from './PopUp.vue'
import { usePopupStore } from '../stores/popup'
import { RouterLink } from 'vue-router'
import { useRestaurantsStore } from '@/stores/restaurants'
const popup = usePopupStore()
const restaurantsStore = useRestaurantsStore()

// let isVisible = ref(false)
function showPopup(value: boolean) {
  popup.isVisible = value
}

function showPageRestaurant(
  id: number,
  name: string,
  kitchen: Array<string>,
  averageCheck: string,
  type: Array<string>,
  peculiarities: Array<string>,
  description: string,
  imageBig: string,
  address: string,
  workingDay: string,
  titleSecond: string,
  descriptionSecond: string,
  descriptionThird: string,
  descriptionFouth: string,
  descriptionFifth: string,
  mapLink: string,
  events: string
) {
  restaurantsStore.clickedRestaurant.id = id
  restaurantsStore.clickedRestaurant.name = name
  restaurantsStore.clickedRestaurant.kitchen = kitchen
  restaurantsStore.clickedRestaurant.averageCheck = averageCheck
  restaurantsStore.clickedRestaurant.type = type
  restaurantsStore.clickedRestaurant.peculiarities = peculiarities
  restaurantsStore.clickedRestaurant.description = description
  restaurantsStore.clickedRestaurant.imageBig = imageBig
  restaurantsStore.clickedRestaurant.address = address
  restaurantsStore.clickedRestaurant.workingDay = workingDay
  restaurantsStore.clickedRestaurant.titleSecond = titleSecond
  restaurantsStore.clickedRestaurant.descriptionSecond = descriptionSecond
  restaurantsStore.clickedRestaurant.descriptionThird = descriptionThird
  restaurantsStore.clickedRestaurant.descriptionFouth = descriptionFouth
  restaurantsStore.clickedRestaurant.descriptionFifth = descriptionFifth
  restaurantsStore.clickedRestaurant.mapLink = mapLink
  restaurantsStore.clickedRestaurant.events = events
}
</script>

<template>
  <article class="hot-offer">
    <div
      class="hot-offer-img-section img-section"
      v-for="restaurant in restaurantsStore.hotOfferRestaurant"
      :key="restaurant.id"
    >
      <img src="../assets/images/hotOffer/Verde.png" alt="verde" class="img-section__img" />

      <article class="img-section-open">
        <div class="img-section-open-text-wrapper">
          <span class="img-section-open__title">Restaurant</span>
          <span class="img-section-open__name">Verde</span>
        </div>

        <router-link to="/restaurant" class="link-to-page">
          <span
            class="img-section-open__link"
            @click="
              showPageRestaurant(
                restaurant.id,
                restaurant.name,
                restaurant.kitchen,
                restaurant.averageCheck,
                restaurant.type,
                restaurant.peculiarities,
                restaurant.description,
                restaurant.imageBig,
                restaurant.address,
                restaurant.workingDay,
                restaurant.titleSecond,
                restaurant.descriptionSecond,
                restaurant.descriptionThird,
                restaurant.descriptionFouth,
                restaurant.descriptionFifth,
                restaurant.mapLink,
                restaurant.events
              )
            "
            >Expand</span
          >
        </router-link>
      </article>
    </div>

    <div class="hot-offer-content-section">
      <div class="hot-offer-content-section__about about">
        <div class="about-title-wrapper">
          <span class="about__nomination">Bar / pub</span>

          <span class="about__title">Mood bar & terrace</span>
        </div>

        <div class="about-kitchen-wrapper">
          <div class="about-kitchen">
            <span class="about__nomination">Kitchen</span>
            <span class="about__nomination-value">Asian</span>
          </div>

          <div class="about-average-check">
            <span class="about__nomination">Average check</span>
            <span class="about__nomination-value">15 000</span>
          </div>
        </div>

        <div class="about-peculiarities">
          <span class="about__nomination">Peculiarities</span>
          <div class="about-peculiarities-item-wrapper">
            <span class="about-peculiarities__item">Breakfasts</span>
            <span class="about-peculiarities__item">Business lunches</span>
            <span class="about-peculiarities__item">Background music</span>
            <span class="about-peculiarities__item">Hookah</span>
            <span class="about-peculiarities__item">Live music</span>
            <span class="about-peculiarities__item">Dance floor</span>
            <span class="about-peculiarities__item">WiFi</span>
          </div>
        </div>
      </div>

      <div class="hot-offer-content-section__description description">
        <p class="description__paragraph">
          <span class="description__name-bar">Mood bar & terrace</span> is a dining establishment
          that combines the ambiance of a stylish bar with the open-air experience of a terrace or
          rooftop.
        </p>

        <!-- <RouterLink to="/reserve"> -->
        <button type="button" class="description__btn-reserve" @click="showPopup(true)">
          Reserve a table
        </button>
        <!-- </RouterLink> -->
      </div>
    </div>

    <PopUp v-if="popup.isVisible === true" />
  </article>
</template>

<style scoped src="../assets/css/hotOffer.css"></style>
