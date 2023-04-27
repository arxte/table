<script setup lang="ts">
import NavBar from './NavbarHeader.vue'
import SendApplication from './SendApplication.vue'
import FooterLogo from './FooterLogo.vue'

import PopUp from './PopUp.vue'
import { usePopupStore } from '../stores/popup'
import { useRestaurantsStore } from '../stores/restaurants'
const restaurantsStore = useRestaurantsStore()
const popup = usePopupStore()

// let isVisible = ref(false)
function showPopup(value: boolean) {
  popup.isVisible = value
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <header>
        <NavBar />
      </header>
      <article class="restaurant-page">
        <article class="hot-offer">
          <div class="hot-offer-img-section img-section">
            <img
              :src="`${restaurantsStore.clickedRestaurant.imageBig}`"
              alt="verde"
              class="img-section__img"
            />
          </div>

          <div class="hot-offer-content-section">
            <div class="hot-offer-content-section__about about">
              <!-- <div class="about-title-wrapper">
                <span class="about__nomination">Bar / pub</span>

                <span class="about__title">Mood bar & terrace</span>
              </div> -->

              <div class="about-kitchen-wrapper">
                <div class="about-kitchen">
                  <span class="about__nomination">Kitchen</span>
                  <span class="about__nomination-value">{{
                    restaurantsStore.clickedRestaurant.kitchen
                  }}</span>
                </div>

                <div class="about-average-check">
                  <span class="about__nomination">Average check</span>
                  <span class="about__nomination-value">{{
                    restaurantsStore.clickedRestaurant.averageCheck
                  }}</span>
                </div>
              </div>

              <div class="about-kitchen-wrapper">
                <div class="about-kitchen">
                  <span class="about__nomination">Wokring mode</span>
                  <span class="about__nomination-value">{{
                    restaurantsStore.clickedRestaurant.workingDay
                  }}</span>
                </div>

                <div class="about-average-check">
                  <span class="about__nomination">Menu</span>
                  <span class="about__nomination-value">Download (PNG 1.13MB)</span>
                </div>
              </div>

              <div class="about-kitchen-wrapper">
                <div class="about-kitchen">
                  <span class="about__nomination">Address</span>
                  <span class="about__nomination-value">{{
                    restaurantsStore.clickedRestaurant.address
                  }}</span>
                </div>
              </div>

              <div class="about-peculiarities">
                <span class="about__nomination">Peculiarities</span>
                <div class="about-peculiarities-item-wrapper">
                  <span class="about-peculiarities__item" v-for="pluses in restaurantsStore.clickedRestaurant.peculiarities" :key="pluses[0]">{{ pluses }}</span>
                </div>
              </div>
            </div>

            <div class="hot-offer-content-section__description description">
              <div class="about-title-wrapper">
                <span class="about__nomination">Restaurant</span>

                <span class="about__title">{{ restaurantsStore.clickedRestaurant.name }}</span>
              </div>

              <p class="description__paragraph">
                <!-- <span class="description__name-bar">Mood bar & terrace</span> is a dining -->
                <!-- establishment that combines the ambiance of a stylish bar with the open-air -->
                <!-- experience of a terrace or rooftop. -->
                {{ restaurantsStore.clickedRestaurant.description }}
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

        <section class="detailed-description">
          <h2 class="detailed-description__title">
            <!-- From the moment you step inside
            <span class="detailed-description__title_yellow">Verde</span>, you are transported to
            <span class="detailed-description__title_yellow">a different world</span> -->

            {{ restaurantsStore.clickedRestaurant.titleSecond }}
          </h2>
          <div class="column-wrapper">
            <div class="first-column">
              <p class="detailed-description__paragraph">
                {{ restaurantsStore.clickedRestaurant.descriptionSecond }}
              </p>
              <p class="detailed-description__paragraph">
                {{ restaurantsStore.clickedRestaurant.descriptionThird }}
              </p>
              <p class="detailed-description__paragraph">
                {{ restaurantsStore.clickedRestaurant.descriptionFouth }}
              </p>
            </div>

            <div class="second-column">
              <p class="detailed-description__paragraph-second">
                {{ restaurantsStore.clickedRestaurant.descriptionFifth }}
              </p>
            </div>
          </div>
        </section>

        <section class="restaurant-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.872752820444!2d76.95705187670667!3d43.23312747949765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f7df13a14dd%3A0x3065dcf045bc4188!2sVERDE%20RESTAURANT%20by%20Grand%20Mildom%20Almaty!5e0!3m2!1sru!2skz!4v1682557909932!5m2!1sru!2skz"
            width="100%"
            height="600px"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <SendApplication />
      </article>

      <footer>
        <FooterLogo />
      </footer>
    </div>
  </div>
</template>

<style scoped src="../assets/css/restaurantPage.css"></style>
